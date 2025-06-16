const User= require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const Otp = require('../models/otp');
// Function to register a new user

const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, confirmpassword, otp } = req.body;

        // Check if all fields are provided
        if (!firstName || !lastName || !email || !phone || !password || !confirmpassword || !otp) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists with this email or phone.' });
        }

        // Verify OTP
        const otpRecord = await Otp.findOne({ emailId: email, body: otp });
        if (!otpRecord) {
            return res.status(400).json({ message: 'Invalid or expired OTP.' });
        }
        // const isOtpValid = await bcrypt.compare(otp, otpRecord.body);
        // if (!isOtpValid) {
        //     return res.status(400).json({ message: 'Invalid OTP.' });
        // }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword
        });

        await user.save();


        // Generate JWT token
        // const token = jwt.sign({ userId: user._id ,role }, JWT_SECRET, { expiresIn: '7d' });

        res.status(201).json({
            message: 'User registered successfully.',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

        // Set token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(200).json({
            message: 'Login successful.',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

const testAuth = (req, res) => {
    res.status(200).json({ message: 'Auth middleware passed. User authenticated.', user: req.user });
};

module.exports = {
    signup,
    login,
    testAuth
};
