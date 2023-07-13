const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport({
      name: req.body.name,
      cityId: req.body.cityId,
    });
    return res.status(201).json({
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
    return res.status(200).json({
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
    return res.status(200).json({
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

module.exports = {
  create,
  destroy,
  get,
};
