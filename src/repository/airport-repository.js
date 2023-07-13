const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, cityId }) {
    try {
      const airport = await Airport.create({
        name,
        cityId,
      });
      return airport;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw error;
    }
  }

  async deleteAirport(cityId) {
    try {
      const airport = await Airport.destroy({
        where: {
          cityId: cityId,
        },
      });
      return airport;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw error;
    }
  }

  async getAirport(id) {
    try {
      const airport = await Airport.findOne({
        where: {
          id: id,
        },
      });
      return airport;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw error;
    }
  }

  async getAllAirport(id) {
    try {
      const airport = await Airport.findAll();
      return airport;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw error;
    }
  }
}

module.exports = AirportRepository;
