import React from 'react';
import { getHours } from '../utils/getDateFormate';
import '../styles/OtherCities.css';

const OtherCities = ({ citiesInfo }) => {
  return (
    <div className='box other-cities'>
      <h2 className='title-2'>Other Cities - Current</h2>
      {
        citiesInfo.length > 0 &&
        citiesInfo.map((city) => (
          <div key={`${city.current.cityName}`} className='cities--item'>
            <img
              className='cities-item--bg'
              alt='Fondo Oscuro con Ondas de colores'
              src={`${city.current.srcBg}`}
            />
            <div className='cities-item--info'>
              <span className='cities-item--name'>{`${city.current.cityName}`}</span>
              <span className='cities-item--time subtitle-1'>{`${getHours(city.current.time)}`}</span>
            </div>
            <span className='cities-item--temp'>{`${city.current.temperature}°`}</span>
          </div>
        ))
      }
    </div>
  );
};

export default OtherCities;

