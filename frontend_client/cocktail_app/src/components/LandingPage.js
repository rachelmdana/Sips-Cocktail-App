import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CocktailList from './CocktailList';
import CocktailCard from './CtailCard';
import '@material/web/button/filled-button.js';
import '../styles/Drinks.css';

function LandingPage() {
  const [cocktails, setCocktails] = useState([]);
  const [popularCocktails, setPopularCocktails] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('cocktailByName');
  const searchEndpoints = {
    cocktailByName: '/searchByCocktailName',
    ingredientByName: '/searchByIngredientName',
    searchByIngredient: '/filterByIngredients',
    popular: '/popular',
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php');
      const randomCocktails = response.data.drinks.slice(0, 4);
      const selectedCocktails = [];
      while (randomCocktails.length > 0) {
        const randomIndex = Math.floor(Math.random() * randomCocktails.length);
        selectedCocktails.push(randomCocktails[randomIndex]);
        randomCocktails.splice(randomIndex, 1);
      }
      setCocktails(selectedCocktails);

      const popularResponse = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php');
      setPopularCocktails(popularResponse.data.drinks.slice(0, 6));
    }
    fetchData();
  }, []);

  const handleLogin = async () => {
    try {
      // Call your backend API to authenticate the user
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ /* Add login credentials here */ }),
      });
      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      // Call your backend API to logout the user
      const response = await fetch('/auth/logout', {
        method: 'POST',
      });
      if (response.ok) {
        setIsLoggedIn(false);
      } else {
        // Handle logout error
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }
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
    <div className="landing-page">
      <div className="header">
        <div className="header-title">
          <h1>Welcome to Cocktail App</h1>
          </div>
          <div className="header-right">
            {isLoggedIn ?
              (<> <button onClick={handleLogout}>Logout</button>
                <input type="text" value={searchTerm} onChange={(e) =>
                  setSearchTerm(e.target.value)} placeholder="Search cocktails" />
                <select value={searchType} onChange={(e) =>
                  setSearchType(e.target.value)}>
                  <option value="cocktailByName">Search Cocktail by Name</option>
                  <option value="ingredientByName">Search Ingredient by Name</option>
                  <option value="searchByIngredient">Search by Ingredient</option>
                </select>
                <button onClick={handleSearch}>Search</button>
                <Link to="/user-bar">The Bar</Link> </>)
              :
              (<button onClick={handleLogin}>Login</button>)}
          </div>
        </div>
        <div className="cocktail-list">
          <CocktailList title="Random Cocktails" component={CocktailCard} cocktail={cocktails} marginBottom="1rem" />
          <CocktailList title="Popular Cocktails" component={CocktailCard} cocktail={popularCocktails} />
        </div>
      </div>
    
  );
}

export default LandingPage;