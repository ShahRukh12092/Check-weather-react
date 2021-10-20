import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./weather.css";

const Weather = () => {
  const [searchValue, setvalue] = useState("Mianwali");
  const [winfo, setWvalue] = useState({});

  const getWeatherInfo = async () => {
    try {
      console.log(searchValue);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ea3f915a00755b8723529749798b9af4`;
      let res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { name } = data;
      const { country, sunrise, sunset } = data.sys;
      const { temp, humidity, pressure } = data.main;
      const { main: current } = data.weather[0];
      const info = {
        temp,
        current,
        humidity,
        pressure,
        country,
        sunrise,
        sunset,
        name,
      };
      setWvalue(info);
      console.log(winfo);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="city name"
            autofocus
            id="search"
            class="searchitem"
            value={searchValue}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
          <button type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <Card winfo={winfo} />
    </>
  );
};

export default Weather;
