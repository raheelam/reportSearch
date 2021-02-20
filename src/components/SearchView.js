import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SearchView = ({ onSearch, onSearchExclude}) => {
  const [input, setInput] = useState('');
  const [searchMethod, setSearchMethod] = useState('include');
  const inputRef = useRef();
  const searchMethodRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    searchMethodRef.current.focus();
  }, []);

  const onInputChange = (input) => {
    if(searchMethod === "include"){
      onSearch(input);
    }else{
      onSearchExclude(input);
    }
    
  };

  return (
    <div className="search-box">
      Search for reports: <span className="slash"></span>
      <input
        type="text"
        name="input"
        value={input}
        ref={inputRef}
        autoComplete="off"
        onChange={(event)=>{
          const input = event.target.value;
          setInput(input);
          onInputChange(input);}}
      />
      Search filter:
      <select ref={searchMethodRef} value={searchMethod} onChange={(event)=>{
        setSearchMethod(event.target.value);
        onInputChange();
      }}>
        <option value="include">include words</option>
        <option value="exclude">exclude words</option>
      </select>
      
    </div>
  );
};

SearchView.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchView;
