const express = require("express");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 6000;
const nonAuthWeather = require('./routes/weather_routes_general')

app.use((req, res, next)=>{
    console.log(`* ${req.method}: ${req.path}`)
    next()
})

app.use('/get-weather-api', nonAuthWeather)

app.listen(PORT,()=>{
    console.log(`Connect to port ${PORT}`);
});