/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ResultSearch from './ResultSearch';
import '../styles/Search.css';

const Search = (props) => {
  const { city, cities, setCity, handleSearchCity, handleGetInfoWeather } = props;
  const borderBottom = cities.length > 0 ? 'box-search border-bottom' : 'box-search';
  const resultSearch = document.querySelector('.result-search');
  const boxSearch = document.querySelector('.box-search');

  function showBoxResult() {
    resultSearch.classList.remove('hide-result');
    boxSearch.classList.add('border-bottom');
  }

  return (
    <div className='box search'>
      <div className={borderBottom} title='Buscar ciudad'>
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            handleSearchCity(e.target.value);
          }}
          onFocus={() => showBoxResult()}
          className='box-search--input'
          type='text'
          placeholder='Ingrese su ciudad...'
        />
        <i className='bx bx-search' title='Buscar ciudad' />
        {/* <i className='box-search--icon theme bx bxs-sun' /> */}
      </div>
      {
        cities.length > 0 && <ResultSearch cities={cities} handleGetInfoWeather={handleGetInfoWeather} />
      }
    </div>
  );
};

export default Search;
