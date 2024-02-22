import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Drinks.css';

function CocktailCard({ cocktail }) {
  if (!cocktail) {
    return null; // Return null if cocktail is undefined
  }
  return (
    <Link to={`/drinks/${cocktail.idDrink}`} className='link'>
  <div className="cocktail-card">
    {cocktail.strDrinkThumb && (
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="cocktail-image"
      />
    )}
    <div>
      <h2 className="cocktail-title">{cocktail.strDrink}</h2>
      <div className="cocktail-ingredients">
        {cocktail.ingredients &&
          cocktail.ingredients.map((ingredient, index) => (
            <div key={index}>
              {ingredient}
            </div>
          ))}
      </div>
    </div>
  </div>
</Link>
  );
}

export default CocktailCard;