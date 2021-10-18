/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import TitleApp from '../components/TitleApp';
/* import MessageInfo from '../components/MessageInfo'; */
import Search from '../components/Search';
/* import WeatherMain from '../components/WeatherMain'; */
import { getDailyAndCurrentData, getInfoCities } from '../utils/getInfoWeather';
import createJWT from '../utils/createJWT';
import WeatherContent from '../components/WeatherContent';
import TodayWeather from '../components/TodayWeather';
import ThisWeekWeather from '../components/ThisWeekWeather';
import OtherCities from '../components/OtherCities';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  const [infoWeather, setInfoWeather] = useState([]);
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  //Obtener lat lon del usuario y obtener un JWT
  useEffect(() => {
    /* createJWT();

    const httpRequest = `https://freegeoip.app/json/?apikey=${process.env.LOCATION_API_KEY}`;

    fetch(httpRequest)
      .then((res) => res.json())
      .then((data) => {
        const coordinates = {
          lon: data.longitude,
          lat: data.latitude,
        };
        getDailyAndCurrentData(coordinates, setInfoWeather);
      })
      .catch((err) => console.log(err)); */

  }, []);

  /* async function handleSearchCity(city) {
    const cities = await getInfoCities(city);
    setCities(cities); */
  /* getDailyAndCurrentData(coord, setInfoWeather); */
  //Notas
  /* {
    Object.keys(infoWeather).length > 0 ? 'infoWeather' : 'Cacio'
  } */

  return (
    <div className='container'>
      <TitleApp />
      <Search setInfoWeather={setInfoWeather} city={city} cities={cities} setCity={setCity} handleSearchCity={handleSearchCity} />
      <WeatherContent infoWeather={infoWeather} />
      <TodayWeather />
      <ThisWeekWeather />
      <OtherCities />
      <Footer />
    </div>
  );
};

export default Home;

