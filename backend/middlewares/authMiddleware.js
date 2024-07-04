const jwt = require('jsonwebtoken');
const User = require("../models/usersModel");
const dotenv = require("dotenv");
dotenv.config();

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookie.jwt;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId).select("-password");
        if (!senderId || !user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute: ", error.message)
        res.status(500).json({ "error": "Internal server error" });
    }
};

module.exports = protectRoute;