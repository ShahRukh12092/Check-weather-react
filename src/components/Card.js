import React, { useState, useEffect } from "react";
import "./weather.css";
const Card = ({ winfo }) => {
  const [icon, seticon] = useState("");

  const { temp, current, humidity, pressure, country, sunrise, sunset, name } =
    winfo;

  const countryStyle = {
    color: "#fff",
  };
  let seconds = sunrise;
  let date = new Date(seconds * 1000);
  let time = `${date.getHours()}:${date.getMinutes()} AM`;

  seconds = sunset;
  date = new Date(seconds * 1000);
  let time1 = `${date.getHours()}:${date.getMinutes()} PM`;

  useEffect(() => {
    if (current) {
      switch (current) {
        case "Clouds":
          seticon("wi-day-cloudy");
          break;
        case "Haze":
          seticon("wi-day-haze");
          break;
        case "Clear":
          seticon("wi-day-sunny");
          break;
        case "Wind":
          seticon("wi-day-windy");
          break;
        case "Snow":
          seticon("wi-day-snow");
          break;
        case "Rain":
          seticon("wi-day-rain");
          break;
        case "Lightning":
          seticon("wi-day-lightning");
          break;
        default:
          seticon("wi-day-sunny");
      }
    }
  }, [current]);
  return (
    <>
      <div className="wrap1">
        <div className="info">
          <div className="icon">
            <div class="image">
              <i className={`wi ${icon}`}></i>
            </div>
          </div>
          <div className="row1">
            <div className="temp">
              <span className="col">{temp}&deg;</span> Temperature
            </div>
            <div className="countryinfo">
              <h2 style={countryStyle}>{current}</h2>
              <span>
                <h4 className="city">{name}</h4>
                <h4 className="cont">{country}</h4>
              </span>
            </div>
          </div>
          <div className="row2">
            <div className="humd">
              <span className="col">{humidity}</span> Humidity
            </div>
            <div className="pres">
              <span className="col"> {pressure} MM</span> Pressure
            </div>
          </div>
          <div className="row3">
            <div className="humd">
              <span className="col"> {time}</span>SunRise
            </div>
            <div className="pres">
              <span className="col"> {time1}</span> SunSet
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
