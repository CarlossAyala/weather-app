import React from 'react';
import ResultSearch from './ResultSearch';
import '../styles/Search.css';

const Search = (props) => {
  const { city, cities, setCity, handleSearchCity, handleGetInfoWeather, resetWeatherInfo } = props;
  const borderBottom = cities.length > 0 ? 'box-search border-bottom' : 'box-search';
  const resultSearch = document.querySelector('.result-search');
  const boxSearch = document.querySelector('.box-search');

  const showBoxResult = () => {
    resultSearch.classList.remove('hide-result');
    boxSearch.classList.add('border-bottom');
  };

  return (
    <div className='search'>
      <div className={borderBottom} title='Buscar ciudad'>
        <i className='bx bx-search' />
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            handleSearchCity(e.target.value);
          }}
          onFocus={() => showBoxResult()}
          type='text'
          placeholder='Ingrese su ciudad'
        />
      </div>
      {
        cities.length > 0 && <ResultSearch resetWeatherInfo={resetWeatherInfo} cities={cities} handleGetInfoWeather={handleGetInfoWeather} />
      }
    </div>
  );
};

export default Search;
