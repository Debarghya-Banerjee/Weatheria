import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./style.css";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Barasat");
  const [info, setInfo] = useState({});
  const getInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4cca2e42139bed2a8722abd2fe51b290`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: mood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country } = data.sys;

      const myNewWeather = {
        temp,
        humidity,
        pressure,
        mood,
        name,
        country,
        speed,
      };

      setInfo(myNewWeather);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <>
      <div className="tName">
        <span>Weatheria</span>
      </div>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Enter the city name"
            autoFocus
            id="search"
            className="searchValue"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="searchButton" type="button" onClick={getInfo}>
            <i className={"wi wi-thermometer"}></i>
          </button>
        </div>
      </div>

      <Card info={info} />
    </>
  );
};

export default Weather;
