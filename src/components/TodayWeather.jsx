import React from 'react';
import '../styles/TodayWeather.css';
import { getHours } from '../utils/getDateFormate';

const TodayWeather = ({ threeHourlyInfo }) => {
  return (
    <div className='box today'>
      <h2 className='title-2'>Today - 3 hour intervals</h2>
      <div className='card--content'>
        {
          threeHourlyInfo.length > 0 &&
          threeHourlyInfo.map((item) => (
            <div key={item.time} className='card--item'>
              <span translate='no' className='card-item--temp'>{`${item.temperature}°`}</span>
              <img
                className='card-item--img'
                src={`https://developer.foreca.com/static/images/symbols/${item.symbol}.png`}
                alt='Info Icon Weather'
              />
              <span className='card-item--time'>{getHours(item.time)}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TodayWeather;

