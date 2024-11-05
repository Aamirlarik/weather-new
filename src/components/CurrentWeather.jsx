import React from "react";

const CurrentWeather = ({ data, unit }) => {
  const temperature =
    unit === "metric" ? data.temperature : (data.temperature * 9) / 5 + 32;

  return (
    <div>
      <h2>Current Weather in {data.city}</h2>
      <p>
        Temperature: {Math.round(temperature)}°{unit === "metric" ? "C" : "F"}
      </p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} m/s</p>
      <p>{data.icon}</p>
    </div>
  );
};

export default CurrentWeather;
