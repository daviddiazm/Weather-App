import React, { useState } from 'react'
import "./InfoCard.css"

const InfoCard = ({ weather }) => {
  const [toCelcius, setToCelcius] = useState(true);

  const getCelcius = () => {
    if (toCelcius) {
      const celcius = Math.floor(weather.main.temp - 273.15);
      return <p className='tempFC'>{celcius} °C</p>
    } else {
      const fahrenheit = Math.floor((weather.main.temp - 273.15) * 9 / 5 + 32)
      return <p className='tempFC'>{fahrenheit} °F</p>
    }
  }


  const iconWeather = (weatherStatus) => {
    let urlICon
    switch (weatherStatus) {

      case 'Thunderstorm':
        urlICon = "/img/Thunderstorm.svg"
        break;

      case 'Drizzle':
        urlICon = "/img/showerRain.svg"
        break;

      case 'Rain':
        urlICon = "/img/Rain.svg"
        break;

      case 'Snow':
        urlICon = "/img/Snow.svg"
        break;

      case 'Atmosphere':
        urlICon = "/img/brokenClouds.svg"
        break;

      case "Clouds":
        urlICon = "/img/scatteredClouds.svg"
        break;

      case 'Fog':
        urlICon = "/img/mist.svg"
        break;

      case 'Haze':
        urlICon = "/img/mist.svg"
        break;

      case 'Smoke':
        urlICon = "/img/mist.svg"
        break;

      default:
        urlICon = "/img/clearSky.svg"
        break;
    }
    return urlICon
  }

console.log(weather.weather[0].main);
console.log(iconWeather(weather.weather[0].main));


  return (
    <div className='infoStyleCard'>
      <img src={iconWeather(weather.weather[0].main)} alt="" className='icon' />
      {/* <img src="/public/img/clearSky.svg" alt="" className='icon' /> */}
      {getCelcius()}
      <p>Viento {weather.wind.speed}</p>
      <p>Nubes {weather.clouds.all}</p>
      <p>Presion {weather.main.pressure}</p>
      <p className='localitation'>{weather.name} {weather.sys.country}</p>

      <button onClick={() => (setToCelcius(!toCelcius))}>°F / °C</button>
    </div>
  )
}

export default InfoCard