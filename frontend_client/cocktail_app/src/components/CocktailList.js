import React from 'react';
import { List, ListItem, ListSubheader } from '@mui/material';
import CocktailCard from './CtailCard';
import { makeStyles } from '@mui/styles';
import '../styles/Drinks.css';

const useStyles = makeStyles({
  cocktailListTitle: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: 'rgba(75,0,130,0.8)',
  },
});

function CocktailList({ title, component: Component, cocktail }) {
  const classes = useStyles();
  console.log(cocktail);
  return (
    <List className="cocktail-list">
      <ListSubheader className={classes.cocktailListTitle}>{title}</ListSubheader>
      {cocktail && cocktail.length > 0 && cocktail.map((item, index) => (
        <ListItem key={index}>
          <Component cocktail={item} />
        </ListItem>
      ))}
    </List>
  );
}

export default CocktailList;