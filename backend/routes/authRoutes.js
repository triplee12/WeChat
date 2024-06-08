const express = require("express");
const { signup, login, logout, getUserByUsername } = require("../controllers/authController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/users/:username", getUserByUsername);

module.exports = router;