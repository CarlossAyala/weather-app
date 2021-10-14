import React from 'react';
import '../styles/CardCity.css';

const CardCity = ({ infoWeather }) => {
  const nameCity = infoWeather.length > 0 ? infoWeather[1].name : null;
  const srcImg = infoWeather.length > 0 ? infoWeather[2].weather_icons[0] : null;
  const temp = infoWeather.length > 0 ? infoWeather[2].temperature : null;
  const weatherInfo = infoWeather.length > 0 ? infoWeather[2].weather_descriptions.join(' - ') : null;
  const term = infoWeather.length > 0 ? infoWeather[2].feelslike : null;
  const windSpeed = infoWeather.length > 0 ? infoWeather[2].wind_speed : null;
  const hum = infoWeather.length > 0 ? infoWeather[2].humidity : null;
  const vis = infoWeather.length > 0 ? infoWeather[2].visibility : null;

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
