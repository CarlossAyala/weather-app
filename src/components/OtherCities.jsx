import React from 'react';
import '../styles/OtherCities.css';

const OtherCities = () => {
  return (
    <div className='box other-cities'>
      <h2 className='title-2'>Other Cities</h2>

      <div className='cities--item'>
        <img
          className='cities-item--bg'
          alt='Paraguay'
          src='../assets/bg-img-1.png'
        />
        <div className='cities-item--info'>
          <span className='cities-item--name'>Posadas, Argentina</span>
          <span className='cities-item--time subtitle-1'>21:00</span>
        </div>
        <span className='cities-item--temp'>20°</span>
      </div>
      <div className='cities--item'>
        <img
          className='cities-item--bg'
          alt='Paraguay'
          src='../assets/bg-img-2.png'
        />
        <div className='cities-item--info'>
          <span className='cities-item--name'>Posadas, Argentina</span>
          <span className='cities-item--time subtitle-1'>21:00</span>
        </div>
        <span className='cities-item--temp'>20°</span>
      </div>
      <div className='cities--item'>
        <img
          className='cities-item--bg'
          alt='Paraguay'
          src='../assets/bg-img-3.png'
        />
        <div className='cities-item--info'>
          <span className='cities-item--name'>Posadas, Argentina</span>
          <span className='cities-item--time subtitle-1'>21:00</span>
        </div>
        <span className='cities-item--temp'>20°</span>
      </div>
    </div>
  );
};

export default OtherCities;

