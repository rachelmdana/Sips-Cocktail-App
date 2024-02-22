import React, { useEffect } from 'react';
import axios from 'axios';
import CocktailCard from './CtailCard';
import Navbar from './NavBar';
import CocktailList from './CocktailList';

const CombinedComponent = () => {
  const [cocktails, setCocktails] = React.useState([]);
  const [popularCocktails, setPopularCocktails] = React.useState([]);

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
      setPopularCocktails(popularResponse.data.drinks.slice(0, 5));
    }
    fetchData();
  }, []);

  return (
    <div className="landing-page">
      <div className="header-title">
        <h1>Welcome to Cocktail App</h1>
      </div>
      <Navbar />
    <div className="cocktail-list">
          <CocktailList title="Random Cocktails" component={CocktailCard} cocktail={cocktails} marginBottom="1rem" />
          <CocktailList title="Popular Cocktails" component={CocktailCard} cocktail={popularCocktails} />
        </div>
        </div>
  );
};

export default CombinedComponent;