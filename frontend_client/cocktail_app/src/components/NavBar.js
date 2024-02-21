import React, { useState } from 'react';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('cocktailByName');

  const searchEndpoints = {
    cocktailByName: '/searchByCocktailName',
    ingredientByName: '/searchByIngredientName',
    searchByIngredient: '/filterByIngredients',
    popular: '/popular',
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${searchEndpoints[searchType]}?searchTerm=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle the response data as needed
      } else {
        // Handle search error
        console.error('Search failed');
      }
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };


  return (
    <div className="header">
      <div className="header-right">
        <SearchForm />
        <FilterForm />
        <input type="text" value={searchTerm} onChange={(e) =>
                  setSearchTerm(e.target.value)} placeholder="Search cocktails" />
                <select value={searchType} onChange={(e) =>
                  setSearchType(e.target.value)}>
                  <option value="cocktailByName">Search Cocktail by Name</option>
                  <option value="ingredientByName">Search Ingredient by Name</option>
                  <option value="searchByIngredient">Search by Ingredient</option>
                </select>
                <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Navbar;