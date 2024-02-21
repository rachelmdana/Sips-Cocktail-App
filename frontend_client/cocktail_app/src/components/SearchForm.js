import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
  const [name, setName] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${name}`);
    setResults(response.data.drinks);
  } catch (error) {
    console.error('An error occurred while making the API request:', error);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search cocktails by name"
      />
      <button type="submit">Search</button>
      {results.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          {results.map((result) => (
            <div key={result.idDrink}>
              <h3>{result.strDrink}</h3>
              <p>{result.strInstructions}</p>
              {/* Display other properties of the result object */}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchForm;
