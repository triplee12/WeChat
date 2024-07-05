const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const protectRoute = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;