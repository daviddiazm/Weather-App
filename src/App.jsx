import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './assets/components/Loader';

const App = () => {

  const [weather, setweather] = useState();

  // const urlApiTest = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3b1f20f6f7714d269973bdb7e5ecc486`
  const getData = async (lat, long) => {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3b1f20f6f7714d269973bdb7e5ecc486`
    try {
      const res = await axios.get(urlApi)
      setweather(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let long = pos.coords.longitude;
      let lat = pos.coords.latitude;

      getData(lat, long);
    })
  }, [])



  return (
    <div className="h-full flex flex-col justify-center items-center p-10 text-cyan-200 text-5xl">
      <h1>clima</h1>
      {!weather ?
        <Loader />
        : <div>
          <p> La ciudad es {weather.name}</p>
          <br />
          <p> la temperatura es {weather.main.temp} kelvin</p>
        </div>}
    </div>
  );
};

export default App;
