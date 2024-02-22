const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth-routes');
const cocktailRoutes = require('./routes/cocktail-routes');
const ingredientRoutes = require('./routes/ingredient-routes');
const userRoutes = require('./routes/user-routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', (req, res, next) => {
  console.log('Request body:', req.body);
  next();
});

// Routes middleware
app.use('/auth', authRoutes);
app.use('/cocktails', cocktailRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/users', userRoutes);

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