import React from 'react';
import '../styles/WeatherContent.css';

const WeatherContent = () => {
  return (
    <div className='box weather-main'>
      <h2 className='title-2'>City</h2>
      <span className='subtitle-1'>Lunes 10, 10:00</span>
      <span className='infoclimate'>Clear</span>
      <div className='sideleft'>
        <img
          className='sideleft--img'
          src='https://developer.foreca.com/static/images/symbols/d000.png'
          alt='clear'
        />
        <span className='sideleft--temp'>20°</span>
      </div>
      <div className='sideright'>
        <div className='sideright--item'>
          <i className='bx icon bxs-thermometer' />
          <span>Térmica - 10°</span>
        </div>
        <div className='sideright--item'>
          <i className='bx icon bx-wind' />
          <span>Viento - 10km/h</span>
        </div>
        <div className='sideright--item'>
          <i className='bx icon bx-cloud-rain' />
          <span>Prob. Prec. - 10%</span>
        </div>
        <div className='sideright--item'>
          <i className='bx icon bx-water' />
          <span>Humedad - 10%</span>
        </div>
        <div className='sideright--item'>
          <i className='bx icon bx-cloud' />
          <span>Nubes - 10%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;

