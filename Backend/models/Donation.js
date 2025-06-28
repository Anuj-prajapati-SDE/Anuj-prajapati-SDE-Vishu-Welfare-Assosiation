const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorInfo: {
    firstName: String,
     lastName: String, 
     email: String, 
     phone: String,
    address: String,
     city: String, 
     state: String,
      zipCode: String,
       country: String,
    anonymous: Boolean, message: String, taxReceipt: Boolean,
  },
  amount: Number,
  campaignType: String,
  paymentId: String,
  orderId: String,
  signature: String,
  paymentDate: Date,
});

module.exports = mongoose.model('Donation', donationSchema);