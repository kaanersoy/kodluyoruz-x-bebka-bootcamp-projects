import './App.scss';
import React, { useEffect, useState } from 'react';
import loadingIcon from './assets/loading-icon.svg';

function App() {
  const [weathData, setWeathData] = useState({});
  const [city, setCity] = useState('Istanbul');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData(city);
  }, [city]);

  useEffect(() => {
    console.log(weathData);
  }, [weathData]);

  function getData(city) {
    const secretKey = process.env.REACT_APP_WEATHER_KEY;
    setIsLoading(true);
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${secretKey}&q=${city}&days=3`;
    setTimeout(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setWeathData(res);
          setIsLoading(false);
        });
    }, 200);
  }

  const cityArray = ['London', 'Bursa', 'Eskisehir', 'Istanbul'];

  return (
    <div className="App">
      <h1>Weatherr</h1>
      <div className="select-box">
        <select
          name="changecity"
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          id="changecity"
        >
          {cityArray.map((ct, i) => (
            <option value={ct} key={i}>
              {ct}
            </option>
          ))}
        </select>
      </div>
      {weathData.location ? (
        <div className="weather">
          {isLoading ? (
            <div className="weather__loading">
              <img src={loadingIcon} alt="Loading..." />
            </div>
          ) : null}
          {!isLoading ? (
            <div className="weather-wrapper">
              <div className="weather__card">
                <div className="weather__card__header">
                  <h3>Current</h3>
                  <div className="weather__card__header__icon">
                    <img
                      src={weathData.current.condition.icon}
                      alt={weathData.current.condition.text}
                    />
                  </div>
                  <div className="weather__card__header__location">
                    <h3>{weathData.location.name}</h3>
                  </div>
                </div>
                <div className="weather__card__content">
                  <div className="weather__card__content__temp">
                    <p>{weathData.current.temp_c}</p>
                  </div>
                </div>
              </div>
              <div className="weather__side">
                <div className="weather__side__header">
                  <h1>Next Days</h1>
                </div>
                {weathData.forecast.forecastday.map((day, i) => (
                  <div className="weather__side__row" key={i}>
                    <div className="weather__side__row__icon">
                      <img src={day.day.condition.icon} alt="" />
                    </div>
                    <div className="weather__side__row__content">
                      <p>Date: {day.date.split('-').reverse().join('/')}</p>
                      Avg Temp(&deg;C) : {day.day.avgtemp_c} &deg;C
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default App;
