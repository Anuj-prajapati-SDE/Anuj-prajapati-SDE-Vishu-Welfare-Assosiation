const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables first
dotenv.config();

const paymentRoutes = require('./routes/paymentRoutes');
const donationRoutes = require('./routes/DonationRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', paymentRoutes);
app.use('/api', donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Connect to MongoDB
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/vishu-welfare-association';
mongoose.connect(MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
