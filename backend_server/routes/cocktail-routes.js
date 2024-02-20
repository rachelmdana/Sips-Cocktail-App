const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Define endpoint to search cocktail by name
router.get('/search/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${name}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error searching cocktail by name:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define endpoint to list all cocktails by first letter
router.get('/list/:letter', async (req, res) => {
  try {
    const { letter } = req.params;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letter}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error listing all cocktails by first letter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Define endpoint to lookup full cocktail details by id
router.get('/lookup/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error listing all cocktails by first letter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Lookup a random cocktail
router.get('/random', async (req, res, next) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/random.php');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)
router.get('/randomselection', async (req, res, next) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// List Popular cocktails (only available to $2+ Patreon supporters)
router.get('/popular', async (req, res, next) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// List most latest cocktails (only available to $2+ Patreon supporters)
router.get('/latest', async (req, res, next) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Filter by alcoholic
router.get('/filterByAlcoholic', async (req, res, next) => {
  try {
    const alcoholic = req.query.alcoholic; // Get the alcoholic status from the request query parameters
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=${alcoholic}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Filter by Category
router.get('/filterByCategory', async (req, res, next) => {
  try {
    const category = req.query.category; // Get the category from the request query parameters
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=${category}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Filter by Glass
router.get('/filterByGlass', async (req, res, next) => {
  try {
    const glass = req.query.glass; // Get the glass type from the request query parameters
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=${glass}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// List the categories, glasses, ingredients, or alcoholic filters
router.get('/listCategories', async (req, res, next) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/listGlasses', async (req, res, next) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/listIngredients', async (req, res, next) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/listAlcoholicFilters', async (req, res, next) => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?a=list');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;