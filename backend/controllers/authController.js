const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateJWT");
const User = require("../models/usersModel");

const signup = async (req, res) => {
    try {
        const { username, email, password, gender } = req.body
        if (!username) {
            return res.status(400).json({ message: "username can not be blank" });
        }
        if (!email) {
            return res.status(400).json({ message: "email cannot be blank" });
        }
        if (!password) {
            return res.status(400).json("password cannot be blank");
        }
        if (password.length < 8) {
            return res.status(400).json("password cannot be less than 8");
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(422).json({message: "User already exists"})
        }
        const userEmail = await User.findOne({ email });
        if (userEmail) {
            return res.status(422).json({message: "User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const newUser = new User({ username, email, password: hashedPassword, profilePic: gender === "male" ? boyProfilePic : girlProfilePic });
        await newUser.save();
        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            return res.status(201).json({ "_id": user._id, "username": newUser.username, "profilePic": newUser.profilePic, "created_at": newUser.created_at, "updated_at": newUser.updated_at});
        } else {
            return res.status(422).json({"error": "username or email alread exists"})
        }
    }
    catch (error) {
        return res.status(500).json({ "error": error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({"error": "Invalid username or password"})
        }
        const isCorrectPassword = bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
            return res.status(400).json({"error": "Invalid username or password"})
        }
        generateTokenAndSetCookie(user._id, res);
        return res.status(200).json({
            "_id": user._id,
            "username": user.username,
            "profilePic": user.profilePic,
            "created_at": user.created_at,
            "updated_at": user.updated_at
        });
    } catch (error) {
        return res.status(500).json({ "error": error.message });
    }
};

const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        return res.status(200).json({"message": "Account logged out successfully"})
    } catch (error) {
        return res.status(500).json({"error": error.message})
    }
};

module.exports = { signup, login, logout };
