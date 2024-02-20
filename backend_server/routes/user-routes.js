const express = require('express');
const router = express.Router();
const pool = require('../db'); // Import your database connection

// Endpoint to fetch the user's bar data
router.get('/user/bar', async (req, res) => {
  try {
    // Assuming you have a UserBar model and method to fetch the user's bar data
    const userBarData = await UserBar.getUserBarData(); // Implement this method in your UserBar model

    // Send the user's bar data as a response
    res.json(userBarData);
  } catch (error) {
    console.error('Error fetching user bar data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
