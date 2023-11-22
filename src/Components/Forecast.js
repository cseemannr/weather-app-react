import React from "react";

export default function Forecast({ forecast }) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function generateDay(date) {
    let now = new Date(date * 1000);
    let currentDay = daysOfWeek[now.getDay()];
    return currentDay;
  }

  return (
    <div className="col-2">
      <p className="forecast-day">{generateDay(forecast.dt).slice(0, 3)}</p>
      <img
        className="forecast-icon"
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt="{forecast.weather[0].description}"
      />
      <p>
        <span className="forecast-max">{Math.round(forecast.temp.max)}º</span>|
        <span>{Math.round(forecast.temp.min)}º</span>
      </p>
    </div>
  );
}
