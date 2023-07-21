const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(cityData) {
    try {
      const city = await this.CityRepository.createCity(cityData);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const deletedcityResponse = await this.CityRepository.deleteCity(cityId);
      return deletedcityResponse;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.CityRepository.getAllCities({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async updateCity(cityId, cityData) {
    try {
      const cityResponse = await this.CityRepository.updateCity(
        cityId,
        cityData
      );
      return cityResponse;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
