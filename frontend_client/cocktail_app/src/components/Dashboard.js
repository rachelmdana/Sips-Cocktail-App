import React, { useState, useEffect } from 'react';

function Dashboard() {
  // State to store user's bar data
  const [userBar, setUserBar] = useState([]);
  // State to store search term for cocktail search
  const [searchTerm, setSearchTerm] = useState('');
  // State to store search results from the API
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch user's bar data from backend API
  const fetchUserBar = async () => {
    try {
      // Make a request to your backend API to fetch user's bar data
      const response = await fetch('/user/bar'); // Adjust the endpoint as per your backend route
      if (response.ok) {
        const data = await response.json();
        setUserBar(data); // Set user's bar data to state
      } else {
        console.error('Failed to fetch user bar data');
      }
    } catch (error) {
      console.error('Error fetching user bar data:', error);
    }
  };

  // Function to handle cocktail search
  const searchCocktails = async () => {
    try {
      // Make a request to thecocktaildb API to search for cocktails based on searchTerm
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
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
          <li key={index}>{cocktail.strDrink}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
