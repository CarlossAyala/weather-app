/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../styles/ResultSearch.css';
import { getDailyAndCurrentData, getInfoCity } from '../utils/getInfoWeather';

const ResultSearch = ({ setInfoWeather, cities }) => {

  async function handleClickResultSearch(id) {
    //Cosas del DOM
    const boxResult = document.querySelector('.result-search');
    const boxSearch = document.querySelector('.box-search');
    boxResult.classList.add('hide-result');
    boxSearch.classList.remove('border-bottom');

    const location = await getInfoCity(id);
    getDailyAndCurrentData(location, setInfoWeather);
  }

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
