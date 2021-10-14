import React from 'react';
import '../styles/WeatherWeek.css';

const WeatherWeek = () => {
  return (
    <div className='weather-week'>
      <div className='title-seccion'>In the week</div>
      <div className='weather-week--box'>
        <div className='week-day active'>
          <img
            className='week-day--img'
            alt='climate'
            src='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
          />
          <span className='week-day--day'>Sun</span>
          <span className='week-day--temp'>18°</span>
        </div>
        <div className='week-day active'>
          <img
            className='week-day--img'
            alt='climate'
            src='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
          />
          <span className='week-day--day'>Sun</span>
          <span className='week-day--temp'>18°</span>
        </div>
        <div className='week-day active'>
          <img
            className='week-day--img'
            alt='climate'
            src='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
          />
          <span className='week-day--day'>Sun</span>
          <span className='week-day--temp'>18°</span>
        </div>
        <div className='week-day active'>
          <img
            className='week-day--img'
            alt='climate'
            src='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
          />
          <span className='week-day--day'>Sun</span>
          <span className='week-day--temp'>18°</span>
        </div>
        <div className='week-day active'>
          <img
            className='week-day--img'
            alt='climate'
            src='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
          />
          <span className='week-day--day'>Sun</span>
          <span className='week-day--temp'>18°</span>
        </div>
        <div className='week-day active'>
          <img
            className='week-day--img'
            alt='climate'
            src='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
          />
          <span className='week-day--day'>Sun</span>
          <span className='week-day--temp'>18°</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWeek;
