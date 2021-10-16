import React from 'react';
import CardCity from './CardCity';
/* import WeatherWeek from './WeatherWeek'; */
import '../styles/WeatherMain.css';
import Button from './Button';

const WeatherMain = ({ infoWeather, getInfoWeatherAPI }) => {
  /* const messageError = <div className='message-info'>Ciudad no encontrada, escríbela bien!</div>; */
  return (
    <div className='weather-info'>
      <CardCity current={infoWeather.current} />
      {/* <WeatherWeek daily={infoWeather.daily} /> */}
      <Button getInfoWeatherAPI={getInfoWeatherAPI} />
    </div>
  );
};

export default WeatherMain;
