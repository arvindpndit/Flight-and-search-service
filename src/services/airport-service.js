const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.AirportRepository = new AirportRepository();
  }

  async createAirport({ name, cityId }) {
    try {
      const airport = await this.AirportRepository.createAirport({
        name,
        cityId,
      });
      return airport;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteAirport(id) {
    try {
      const airport = await this.AirportRepository.deleteAirport(id);
      return airport;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getAirport(id) {
    try {
      const airport = await this.AirportRepository.getAirport(id);
      return airport;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
