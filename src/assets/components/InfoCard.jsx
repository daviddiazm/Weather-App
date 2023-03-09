import React, { useState } from 'react'
import "./InfoCard.css"

const InfoCard = ({ weather }) => {
  const [toCelcius, setToCelcius] = useState(false);

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
        urlICon = "src\assets\img\Thunderstorm.svg"
        break;

      case 'Drizzle':
        urlICon = "src\assets\img\showerRain.svg"
        break;

      case 'Rain':
        urlICon = "src\assets\img\Rain.svg"
        break;

      case 'Snow':
        urlICon = "src\assets\img\Snow.svg"
        break;

      case 'Atmosphere':
        urlICon = "src\assets\img\brokenClouds.svg"
        break;

      case "Clouds":
        urlICon = "src\assets\img\scatteredClouds.svg"
        break;

      case 'Fog':
        urlICon = "src\assets\img\mist.svg"
        break;

      case 'Haze':
        urlICon = "src\assets\img\mist.svg"
        break;

      case 'Smoke':
        urlICon = "src\assets\img\mist.svg"
        break;

      default:
        urlICon = "src\assets\img\clearSky.svg"
        break;
    }
    return urlICon
  }

console.log(weather.weather[0].main);
console.log(iconWeather(weather.weather[0].main));


  return (
    <div className='infoStyleCard'>
      <img src={iconWeather(weather.weather[0].main)} alt="" className='icon' />
      {getCelcius()}
      <p>Viento {weather.wind.speed}</p>
      <p>Nubes {weather.clouds.all}</p>
      <p>Presion {weather.main.pressure}</p>
      <p className='localitation'>{weather.name} {weather.sys.country}</p>

      <button className='text-cyan-800' onClick={() => (setToCelcius(!toCelcius))}>Cambiar °F / °C</button>
    </div>
  )
}

export default InfoCard