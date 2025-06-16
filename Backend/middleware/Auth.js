const jwt = require('jsonwebtoken');
const User = require('../models/User');

const userAuth = async (req, res, next) => {
    let token;

    // Get token from Authorization header (Bearer) or cookie
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       const user=await User.findById(decoded.userId).select('-password');
       req.user = user;
       req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token is not valid: ' + err.message });
    }
};

const adminAuth = (req, res, next) => {
    userAuth(req, res, () => {
        if (req.user && req.user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ message: 'Access denied: Admins only' });
        }
    });
};

const volunteerAuth = (req, res, next) => {
    userAuth(req, res, () => {
        if (req.user && req.user.role === 'volunteer') {
            next();
        } else {
            res.status(403).json({ message: 'Access denied: Volunteers only' });
        }
    });
};

module.exports = {
    userAuth,
    adminAuth,
    volunteerAuth

};