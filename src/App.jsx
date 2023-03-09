import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Loader from './assets/components/Loader';
import InfoCard from './assets/components/InfoCard';

const App = () => {

  const [weather, setweather] = useState();

  // const urlApiTest = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3b1f20f6f7714d269973bdb7e5ecc486`
  const getData = async (lat, long) => {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3b1f20f6f7714d269973bdb7e5ecc486&lang=es`
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
      // console.log();
    })
  }, [])



  return (
    <div className=" App h-full flex flex-col justify-center items-center p-10 text-cyan-200">
      <h1>Weather App</h1>
      {!weather ?
        <Loader />
        : <InfoCard weather={weather}/>}
    </div>
  );
};

export default App;
