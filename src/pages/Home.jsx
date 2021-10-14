/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MessageInfo from '../components/MessageInfo';
import Search from '../components/Search';
import WeatherMain from '../components/WeatherMain';
import getInfoWeatherLocalStorage from '../utils/getInfoWeatherLocalStorage';
import '../styles/Home.css';
import saveInfoWeatherInLocalStorage from '../utils/saveInfoWeatherInLocalStorage';

const Home = () => {
  const [infoWeather, setInfoWeather] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    const infoWeatherLocalStorage = getInfoWeatherLocalStorage();
    setInfoWeather(infoWeatherLocalStorage);
  }, []);

  function handleSearchInfo() {
    if (city === '' || city === ' ') return alert('¡EL CAMPO NO DEBE ESTAR EN BLANCO!');

    const urlBase = 'http://api.weatherstack.com';
    const httpRequest = `${urlBase}/current?access_key=${process.env.API_KEY}&query=${city}`;

    fetch(httpRequest)
      .then((res) => res.json())
      .then((weather) => {
        const newInfoWeather = [weather.request, weather.location, weather.current];
        setInfoWeather(newInfoWeather);
        saveInfoWeatherInLocalStorage(newInfoWeather);
        console.log(newInfoWeather);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className='container'>
      <Header />
      <Search city={city} setCity={setCity} handleSearchInfo={handleSearchInfo} />
      <div className='main'>
        {
          infoWeather.length > 0 ? <WeatherMain infoWeather={infoWeather} /> : <MessageInfo />
        }
      </div>
    </div>
  );
};

export default Home;

