/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
/* import MessageInfo from '../components/MessageInfo';
import Search from '../components/Search'; */
import WeatherMain from '../components/WeatherMain';
import { getCurrentInfoWeather, getDailyInfoWeather } from '../utils/getInfoWeather';
import '../styles/Home.css';
import getLatLong from '../utils/getLatLong';
import setConnectionApi from '../utils/setConnectionApi';

const Home = () => {
  const [infoWeather, setInfoWeather] = useState({});
  const [latLong, setlatLong] = useState({});
  const [city, setCity] = useState('');

  useEffect(() => {
    /* setlatLong(getLatLong(getInfoWeatherAPI)); */
    setConnectionApi();
  }, []);

  function getInfoWeatherAPI(coordinates) {
    const { lat, lon } = coordinates;
    console.log(coordinates);
    console.log(getCurrentInfoWeather());
    //Obtener la información del clima
    /* const baseUrlInfoWeather = 'https://api.openweathermap.org/data/2.5/onecall';
    const configRequestWeather = {
      exclude: 'minutely,hourly,alerts,daily',
      units: 'metric',
      lang: 'es',
    };
    const httpRequestWeather = `${baseUrlInfoWeather}?lat=${lat}&lon=${lon}&exclude=${configRequestWeather.exclude}&units=${configRequestWeather.units}&lang=${configRequestWeather.lang}&appid=${process.env.WEATHER_API_KEY}`;

    fetch(httpRequestWeather)
      .then((res) => res.json())
      .then((info) => {
        setInfoWeather(info);
      })
      .catch((err) => console.log(err)); */
  }

  return (
    <div className='container'>
      <Header />
      {/* <Search city={city} setCity={setCity} handleSearchInfo={handleSearchInfo} /> */}
      <div className='main'>
        {
          Object.keys(infoWeather).length > 0 && <WeatherMain infoWeather={infoWeather} getInfoWeatherAPI={getInfoWeatherAPI} />
        }
      </div>
    </div>
  );
};

export default Home;

