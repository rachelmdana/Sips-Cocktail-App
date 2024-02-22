import React, { useState } from 'react';
import '../styles/Drinks.css';

const SearchCocktail = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter cocktail name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchCocktail;