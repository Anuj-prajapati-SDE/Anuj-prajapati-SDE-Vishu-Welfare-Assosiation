const express = require('express');
const router = express.Router();

const {signup,login,testAuth} = require('../controllers/user');
const {userAuth,adminAuth} = require("../middleware/Auth");


router.post('/signup', signup);
router.post('/login', login);
router.get('/test-auth', adminAuth, testAuth);



module.exports = router;
// This code defines an Express router for user-related routes.


