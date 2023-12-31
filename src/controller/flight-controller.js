const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/codes");

const flightService = new FlightService();

//POST
const create = async (req, res) => {
  try {
    const flightData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      totalSeats: req.body.totalSeats,
    };
    const flight = await flightService.createFlight(flightData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "flight created successfully",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error,
    });
  }
};

//GET
const get = async (req, res) => {
  try {
    const flightId = req.params.id;
    const flight = await flightService.getFlight(flightId);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "flight fetched successfully",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the flight",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await flightService.deleteFlight(req.params.id);
    console.log(response)  
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully deleted the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the flight",
      err: error,
    });
  }
}

//update
const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully updated the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the flights",
      err: error,
    });
  }
};

//GET
const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlight();
    return res.status(SuccessCodes.OK).json({
      data: flights,
      success: true,
      message: "flights fetched successfully",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
  update,
  destroy,
};
