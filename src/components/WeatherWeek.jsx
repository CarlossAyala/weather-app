import React from 'react';
import '../styles/WeatherWeek.css';

const WeatherWeek = ({ daily }) => {
  console.log(daily);
  const items = daily.map((item) => (
    <div key={item.dt} className='week-day active'>
      <img
        key={`img_${item.dt}`}
        className='week-day--img'
        alt='climate'
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
      />
      <span key={`day_${item.dt}`} className='week-day--day'>{}</span>
      <span key={`temp_${item.dt}`} className='week-day--temp'>{`${Number.parseInt(item.temp.max, 10)}° / ${Number.parseInt(item.temp.min, 10)}°`}</span>
    </div>
  ));

  return (
    <div className='weather-week'>
      <div className='title-seccion'>In the week</div>
      <div className='weather-week--box'>
        {items}
      </div>
    </div>
  );
};

export default WeatherWeek;
