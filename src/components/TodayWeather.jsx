import React from 'react';
import SkeletonCardWeather from './SkeletonCardWeather';
import { getHours } from '../utils/getDateFormate';
import '../styles/TodayWeather.css';

const TodayWeather = ({ threeHourlyInfo }) => {
  return (
    <div className='today-weather'>
      <h2 className='title-2'>Hoy - Intervalos de 3 horas</h2>
      <div className='box-card-weather'>
        {
          threeHourlyInfo.length > 0 ?
            threeHourlyInfo.map((item) => (
              <div key={item.time} className='card-weather--item'>
                <span translate='no' className='card-weather--temp'>{`${item.temperature}°`}</span>
                <img
                  className='card-weather--img'
                  src={`https://developer.foreca.com/static/images/symbols/${item.symbol}.png`}
                  alt='Info Icon Weather'
                />
                <span className='card-weather--time'>{getHours(item.time)}</span>
              </div>
            )) :
            <SkeletonCardWeather />
        }
      </div>
    </div>
  );
};

export default TodayWeather;
