const express = require("express");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 6000;
const nonAuthWeatherRoutes = require('./routes/weather_routes_general')
const authWeatherRoutes = require("./routes/auth_weather_routes")
const feedsRoutes = require('./routes/feeds_routes')

app.use((req, res, next)=>{
    console.log(`* ${req.method}: ${req.path}`)
    next()
})

app.use('/get-weather-api', nonAuthWeatherRoutes)
app.use('/auth-weather', authWeatherRoutes)
app.use("/feeds", feedsRoutes)

app.listen(PORT,()=>{
    console.log(`Connect to port ${PORT}`);
});