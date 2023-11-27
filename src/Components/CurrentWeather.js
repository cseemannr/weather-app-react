import React from "react";

import maxTemp from "../icons/maxtemp.svg";
import minTemp from "../icons/mintemp.svg";
import windy from "../icons/windy.svg";
import humidity from "../icons/humidity.svg";
import sunrise from "../icons/sunrise.svg";
import sunset from "../icons/sunset.svg";

export default function CurrentWeather({ weather }) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function generateTime(date) {
    let now = new Date(date * 1000);
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();

    if (currentHours < 10) {
      currentHours = `0${currentHours}`;
    }
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }

    return `${currentHours}:${currentMinutes}`;
  }

  function generateDay(date) {
    let now = new Date(date * 1000);
    let currentDay = daysOfWeek[now.getDay()];
    return currentDay;
  }

  return (
    <div className="row">
      <h1 className="h1 text-capitalize">{weather.name}</h1>
      <p>
        Last updated: {generateDay(weather.date)}, {generateTime(weather.date)}
      </p>
      <p className="text-capitalize">{weather.description}</p>
      <h2 className="display-1 col-sm-3">
        {weather.temp}
        <span className="display-6 opacity-50">ºC</span>
      </h2>
      <img
        className="col-sm-3 current-weather-img"
        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt={`${weather.description} icon`}
      />
      <div className="col-sm-6">
        <p>
          <img className="svg-icon" src={maxTemp} alt="Max temperature icon" />
          {weather.temp_max}ºC
        </p>
        <p>
          <img className="svg-icon" src={minTemp} alt="Min temperature icon" />
          {weather.temp_min}ºC
        </p>
        <p>
          <img className="svg-icon" src={windy} alt="Wind icon" />
          {weather.wind} m/s
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
