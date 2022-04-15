import React, {useState} from 'react'
import './search.css'

const Search = ({query, setQuery}) => {

  return (
    <div className="Search">
      <span className="SearchSpan">
      </span>
      <input
        className="SearchInput"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search by title'
      />

    </div>
  );
};

  
  export default Search