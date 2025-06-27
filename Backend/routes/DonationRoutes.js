const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

router.post('/save-donation', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ message: 'Donation saved successfully' });
  } catch (error) {
    console.error('Error saving donation:', error);
    res.status(500).json({ error: 'Failed to save donation' });
  }
});

module.exports = router;