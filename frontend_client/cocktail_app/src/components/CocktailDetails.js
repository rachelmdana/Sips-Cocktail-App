import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Drinks.css';



function CocktailDetails() {
  const [drink, setDrink] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDrink() {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`);
      const data = await response.json();
      setDrink(data.drinks[0]);
    }
    fetchDrink();
  }, [id]);

  if (!drink) {
    return <div>Loading...</div>;
  }

  return (
<div>
    <h1>Drink Details for Drink {drink.idDrink}</h1>
    <h2>{drink.strDrink}</h2>
    <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        style={{ width: '100px', height: '100px' }} // Adjust width and height inline
    />
    <p>{drink.strInstructions}</p>
    <h3>Ingredients:</h3>
          <ul className="ingredients-list">
              {Object.values(drink).slice(11, 21).map
                  ((ingredient, index) =>
                  {
                      const measure = drink[`strMeasure${index + 1}`];
                      return (<li key={index}>
                          {measure && (<> {`${measure} `} </>)}
                          <> {index + 1}. {ingredient} </>
                      </li>);
                  })}
          </ul>
</div>

  );
}

export default CocktailDetails;