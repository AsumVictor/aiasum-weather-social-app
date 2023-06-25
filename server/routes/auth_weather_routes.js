const express = require("express");
const router = express.Router();
const {getWeatherCondition, saveLocation, getAllSavedLocationWeather} = require("../controllers/weatherControllers");
//: get current weather with more details: 
router.get("/general", getWeatherCondition);

router.get("/saves", getAllSavedLocationWeather);

  router.post("/saves", saveLocation);

module.exports =  router;