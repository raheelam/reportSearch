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
  }, [searchMethod]);

  const onInputChange = (input, sMethod) => {
    if(sMethod === "include"){
      onSearch(input);
    }else{
      onSearchExclude(input);
    }
    
  };

  return (
    <div className="">
    <div className="block sm:inline">
      <label htmlFor="sinput">Search for reports: </label>
      <input 
        id="sinput"
        className="mr-0 sm:mr-5 mb-3 "
        type="text"
        name="input"
        value={input}
        ref={inputRef}
        autoComplete="off"
        onChange={(event)=>{
          const input = event.target.value;
          setInput(input);
          onInputChange(input, searchMethod);
          
          }}
      />
      </div>
      <div className="block sm:inline">

      <label className="block sm: inline" htmlFor="smethod">Search filter:</label>
      <select id="smethod" ref={searchMethodRef}  className="ml-2 mb-3" value={searchMethod} 
      onChange={(event)=>{
        const sMethod = event.target.value;
        setSearchMethod(sMethod);
        onInputChange(input, sMethod);
       
       
      }}>
        
        <option  defaultValue  value="include">include words</option>
        <option value="exclude">exclude words</option>
      </select>
      </div>
    </div>
  );
};

SearchView.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchView;
