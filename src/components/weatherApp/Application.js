import React, { useState } from 'react';
import { Fetch } from "./api/Fetch";

function Application() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await Fetch(query);
      setWeather(data);
      setQuery();
      console.log(data);
    }
  }
  return (
    <div>

      <div className="aplication">
        <input value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          className='search'
          type="text" placeholder='Search...' />
      </div>

      {
        weather.main && (
          <div className="city">
            <div className="info">
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
            </div>
            <div className="details">
              <h2 className='cityName'>
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
              <div className="cityTemp">
                {Math.round(weather.main.temp)}
                <sup>&deg;c</sup>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          </div>
        )
      }



    </div>
  )
}

export default Application