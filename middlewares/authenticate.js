const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// Protected route middleware
const auth = async (req, res, next) => {
    const token = req.cookies.jwt; // Extract JWT from cookies

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token provided" });
    }

    try {
        // Verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Find the user by ID and exclude the password
        const user = await userModel.findById(decodedToken.userId).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Not authorized, user not found" });
        }

        // Attach the user to the request object
        req.user = user;
        next();
    } catch (err) {
        console.error(err.message);
        res.status(401).json({ message: "Not authorized, token verification failed" });
    }
};

module.exports = { auth };
