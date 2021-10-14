import React from 'react';
import CardCity from './CardCity';
/* import WeatherWeek from './WeatherWeek'; */

const WeatherMain = ({ infoWeather }) => {
  return (
    <div className='weather-info'>
      <CardCity infoWeather={infoWeather} />
      {/* <WeatherWeek /> */}
    </div>
  );
};

export default WeatherMain;
