import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { BarLoader } from "react-spinners";

export default function Weather() {
  let key = "f3887e262c88d1158f7e2ef4998e234c";

  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");

  const handleUnitChange = (value) => {
    setUnit(value);
    callApiWeather(city);
  };

  function getForecast(res) {
    setForecast(res.data.daily.slice(1, 7));
    setLoading(false);
  }

  function getWeather(res) {
    setWeather({
      name: res.data.name,
      description: res.data.weather[0].description,
      date: res.data.dt,
      temp: Math.round(res.data.main.temp),
      temp_max: Math.round(res.data.main.temp_max),
      temp_min: Math.round(res.data.main.temp_min),
      wind: res.data.wind.speed,
      humidity: res.data.main.humidity,
      sunrise: res.data.sys.sunrise,
      sunset: res.data.sys.sunset,
      icon: res.data.weather[0].icon,
    });

    let lat = res.data.coord.lat;
    let lon = res.data.coord.lon;

    callApiForecast(lat, lon);
  }

  function callApiForecast(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${unit}`;
    axios.get(url).then(getForecast).catch(handleError);
  }

  function callApiWeather(search) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${key}&units=${unit} `;
    axios.get(url).then(getWeather).catch(handleError);
  }

  function handleError(error) {
    setErrorMessage(
      `Error ${error.response.data.cod}: ${error.response.data.message}. Please try again.`
    );
    setCity(null);
    setWeather(null);
    setForecast(null);
    setLoading(false);
  }

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    if (city) {
      callApiWeather(city);
    } else {
      setErrorMessage("Please search for a city.");
      setCity(null);
      setWeather(null);
      setForecast(null);
      setLoading(false);
    }
  }

  function handleChange(e) {
    setErrorMessage(null);
    setForecast(null);
    setWeather(null);
    setCity(e.target.value);
  }

  let form = (
    <form id="form-city" className="row mb-5" onSubmit={handleSubmit}>
      <div className="col-6">
        <input
          id="text-input"
          className="form-control"
          type="search"
          placeholder="Search for a city"
          aria-label="Search for a city"
          onChange={handleChange}
        />
      </div>
      <div className="col-6">
        <input type="submit" value="Search" className="btn btn-secondary" />
      </div>
    </form>
  );

  return (
    <div>
      <div className="container mt-5 mb-3 container-main p-4 shadow-lg">
        <h2>Weather App</h2>
        {form}

        {errorMessage ? (
          <div className="container error">{errorMessage}</div>
        ) : (
          ""
        )}

        {loading ? (
          <div className="container mb-5">
            <BarLoader color="#EC6E4C" />
          </div>
        ) : (
          ""
        )}

        {weather ? (
          <CurrentWeather
            weather={weather}
            handleClick={handleUnitChange}
            currentUnit={unit}
          />
        ) : (
          ""
        )}
        {forecast ? (
          <div className="forecast-container row text-center mt-5">
            {forecast.map((day, index) => {
              return <Forecast forecast={day} key={index} />;
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
