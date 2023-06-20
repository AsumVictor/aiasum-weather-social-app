const express = require("express");
const router = express.Router();

//: get current weather with more details: 
router.get("/general", () => {
  console.log("Current weather condition for authenticated use");
});

router.get("/saved", () => {
    console.log("Saved location api");
  });

module.exports =  router;