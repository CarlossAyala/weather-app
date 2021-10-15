/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/CardCity.css';

const CardCity = ({ current }) => {
  const codeImg = current.weather[0].icon;
  const nameCity = 'Posadas';
  const srcImg = `http://openweathermap.org/img/wn/${codeImg}@2x.png`;
  const temp = Number.parseInt(current.temp, 10);
  const weatherInfo = current.weather.map((item, index) => (
    <span key={index + item.description} className='main--climate'>{item.description}</span>
  ));
  const term = Number.parseInt(current.feels_like, 10);
  const windSpeed = Number.parseInt(current.wind_speed, 10);
  const hum = current.humidity;
  const clouds = Number.parseInt(current.clouds, 10);

  return (
    <div className='card-city'>
      <div className='card-city--box'>
        <div className='card-city--header'>
          <i className='bx bxs-map header--icon' />
          <span className='header--name'>
            { nameCity }
            {/* {' '}
            - */}
          </span>
          {/* <span className='header--date'>Monday, 14 April</span> */}
        </div>
        <div className='card-city--main'>
          <img className='main--img' src={srcImg} alt='tiem now' />
          <span className='main--temp' translate='no'>
            {temp}
            °
          </span>
          {weatherInfo}
        </div>
        <div className='card-city--footer'>
          <div className='card-city--footer__box'>
            <div className='footer-info--box'>
              <i className='bx bxs-thermometer' />
              <span className='footer--info' translate='no'>
                Térmica -
                {' '}
                {term}
                °
              </span>
            </div>
            <div className='footer-info--box'>
              <i className='bx bx-wind' />
              <span className='footer--info'>
                Viento -
                {' '}
                {windSpeed}
                {' '}
                m/s
              </span>
            </div>
          </div>
          <div className='card-city--footer__box'>
            <div className='footer-info--box'>
              <i className='bx bx-droplet' />
              <span className='footer--info'>
                Humedad -
                {' '}
                {hum}
                %
              </span>
            </div>
            <div className='footer-info--box'>
              <i className='bx bx-cloud' />
              <span className='footer--info'>
                Nubes -
                {' '}
                {clouds}
                %
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCity;
