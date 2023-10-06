const { Flights } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }

  async deleteFlight(flightId){
    try {
      const flight = await Flights.destroy({
        where: {
          id: flightId,
        }
      })
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      await Flights.update(data, {
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }

  async getAllFlight() {
    try {
      const flights = await Flights.findAll();
      return flights;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
