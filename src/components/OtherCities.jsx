import React from 'react';
import SkeletonOtherCities from './SkeletonOtherCities';
import { getHours } from '../utils/getDateFormate';
import '../styles/OtherCities.css';

const OtherCities = ({ citiesInfo }) => {
  return (
    <div className='other-cities'>
      <h2 className='title-2'>Otras ciudades - Ahora</h2>
      <div className='box-other-cities'>
        {
          citiesInfo.length > 0 ?
            citiesInfo.map((city) => (
              <div key={`${city.current.cityName}`} className='box-cities--item'>
                <img
                  className='box-cities--img'
                  src={`${city.current.srcBg}`}
                  alt='imagen fachera'
                />
                <div className='box-cities--info'>
                  <div className='box-cities--city'>
                    <span className='box-cities-city--name'>{`${city.current.cityName}`}</span>
                    <span className='box-cities-city--time'>{`${getHours(city.current.time)}`}</span>
                  </div>
                  <span translate='no' className='box-cities-city--temp'>{`${city.current.temperature}°`}</span>
                </div>
              </div>
            )) :
            <SkeletonOtherCities />
        }
      </div>
    </div>
  );
};

export default OtherCities;
