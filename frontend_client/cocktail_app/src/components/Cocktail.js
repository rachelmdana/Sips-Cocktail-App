import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ cocktail }) => {
  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strGlass,
  } = cocktail;

  return (
    <div>
      <Link to={`/cocktail/${idDrink}`}>
        <img src={strDrinkThumb} alt={strDrink} />
      </Link>
      <h3>{strDrink}</h3>
      <p>
        {strAlcoholic} | {strCategory} | {strGlass}
      </p>
    </div>
  );
};

export default Cocktail;