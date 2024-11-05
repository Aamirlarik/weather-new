import React from "react";

const TemperatureToggle = ({ onToggle }) => {
  const handleToggle = (e) => {
    onToggle(e.target.value);
  };

  return (
    <div>
      <button value="metric" onClick={handleToggle}>
        Celsius
      </button>
      <button value="imperial" onClick={handleToggle}>
        Fahrenheit
      </button>
    </div>
  );
};

export default TemperatureToggle;
