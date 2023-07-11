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
      const city = await City.findOne({
        attributes: ["id", "name", "createdAt", "updatedAt"],
        where: {
          id: cityId,
        },
      });

      return city;
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw error;
    }
  }

  async updateCity(cityId, updatedData) {
    try {
      const city = await City.findOne({
        attributes: ["id", "name", "createdAt", "updatedAt"],
        where: {
          id: cityId,
        },
      });
      if (city) {
        city.name = updatedData.name;
        await city.save();
        return city;
      } else {
        // Handle the case when the city with the given ID is not found
        throw new Error("City not found");
      }
    } catch (error) {
      console.log("something went wrong the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
