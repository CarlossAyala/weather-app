import React from 'react';
import '../styles/ThisWeekWeather.css';
import { getDayFormate, dayNumberMonthString } from '../utils/getDateFormate';

const ThisWeekWeather = ({ next12Days }) => {
  return (
    <div className='box this-week'>
      <h2 className='title-2'>Next 12 Days</h2>
      <div className='card--content'>
        {
          next12Days.length > 0 &&
          next12Days.map((day, index) => (
            <div key={day.date} className='card--item'>
              <span className='card-item--day'>{index === 0 ? 'Mañana' : getDayFormate(day.date) }</span>
              <span className='subtitle-1'>{dayNumberMonthString(day.date)}</span>
              <img
                className='card-item--img'
                src={`https://developer.foreca.com/static/images/symbols/${day.symbol}.png`}
                alt='Icon info Weather'
              />
              <span className='card-item--temp'>{`${day.maxTemp}°/${day.minTemp}°`}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ThisWeekWeather;

