import React from 'react';
import '../styles/CardCity.css';

const CardCity = ({ infoWeather }) => {
  const nameCity = infoWeather[1].name;
  const srcImg = infoWeather[2].weather_icons[0];
  const temp = infoWeather[2].temperature;
  const weatherInfo = infoWeather[2].weather_descriptions.join(' - ');
  const term = infoWeather[2].feelslike;
  const windSpeed = infoWeather[2].wind_speed;
  const hum = infoWeather[2].humidity;
  const vis = infoWeather[2].visibility;

  return (
    <div className='card-city'>
      <div className='title-seccion'>Today</div>
      <div className='card-city--box'>
        <div className='card-city--header'>
          <i className='bx bxs-map header--icon' />
          <span className='header--name'>
            { nameCity }
            {' '}
            -
          </span>
          <span className='header--date'>Monday, 14 April</span>
        </div>
        <div className='card-city--main'>
          <img className='main--img' src={srcImg} alt='tiem now' />
          <span className='main--temp' translate='no'>
            {temp}
            °
          </span>
          <span className='main--climate'>{weatherInfo}</span>
        </div>
        <div className='card-city--footer'>
          <div className='card-city--footer__box'>
            <div className='footer-info--box'>
              <i className='bx bxs-thermometer' />
              <span className='footer--info'>
                Term -
                {' '}
                {term}
                °
              </span>
            </div>
            <div className='footer-info--box'>
              <i className='bx bx-wind' />
              <span className='footer--info'>
                Wind -
                {' '}
                {windSpeed}
                km/h
              </span>
            </div>
          </div>
          <div className='card-city--footer__box'>
            <div className='footer-info--box'>
              <i className='bx bx-droplet' />
              <span className='footer--info'>
                Hum -
                {' '}
                {hum}
                %
              </span>
            </div>
            <div className='footer-info--box'>
              <i className='bx bx-show' />
              <span className='footer--info'>
                Vis -
                {' '}
                {vis}
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
