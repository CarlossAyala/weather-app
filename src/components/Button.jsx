import React from 'react';
import '../styles/Button.css';

const Button = ({ getInfoWeatherAPI }) => {
  function refreshApi() {
    let location;
    const baseUrlLocation = `https://freegeoip.app/json/?apikey=${process.env.LOCATION_API_KEY}`;

    //Obtener la Lat y Long del usuario
    fetch(baseUrlLocation)
      .then((res) => res.json())
      .then((info) => {
        location = {
          lat: info.latitude,
          lon: info.longitude,
        };
        getInfoWeatherAPI(location);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <button className='btn-refresh' type='button' onClick={() => refreshApi()}>Recargar</button>
    </>
  );
};

export default Button;
