import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CocktailList from './CocktailList';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';

function Dashboard({user}) {
  // State to store user's bar data
  const [userBar, setUserBar] = useState([]);
  // Function to get the current logged in user's bar information and set it as state
  const [newLiquor, setNewLiquor] = useState('');
  // State to store search term for cocktail search
  const [searchTerm, setSearchTerm] = useState('');
  // State to store search results from the API
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch user's bar data from backend API
  const fetchUserBar = async () => {
  try {
    const response = await fetch('/user/bar', { mode: 'cors' });

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        console.error('Unauthorized or forbidden access');
      } else {
        console.error(`Failed to fetch user bar data (Status: ${response.status})`);
      }
      return;
    }

    const contentType = response.headers.get('content-type');
    if (contentType && !contentType.includes('application/json')) {
      console.error('Unexpected response format. Expected JSON, but got:', contentType);
      return;
    }

    const data = await response.json();
    setUserBar(data);
  } catch (error) {
    console.error('Error fetching user bar data:', error);
  }
};

  // Function to handle cocktail search
  const searchCocktails = async () => {
    try {
      // Make a request to thecocktaildb API to search for cocktails based on searchTerm
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.drinks || []); // Set search results to state, or an empty array if no results found
      } else {
        console.error('Failed to fetch cocktail search results');
      }
    } catch (error) {
      console.error('Error searching cocktails:', error);
    }
  };

  useEffect(() => {
    // Fetch user's bar data when component mounts
    fetchUserBar();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome back, {user?.username}!</p>
      <SearchForm />
      <FilterForm />
      <CocktailList cocktails={searchResults} />
      <h2>User's Bar</h2>
      <table>
        <thead>
          <tr>
            <th>Liquor</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {userBar.map((item, index) => (
            <tr key={index}>
              <td>{item.liquor}</td>
              {/* Add more table cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={async (e) => {
  e.preventDefault();
  try {
    // Make a request to the backend API to add the new liquor to the user's bar
    const response = await fetch('/user/bar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ liquor: newLiquor })
    });
    if (response.ok) {
      // Clear the input field and fetch the updated user bar data
      setNewLiquor('');
      fetchUserBar();
    } else {
      console.error('Failed to add liquor to user bar');
    }
  } catch (error) {
    console.error('Error adding liquor to user bar:', error);
  }
}}>
  <input
    type="text"
    value={newLiquor}
    onChange={(e) => setNewLiquor(e.target.value)}
    placeholder="Add a liquor to your bar"
  />
  <button type="submit">Add</button>
</form>

      <h2>Cocktail Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search cocktails"
      />
      <button onClick={searchCocktails}>Search</button>

      <ul>
  {searchResults.map((cocktail, index) => (
    <li key={index}>
      <Link to={`/drinks/${cocktail.idDrink}`}>
        {cocktail.strDrink}
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
}

export default Dashboard;
