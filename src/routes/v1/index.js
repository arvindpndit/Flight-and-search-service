const express = require("express");

const AirportController = require("../../controller/airport-controller");
const CityController = require("../../controller/city-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/cities", CityController.getAll);

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);

module.exports = router;
