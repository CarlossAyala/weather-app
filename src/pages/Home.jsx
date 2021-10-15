/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
/* import MessageInfo from '../components/MessageInfo';
import Search from '../components/Search'; */
import WeatherMain from '../components/WeatherMain';
import '../styles/Home.css';

const Home = () => {
  const [infoWeather, setInfoWeather] = useState({});
  /*  const [city, setCity] = useState(''); */

  useEffect(() => {
    let location;
    const baseUrlLocation = `https://freegeoip.app/json/?apikey=${process.env.LOCATION_API_KEY}`;

    //Obtener la Lat y Long del usuario
    fetch(baseUrlLocation)
      .then((res) => res.json())
      .then((info) => {
        location = {
          lat: info.latitude,
          lon: info.longitude,
        };
        getInfoWeatherAPI(location);
      })
      .catch((err) => console.log(err));
  }, []);

  function getInfoWeatherAPI({ lat, lon }) {
    //Obtener la información del clima
    const baseUrlInfoWeather = 'https://api.openweathermap.org/data/2.5/onecall';
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
      .catch((err) => console.log(err));
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

