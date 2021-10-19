import React from 'react';
import { getTimeCurrent } from '../utils/getDateFormate';
import '../styles/WeatherContent.css';

const WeatherContent = ({ currentInfo }) => {
  return (
    <div className='box weather-main'>
      <h2 className='title-2'>{currentInfo.city}</h2>
      <span className='subtitle-1'>{getTimeCurrent(currentInfo.time)}</span>
      <span className='infoclimate'>{currentInfo.symbolPhrase}</span>
      <div className='sideleft'>
        <img
          className='sideleft--img'
          src={`https://developer.foreca.com/static/images/symbols/${currentInfo.symbol}.png`}
          alt='Info Icon Weather'
        />
        <span translate='no' className='sideleft--temp'>{`${currentInfo.temperature}°`}</span>
      </div>
      <div className='sideright'>
        <div className='sideright--item'>
          <i className='bx icon bxs-thermometer' />
          <span>
            Térmica -
            {' '}
            {`${currentInfo.feelsLikeTemp}°`}
          </span>
        </div>
        <div className='sideright--item'>
          <i className='bx icon bx-wind' />
          <span>
            Viento -
            {' '}
            {`${currentInfo.windSpeed}km/h`}
          </span>
        </div>
        <div className='sideright--item'>
          <i className='bx icon bx-cloud-rain' />
          <span>
            Prob. Prec. -
            {' '}
            {`${currentInfo.precipProb}%`}
          </span>
        </div>
        <div className='sideright--item'>
          <i className='bx icon bx-water' />
          <span>
            Humedad -
            {' '}
            {`${currentInfo.relHumidity}%`}
          </span>
        </div>
        <div className='sideright--item'>
          <i className='bx icon bx-cloud' />
          <span>
            Nubes -
            {' '}
            {`${currentInfo.cloudiness}%`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;

