/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import '../styles/Search.css';

const Search = ({ city, setCity, handleSearchInfo }) => {

  return (
    <div className='box-search'>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className='box-search--input'
        type='text'
        placeholder='The weather in...'
      />
      <i className='bx bx-search box-search--icon' onClick={() => handleSearchInfo()} />
      {/* <i className='box-search--icon theme bx bxs-sun' /> */}
    </div>
  );
};

export default Search;
