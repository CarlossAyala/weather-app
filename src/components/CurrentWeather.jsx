import React from 'react';
import { getTimeCurrent } from '../utils/getDateFormate';
import '../styles/CurrentWeather.css';

const CurrentWeather = ({ currentInfo }) => {
  return (
    <div className='current-weather'>
      <div className='box-info-city'>
        <h2 className='title-2 city'>{currentInfo.city}</h2>
        <span className='date'>{getTimeCurrent(currentInfo.time)}</span>
      </div>
      <div className='text-info-weather'>
        <span>{currentInfo.symbolPhrase}</span>
      </div>
      <div className='box-current-info'>
        <div className='box-one'>
          <img
            className='box-one--img'
            src={`https://developer.foreca.com/static/images/symbols/${currentInfo.symbol}.png`}
            alt='Info Icon Weather'
          />
          <span className='box-one--temp' translate='no'>{`${currentInfo.temperature}°`}</span>
        </div>
        <div className='box-two'>
          <div className='box-two--item'>
            <i className='bx icon bxs-thermometer' />
            <span translate='no'>{`Térmica - ${currentInfo.feelsLikeTemp}° `}</span>
          </div>
          <div className='box-two--item'>
            <i className='bx icon bx-wind' />
            <span translate='no'>{`Viento - ${currentInfo.windSpeed}km/h`}</span>
          </div>
          <div className='box-two--item'>
            <i className='bx icon bx-cloud-rain' />
            <span translate='no'>{`Prob. Prec. - ${currentInfo.precipProb}%`}</span>
          </div>
          <div className='box-two--item'>
            <i className='bx icon bx-water' />
            <span translate='no'>{`Humedad - ${currentInfo.relHumidity}%`}</span>
          </div>
          <div className='box-two--item'>
            <i className='bx icon bx-cloud' />
            <span translate='no'>{`Nubes - ${currentInfo.cloudiness}%`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
