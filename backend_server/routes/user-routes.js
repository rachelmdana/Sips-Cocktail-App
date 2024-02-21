const express = require('express');
const router = express.Router();
const pool = require('../db'); // Import your database connection

// Endpoint to fetch the user's bar data
router.get('/bar', async (req, res) => {
  try {
    // Assuming you have a UserBar model and method to fetch the user's bar data
    const userBarData = await UserBar.getUserBarData(); // Implement this method in your UserBar model

    // Send the user's bar data as a JSON response
    res.json(userBarData);
  } catch (error) {
    console.error('Error fetching user bar data:', error);

    // Send a JSON error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/bar', async (req, res) => {
  try {
    const { liquor } = req.body;
    // Add the new liquor to the UserBar table
    await UserBar.addLiquor(liquor);
    // Send a success response
    res.status(201).json({ message: 'Liquor added to user bar' });
  } catch (error) {
    console.error('Error adding liquor to user bar:', error);
    // Send a failure response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
