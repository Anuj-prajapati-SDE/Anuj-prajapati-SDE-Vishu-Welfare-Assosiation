const OTP = require("../models/otp");
const bcrypt = require("bcrypt");
const sendOtpEmail = require("../helper/sendOtp");
require("dotenv").config();


const sendOtp = async (req, res) => {
    const { emailId } = req.body;

    if (!emailId) {
        return res.status(400).json({ error: "Email ID is required" });
    }
     // Validate the email format
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId);    
        if (!isEmailValid) {
            return res.status(400).json({ error: "Invalid email format" });
        }

    try {
        // Generate a random 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // const hashedOtp = await bcrypt.hash(otp, 10);

       // Check if an OTP already exists for this email
        const existingOtp = await OTP.findOne({ emailId });
        if (existingOtp) {
            // If an OTP already exists, you might want to update it instead of creating a new one
            existingOtp.body = otp;
            await existingOtp.save();
            return res.status(200).json({ message: "OTP updated successfully", otp });
        }
        // Send the OTP via email

        await sendOtpEmail(emailId, otp);

        // Create a new OTP document
        const otpDocument = new OTP({
            body: otp,
            emailId: emailId
        });

        // Save the OTP document to the database
        await otpDocument.save();

        // Here you would typically send the OTP via email or SMS
        // For demonstration, we'll just return it in the response
        res.status(200).json({ message: "OTP sent successfully", otp });

    } catch (error) {
        console.error("Error sending OTP:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { sendOtp };