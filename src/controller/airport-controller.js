const { AirportService } = require("../services/index");
const { SuccessCodes } = require("../utils/codes");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport({
      name: req.body.name,
      cityId: req.body.cityId,
    });
    return res.status(SuccessCodes.CREATED).json({
      data: airport,
      success: true,
      message: "Airport created successfully",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create an airport",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const airport = await airportService.deleteAirport(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "Airport deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete an airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "Airport fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch an airport",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airport = await airportService.getAllAirport();
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "Airports fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch airports",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: airport,
      success: true,
      message: "Successfully updated airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "airport update is unsuccessfull",
      error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  getAll,
  update,
};
