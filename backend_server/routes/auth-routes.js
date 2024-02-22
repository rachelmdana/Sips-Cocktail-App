const express = require('express');
const router = express.Router();
const { register, authenticate, logout } = require('../models/Auth');
const validateLogin = require('../helpers/validateLogin');
const createTokenForUser = require('../helpers/createToken');

router.post('/register', async (req, res, next) => {
  try {
    const user = await register(req.body, res);
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
});

router.post('/login', validateLogin, async (req, res) => {
  const { username, password } = req.body;

  // Authenticate the user using the provided username and password
  const user = await authenticate(username, password);

  if (user) {
    // Generate a token for the user
    const token = createTokenForUser(user);

    // Send the token and user information in the response
    res.status(200).json({ user, token });
  } else {
    // User authentication failed
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

router.post('/logout', async (req, res, next) => {
  try {
    const result = await logout();
    if (result) {
      res.json({ message: 'Logout successful' });
    } else {
      res.status(500).json({ error: 'Failed to logout' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;