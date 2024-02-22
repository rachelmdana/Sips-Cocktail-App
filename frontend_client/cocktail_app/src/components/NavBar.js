import React, { useState } from 'react';
import '../styles/Drinks.css';

const Navbar = ({cocktails}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('cocktailByName');

const handleSearch = async () => {
  try {
    setSearchType(searchType);
    let endpoint = '';
    switch (searchType) {
      case 'cocktailByName':
        endpoint = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${searchTerm}`;
        break;
      case 'ingredientByName':
        endpoint = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=${searchTerm}`;
        break;
      case 'searchByIngredient':
        endpoint = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${searchTerm}`;
        break;
      case 'popular':
        endpoint = '/popular';
        break;
      default:
        endpoint = '';
    }

    if (endpoint) {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        const cocktails = data.drinks || [];
        const filteredCocktails = cocktails.filter((cocktail) => cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredCocktails);
      } else {
        // Handle search error
        console.error('Search failed');
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
  return (
    <div className="header">
      <div className="header-right">
        {/* <h2 className='search-title'>Search Cocktails</h2> */}
        <input type="text" className='input-search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Cocktails' />
        <button className='btn-search' onClick={() => handleSearch(searchType)}>Search</button>
        <div className="search-results">
          {searchResults.map((cocktail, index) => (
            <div key={index}>
              <a href={`/drinks/${cocktail.idDrink}`} className='link'>{cocktail.strDrink}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;