const express = require('express');
const cors = require('cors');
const cocktailRoutes = require('./routes/cocktail-routes');
const ingredientRoutes = require('./routes/ingredient-routes');

const app = express();
app.use(express.json());
app.use(cors());

// Use cocktail and ingredient routes
app.use('/cocktails', cocktailRoutes);
app.use('/ingredients', ingredientRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;