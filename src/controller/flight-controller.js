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

module.exports = {
  create,
};
