import React, { useState } from "react";
import CitySearch from "./CitySearch";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import TemperatureToggle from "./TemperatureToggle";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");

  // Dummy weather data
  const dummyData = {
    current: {
      city: "Pirjogoth",
      temperature: 15,
      humidity: 80,
      windSpeed: 10,
      icon: "🌤️",
    },
    forecast: [
      { day: "Mon", temp: 16, icon: "🌥️" },
      { day: "Tue", temp: 17, icon: "☀️" },
      { day: "Wed", temp: 18, icon: "🌤️" },
      { day: "Thu", temp: 19, icon: "🌦️" },
      { day: "Fri", temp: 20, icon: "🌥️" },
    ],
  };

  const fetchWeatherData = (city) => {
    // For this example, we're using dummy data.
    setWeatherData(dummyData);
  };

  const handleUnitToggle = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <CitySearch onSearch={fetchWeatherData} />
      <TemperatureToggle onToggle={handleUnitToggle} />
      {weatherData && (
        <>
          <CurrentWeather data={weatherData.current} unit={unit} />
          <WeatherForecast data={weatherData.forecast} unit={unit} />
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;
