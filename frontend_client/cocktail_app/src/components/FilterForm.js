import React, { useState } from 'react';
import axios from 'axios';

const FilterForm = () => {
  const [alcoholic, setAlcoholic] = useState('');
  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Combine query parameters
    const queryParams = new URLSearchParams();
    if (alcoholic) queryParams.append('alcoholic', alcoholic);
    if (category) queryParams.append('category', category);
    if (glass) queryParams.append('glass', glass);

    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=${queryParams}`);
    setFilteredResults(response.data.drinks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Alcoholic:
          <select value={alcoholic} onChange={(e) => setAlcoholic(e.target.value)}>
            <option value=""></option>
            <option value="Alcoholic">Alcoholic</option>
            <option value="Non_Alcoholic">Non-Alcoholic</option>
          </select>
        </label>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=""></option>
            {/* Add options for categories */}
          </select>
        </label>
        <label>
          Glass:
          <select value={glass} onChange={(e) => setGlass(e.target.value)}>
            <option value=""></option>
            {/* Add options for glasses */}
          </select>
        </label>
        <button type="submit">Filter</button>
      </form>
      {filteredResults.length > 0 && (
        <div>
          <h2>Filtered Results:</h2>
          {filteredResults.map((result) => (
            <div key={result.idDrink}>
              <h3>{result.strDrink}</h3>
              <p>{result.strInstructions}</p>
              {/* Display other properties of the result object */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterForm;