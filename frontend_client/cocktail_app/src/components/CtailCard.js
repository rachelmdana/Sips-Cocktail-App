import React from 'react';
import { ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import '../styles/Drinks.css';

const useStyles = makeStyles({
  cocktailImage: {
    width: '150px',
    height: '150px'
  },
});

function CocktailCard({ cocktail }) {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemAvatar>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className={classes.cocktailImage} />
      </ListItemAvatar>
      <ListItemText
        primary={cocktail.strDrink}
        secondary={cocktail.strInstructions}
        primaryTypographyProps={{
          style: {
            fontWeight: 'bold',
            fontSize: '1rem',
            marginBottom: '0.5rem',
          },
        }}
        secondaryTypographyProps={{
          style: {
            fontSize: '.75rem',
            color: '#666',
          },
        }}
      />
    </ListItem>
  );
}

export default CocktailCard;