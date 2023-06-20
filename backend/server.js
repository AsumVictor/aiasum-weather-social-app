require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 6000;
const corsOptions = require('./config/corsOptions')
const nonAuthWeatherRoutes = require('./routes/weather_routes_general')
const authWeatherRoutes = require("./routes/auth_weather_routes")
const feedsRoutes = require('./routes/feeds_routes')

app.use(cors(corsOptions))

app.use((req, res, next)=>{
    console.log(`* ${req.method}: ${req.path}`)
    next()
})

app.use('/get-weather-api', nonAuthWeatherRoutes)
app.use('/auth-weather', authWeatherRoutes)
app.use("/feeds", feedsRoutes)


mongoose.connect(process.env.DATABASE_URL).then(res=>{
    console.log("Connected to MongoDB")
    app.listen(PORT,()=>{
        console.log(`Connect to port ${PORT}`);
    });
}).catch(err=>{
    console.log(err)
})
