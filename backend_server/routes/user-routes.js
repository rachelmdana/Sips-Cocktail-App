const express = require('express');
const jwt = require('jsonwebtoken');
const debug = require('debug')('my-app:login-route');

// Create a new router
const router = express.Router();

// Sample user credentials (replace this with your actual user authentication logic)
const validUsername = 'user';
const validPassword = 'password';

// Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log('Received username:', username);
  console.log('Received password:', password);
  console.log('Valid username:', validUsername);
  console.log('Valid password:', validPassword);

  // Check if username and password are valid
  if (username === validUsername && password === validPassword) {
    // Generate JWT token
    const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Logout Route (not typically needed if using JWT)
router.post('/logout', (req, res) => {
  // Perform logout logic here (e.g., invalidate token)
  res.json({ message: 'Logout successful' });
});

// Export the router
module.exports = router;
