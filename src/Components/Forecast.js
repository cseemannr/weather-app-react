import React from "react";
import { generateDay } from "./DayTimeFunctions";

export default function Forecast({ forecast }) {
  return (
    <div className="col-sm-2">
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
