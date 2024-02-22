import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Details.css';
import { useNavigate } from 'react-router-dom';

function CocktailDetails() {
  const [drink, setDrink] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  // Create arrays of the instruction steps, ingredients, and measurements
  const instructionSteps = drink.strInstructions.split('. ');
  const ingredients = Object.values(drink).slice(11, 22).filter(value => value);
  const imageIndex = ingredients.findIndex(ingredient => ingredient === drink.strDrinkThumb);
  ingredients.splice(imageIndex, 1);

  // Remove the first two rows of the ingredients array
  const cleanedIngredients = ingredients.slice(2);

  return (
    <div className='link'>
      <button onClick={() => navigate('/')}>Home</button>
      <h2>{drink.strDrink}</h2>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <h3>Instructions:</h3>
      <table>
        <tbody>
          {instructionSteps.map((step, index) => (
            <tr key={index}>
              <td>{index + 1}. {step}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Ingredients:</h3>
      <table>
        <tbody>
          {cleanedIngredients.map((ingredient, index) => (
            <tr key={index}>
              <td>{index + 1}. {ingredient}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CocktailDetails;