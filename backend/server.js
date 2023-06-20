const express = require("express");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 6000;
const nonAuthWeather = require('./routes/weather_routes_general')
const authWeather = require("./routes/auth_weather_routes")
app.use((req, res, next)=>{
    console.log(`* ${req.method}: ${req.path}`)
    next()
})

app.use('/get-weather-api', nonAuthWeather)
app.use('/auth-weather', authWeather)
app.listen(PORT,()=>{
    console.log(`Connect to port ${PORT}`);
});