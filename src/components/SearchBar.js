import React from 'react';

export default function SearchBar(props) {
  
  function handleInputChange(e) {
    const name = e.target.name;
    const type = e.target.type;
    const value = type === 'checkbox' ? 
      e.target.checked : 
      e.target.value;
    props.onInputChange(name, value);
  }


  return (
    <div className="search-bar">
      <p>
        <label htmlFor="searchTerm">Product Name: </label>
        <input 
          type="text"
          id="searchTerm"
          name="searchTerm"
          value={props.searchTermValue}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <input 
          id="inStockOnly"
          name="inStockOnly"
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInputChange}
        />
        <label htmlFor="inStockOnly">
          Search only products in Stock
        </label>
      </p>
    </div>
  );
}