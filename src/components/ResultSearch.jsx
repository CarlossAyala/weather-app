/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { getInfoCityById } from '../utils/getInfoWeather';
import '../styles/ResultSearch.css';

const ResultSearch = ({ resetWeatherInfo, cities, handleGetInfoWeather }) => {
  const handleClickResultSearch = async (id) => {
    //Para que se vea el Skeleton Loader B)
    resetWeatherInfo();
    //Ocultar resultados del Buscador
    const boxResult = document.querySelector('.result-search');
    const boxSearch = document.querySelector('.box-search');
    boxResult.classList.add('hide-result');
    boxSearch.classList.remove('border-bottom');

    const location = await getInfoCityById(id);
    //Buscar información actual, cada hora y semanal
    handleGetInfoWeather(location);
  };

  return (
    <div className='result-search'>
      {
        cities.map((item) => (
          <div
            data-id={item.id}
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();
              handleClickResultSearch(item.id);
            }}
            className='result-item'
          >
            <i className='bx bx-current-location result-item--icon' />
            <div className='result-item--box'>
              <span className='result-item--city'>{item.name}</span>
              <span className='result-item--location'>
                {item.adminArea}
                {' '}
                -
                {' '}
                {item.country}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ResultSearch;
