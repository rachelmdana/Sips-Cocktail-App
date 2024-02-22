import React from 'react';
import CocktailCard from './CtailCard';
import '../styles/Drinks.css';

function CocktailList({ title, cocktail }) {
  return (
    <div className="cocktail-container">
      <div className="cocktail-list">
        <h2 className="cocktail-list-title">{title}</h2>
      {cocktail && cocktail.length > 0 && cocktail.map((item, index) => (
        <div key={index}>
          <CocktailCard cocktail={item} />
        </div>
      ))}
      </div>
      </div>
  );
}

export default CocktailList;