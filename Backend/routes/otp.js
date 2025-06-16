const express=require("express");
const router=express.Router();

//controllers
const { sendOtp } = require("../controllers/otp");


// Route to send OTP        
router.post("/send-otp", sendOtp);

module.exports = router;