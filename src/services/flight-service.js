const { FlightRepository } = require("../repository/");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      const flight = await this.flightRepository.createFlight(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const response = await this.flightRepository.updateFlight(flightId, data);
      return response;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllFlight() {
    try {
      const flights = await this.flightRepository.getAllFlight();
      return flights;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
