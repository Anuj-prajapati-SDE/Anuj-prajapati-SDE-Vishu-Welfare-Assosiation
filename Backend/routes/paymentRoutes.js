const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const router = express.Router();
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create Razorpay order
router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // convert to paisa
    currency: 'INR',
    receipt: 'receipt_' + Date.now(),
  };

  try {
    const order = await instance.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Order creation failed', error: err.message });
  }
});

// Verify payment (optional)
router.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const sign = razorpay_order_id + '|' + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_SECRET)
    .update(sign)
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    res.send({ success: true });
  } else {
    res.status(400).send({ success: false });
  }
});

module.exports = router;
