import CocktailDetails from "./CocktailDetails";

function DrinkDetails() {
  const { id } = useParams();

  return (
    <div>
      <Drink match={{ params: { id } }} />
    </div>
  );
}

export default DrinkDetails;