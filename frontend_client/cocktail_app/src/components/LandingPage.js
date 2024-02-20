import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('cocktailByName');
  const searchEndpoints = {
    cocktailByName: '/searchByCocktailName',
    ingredientByName: '/searchByIngredientName',
    searchByIngredient: '/filterByIngredients',
  };

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
    <div>
      <h1>Welcome to Cocktail App</h1>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cocktails"
          />
          <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="cocktailByName">Search Cocktail by Name</option>
            <option value="ingredientByName">Search Ingredient by Name</option>
            <option value="searchByIngredient">Search by Ingredient</option>
          </select>
          <button onClick={handleSearch}>Search</button>
          <Link to="/user-bar">The Bar</Link>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default LandingPage;
