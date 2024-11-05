import React from "react";

const WeatherForecast = ({ data, unit }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <ul>
        {data.map((day, index) => (
          <li key={index}>
            {day.day}:{" "}
            {Math.round(unit === "metric" ? day.temp : (day.temp * 9) / 5 + 32)}
            °{unit === "metric" ? "C" : "F"} {day.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
