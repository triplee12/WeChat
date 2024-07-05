const User = require("../models/usersModel");

const getUsers = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const allUsers = await User.find({ _id: { $ne: loggedInUser } })
            .select(["-password", "-email"]);
        res.status(200).json({ allUsers });
    } catch (error) {
        console.error("Error in getUsers", error.message);
        res.status(500).json({"error": "Internal server error"})
    }
}

const getUserById = async (req, res) => {
    const { id: _id } = req.params;
    const user = await User.findOne({ _id });
    if (!user) {
        return res.status(404).json({ "error": "User not found" });
    }
    return res.status(200).json({
        "id": user._id,
        "username": user.username,
        "profilePic": user.profilePic,
        "created_at": user.created_at,
        "updated_at": user.updated_at
    });
}

module.exports = { getUsers, getUserById };