import React from 'react';
import CardCity from './CardCity';
/* import WeatherWeek from './WeatherWeek'; */
import '../styles/MessageInfo.css';

const WeatherMain = ({ infoWeather }) => {
  const messageError = <div className='message-info'>Ciudad no encontrada, escríbela bien!</div>;
  return (
    <div className='weather-info'>
      {
        infoWeather[0].success ? <CardCity infoWeather={infoWeather} /> : messageError
      }
      {/* <WeatherWeek /> */}
    </div>
  );
};

export default WeatherMain;
