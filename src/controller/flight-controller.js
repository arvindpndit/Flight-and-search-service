const { FlightService } = require("../services/index");

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
    return res.status(201).json({
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
    return res.status(201).json({
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

//GET
const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlight();
    return res.status(201).json({
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
};
