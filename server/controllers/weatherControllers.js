const SavedLocationLists = require("../models/saveLocationModel");

// get weather current for authenticated users
const transformAirPollutionData = (item) => {
  let transformedData = item.map((info) => {
    return {
      time: new Date(info.dt * 1000),
      air_quality_index: info.main.aqi || null,
      component_concentration:
        {
          Carbon_monoxide: info.components.co || null,
          Nitrogen_monoxide: info.components.no || null,
          Nitrogen_dioxide: info.components.no2 || null,
          Ozone_: info.components.o3 || null,
          Sulphur_dioxide: info.components.so2 || null,
          Fine_particles_matter: info.components.pm2_5 || null,
          Coarse_particulate_matter: info.components.pm10 || null,
          Ammonia_: info.components.nh3 || null,
        } || null,
    };
  });
  return transformedData
};

const getWeather = async (latitude, longitude) => {
  const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`;

  const WEATHER_FORCAST_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`;

  const CURRENT_AIR_POLUTION_URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`;

  const AIR_POLLUTION_FORCAST = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`;

  const weatherConditionURL = [
    fetch(CURRENT_WEATHER_URL),
    fetch(WEATHER_FORCAST_URL),
    fetch(CURRENT_AIR_POLUTION_URL),
    fetch(AIR_POLLUTION_FORCAST),
  ];

  let weatherInformation = await Promise.all(weatherConditionURL)
    .then((res) => {
      const responseData = res.map((response) => response.json());
      return Promise.all(responseData);
    })
    .then((data) => {
      // transform data
      const weatherForcastData = data[1].list.map((weatherCondition) => {
        return {
          time: new Date(weatherCondition.dt * 1000),
          weather: {
            main: weatherCondition.weather[0].main || null,
            description: weatherCondition.weather[0].description || null,
            icon: weatherCondition.weather[0].icon || null,
          },
          main: {
            temperature: weatherCondition.main.temp || null,
            temperature_feeling: weatherCondition.main.feels_like || null,
            min_temperature: weatherCondition.main.temp_min || null,
            min_temperature: weatherCondition.main.temp_max || null,
            pressure: weatherCondition.main.pressure || null,
            pressure_on_sea_level: weatherCondition.main.sea_level || null,
            pressure_on_ground_level: weatherCondition.main.grnd_level || null,
          },
          visibility: weatherCondition.visibility || null,
          wind: {
            speed: weatherCondition.wind.speed || null,
            direction: weatherCondition.wind.deg || null,
            gust: weatherCondition.wind.gust || null,
          },
          rain: weatherCondition.rain || null,
          clouds: weatherCondition.clouds.all || null,
        };
      });

      const current_Air_Pollution_Data = transformAirPollutionData(data[2].list)
      const forcast_Air_Pollution_Data = transformAirPollutionData(data[3].list)

      return {
        weatherConditionData: {
          weather: {
            main: data[0].weather[0].main || null,
            description: data[0].weather[0].description || null,
            icon: data[0].weather[0].icon || null,
          },
          main: {
            temperature: data[0].main.temp || null,
            temperature_feeling: data[0].main.feels_like || null,
            min_temperature: data[0].main.temp_min || null,
            min_temperature: data[0].main.temp_max || null,
            pressure: data[0].main.pressure || null,
            pressure_on_sea_level: data[0].main.sea_level || null,
            pressure_on_ground_level: data[0].main.grnd_level || null,
          },
          visibility: data[0].visibility || null,
          wind: {
            speed: data[0].wind.speed || null,
            direction: data[0].wind.deg || null,
            gust: data[0].wind.gust || null,
          },
          rain: data[0].rain || null,
          clouds: data[0].clouds.all || null,
          time: new Date(data[0].dt * 1000),
          country: data[0].sys.country || null,
          sun: {
            rise: data[0].sys.sunrise || null,
            set: data[0].sys.sunset || null,
          },
          timeZone: data[0].timezone || null,
          city: data[0].name || null,
        },
        weatherForcastData: weatherForcastData,
        airPollutionData: current_Air_Pollution_Data[0],
        airPollutionForcastData: forcast_Air_Pollution_Data,
        isSuccess: true,
      };
    })
    .catch((err) => {
      return {
        message: "Failed to fetch weather conditions",
        isSuccess: false,
        error: err,
      };
    });

  return weatherInformation;
};

const getWeatherCondition = async (req, res) => {
  const { lat, lon } = req.query;
  if ((!lat, !lon)) {
    return res
      .status(400)
      .json({ message: "All fields are required", isSuccess: false });
  }
  let weather = await getWeather(lat, lon);

  if (weather.isSuccess) {
    return res.status(200).json(weather);
  } else {
    return res.status(400).json(weather);
  }
};
// saving lcation for weather
const saveLocation = async (req, res) => {
  const { user, latitude, longitude, country, city } = req.body;

  //check if all field is there
  if ((!latitude, !longitude, !country, !city)) {
    return res
      .status(400)
      .json({ message: "You must complete all this field" });
  }

  const saveLocation = await SavedLocationLists.findOne({
    latitude,
    longitude,
    country,
    city,
  }).exec();

  if (saveLocation) {
    let removedLocation = await SavedLocationLists.deleteOne({
      latitude,
      longitude,
      country,
      city,
    });

    if (removedLocation) {
      return res.status(200).json({
        message: `You have removed ${city}, ${country} from your saves`,
        isSuccess: true,
      });
    } else {
      return res.status(400).json({
        message: `Oops! sorry an error occured. Try again`,
        isSuccess: false,
      });
    }
  }
  if (!saveLocation) {
    let addLocation = await SavedLocationLists.create({
      latitude,
      longitude,
      country,
      city,
    });

    if (addLocation) {
      return res.status(200).json({
        message: `You have added ${city}, ${country} to your saves`,
        isSuccess: true,
      });
    } else {
      return res.status(400).json({
        message: `Oops! sorry an error occured. Try again`,
        isSuccess: false,
      });
    }
  }
};

const getAllSavedLocationWeather = async (req, res) => {
  const savedWeathers = await SavedLocationLists.find();

  const allWeather = await Promise.all(
    savedWeathers.map(async (savedWeather) => {
      let weather = await getWeather(
        savedWeather.latitude,
        savedWeather.longitude
      );
      return {
        ...weather,
        weatherConditionData: {
          ...weather.weatherConditionData,
          country: savedWeather.country,
          city: savedWeather.city,
        },
      };
    })
  );

  allWeather.forEach((weather) => {
    if (!weather.isSuccess) {
      return res.status(400).json(allWeather);
    }
  });

  return res.status(200).json(allWeather);
};

// get air polution historical data
const airPollutionHistory = async (req, res) => {
  const latitude = 5.636096;
  const longitude = -0.196608;

  const URL = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}=508&lon=${longitude}=50&start=1686887061&end=1687319061&appid=${process.env.WEATHER_API_KEY}`;

  const tryq = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=508&lon=50&start=1686887061&end=1687319061&appid=${process.env.WEATHER_API_KEY}`;
  try {
    fetch(tryq)
      .then((res) => res.json())
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        return res.status(400).json({
          message: "Failed to fetch air poollution historical data",
          error: err,
        });
      });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch air poollution historical data",
      error: error,
    });
  }
};

module.exports = {
  getWeatherCondition,
  saveLocation,
  getAllSavedLocationWeather,
};
