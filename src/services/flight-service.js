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
}

module.exports = FlightService;
