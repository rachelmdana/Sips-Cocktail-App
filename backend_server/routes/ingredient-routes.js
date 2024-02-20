const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//Define endpoint to search ingredient by name
router.get('/search/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=${name}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error searching ingredient by name:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Define endpoint to lookup ingredient by id
router.get('/lookup/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?iid=${id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error listing all cocktails by first letter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Search by ingredient
router.get('/searchByIngredient', async (req, res, next) => {
  try {
    const ingredient = req.query.ingredient; // Get the ingredient from the request query parameters
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredient}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Filter by multi-ingredient (only available to $2+ Patreon supporters)
router.get('/filterByIngredients', async (req, res, next) => {
  try {
    const ingredients = Array.isArray(req.query.ingredients) ? req.query.ingredients : [req.query.ingredients]; // Ensure ingredients is an array
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredients.join(',')}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
