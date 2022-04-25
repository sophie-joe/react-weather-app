import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FromattedDate from "./FormattedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  //let [city, setCity] = useState(props.defaultcity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      // icon: response.data.weather[0].icon,
      icon: "https://openweathermap.org/img/wn/01n@2x.png",
      lowTemp: Math.round(response.data.main.temp_min),
      highTemp: Math.round(response.data.main.temp_max),
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>
          {weatherData.city}, {weatherData.country}
        </h1>
        <ul>
          <li>
            <FromattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                // src="https://openweathermap.org/img/wn/{weatherData.icon}@2x.png"
                src={weatherData.icon}
                alt="sunny with cloud"
                className="float-left"
              />
              <span className="current-temperature">
                {weatherData.temperature}
              </span>
              <span className="current-unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d06e9073694a0fc6183b83aa2f9b6a1d";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(weatherUrl).then(handleResponse);

    return "Loading...";
  }
}
