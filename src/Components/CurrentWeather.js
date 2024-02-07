import React from "react";
import { generateDay, generateTime } from "./DayTimeFunctions";

import maxTemp from "../icons/maxtemp.svg";
import minTemp from "../icons/mintemp.svg";
import windy from "../icons/windy.svg";
import humidity from "../icons/humidity.svg";
import sunrise from "../icons/sunrise.svg";
import sunset from "../icons/sunset.svg";

export default function CurrentWeather({ weather, handleClick, currentUnit }) {
  let tempUnit;
  let windUnit;

  if (currentUnit === "metric") {
    tempUnit = "ºC";
    windUnit = "m/s";
  } else {
    tempUnit = "ºF";
    windUnit = "mph";
  }

  return (
    <div className="row align-items-center">
      <h1 className="h1 text-capitalize">{weather.name}</h1>
      <p>
        Last updated: {generateDay(weather.date)}, {generateTime(weather.date)}
      </p>
      <p className="text-capitalize">{weather.description}</p>
      <div>
        <a
          href="#"
          className="opacity-50"
          onClick={() => handleClick("metric")}
        >
          ºC
        </a>{" "}
        |{" "}
        <a
          href="#"
          className="opacity-50"
          onClick={() => handleClick("imperial")}
        >
          ºF
        </a>
      </div>
      <div className="col-sm-6">
        <h2 className="display-1">
          {weather.temp}
          <span className="display-6">{tempUnit}</span>
        </h2>
      </div>
      <img
        className="col-sm-6 current-weather-img"
        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt={`${weather.description} icon`}
      />
      <div className="col-sm-6">
        <p>
          <img className="svg-icon" src={maxTemp} alt="Max temperature icon" />
          {weather.temp_max}
          {tempUnit}
        </p>
        <p>
          <img className="svg-icon" src={minTemp} alt="Min temperature icon" />
          {weather.temp_min}
          {tempUnit}
        </p>
        <p>
          <img className="svg-icon" src={windy} alt="Wind icon" />
          {weather.wind} {windUnit}
        </p>
        <p>
          <img className="svg-icon" src={humidity} alt="Humidity icon" />
          {weather.humidity}%
        </p>
        <p>
          <img className="svg-icon" src={sunrise} alt="Sunrise icon" />
          {generateTime(weather.sunrise)}
        </p>
        <p>
          <img className="svg-icon" src={sunset} alt="Sunset icon" />
          {generateTime(weather.sunset)}
        </p>
      </div>
    </div>
  );
}
