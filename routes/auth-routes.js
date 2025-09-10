const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controllers/auth-controller");

//all routes are related to authentication & authorization
router.post("/register", registerUser);

module.exports = router;
