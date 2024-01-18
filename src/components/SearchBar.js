import React from "react";


function SearchBar({dropdown, handleRadio, radio, handleDropDown}) {


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="alphabetically"
          name="sort"
          checked={radio === "alphabetically"}
         onChange={(e) => handleRadio(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="price"
          name="sort"
          checked={radio === "price"}
          onChange={(e) => handleRadio(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={dropdown} onChange={(e) => handleDropDown(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
