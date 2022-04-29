import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let max = Math.round(props.data.temp.max);
    return `${max}°`;
  }

  function minTemp() {
    let min = Math.round(props.data.temp.min);
    return `${min}°`;
  }

  function calcDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div classname="WeatherForecast-day">{calcDate()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-max">{maxTemp()}</span>
        <span className="WeatherForecast-min">{minTemp()}</span>
      </div>
    </div>
  );
}
