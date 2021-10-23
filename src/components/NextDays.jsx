import React from 'react';
import { getDayFormate, dayNumberMonthString } from '../utils/getDateFormate';
import SkeletonCardWeather from './SkeletonCardWeather';
import '../styles/NextDays.css';

const NextDays = ({ next12Days }) => {
  return (
    <div className='next-days-weather'>
      <h2 className='title-2'>Próximos 12 días</h2>
      <div className='box-card-weather'>
        {
          next12Days.length > 0 ?
            next12Days.map((day, index) => (
              <div key={day.date} className='card-weather--item'>
                <span className='card-weather--day'>{index === 0 ? 'Mañana' : getDayFormate(day.date) }</span>
                <span className='card-weather--date'>{dayNumberMonthString(day.date)}</span>
                <img
                  className='card-weather--img'
                  src={`https://developer.foreca.com/static/images/symbols/${day.symbol}.png`}
                  alt='Info Icon Weather'
                />
                <span translate='no' className='card-weather--temp'>{`${day.maxTemp}°/${day.minTemp}°`}</span>
              </div>
            )) :
            <SkeletonCardWeather />
        }
      </div>
    </div>
  );
};

export default NextDays;
