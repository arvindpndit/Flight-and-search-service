const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, updatedData) {
    try {
      const city = await City.findByPk(cityId);
      city.name = updatedData.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
