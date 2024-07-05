const express = require("express");
const protectRoute = require("../middlewares/authMiddleware");
const { getUsers, getUserById } = require("../controllers/userController");

const router = express.Router();

router.get("/", protectRoute, getUsers);
router.get("/:id", protectRoute, getUserById);

module.exports = router;