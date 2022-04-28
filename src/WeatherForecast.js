import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "d06e9073694a0fc6183b83aa2f9b6a1d";
  let lat = props.coordinates.lon;
  let lon = props.coordinates.lat;

  let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiForecastUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div classname="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={30} />
          <div className="WeatherForecast-temp"></div>
          <span className="WeatherForecast-max">19°</span>
          <span className="WeatherForecast-min">10°</span>
        </div>
      </div>
    </div>
  );
}
