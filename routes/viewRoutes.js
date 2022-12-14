const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.isLoggedIn);
// router.post("/login", authController.login);

module.exports = router;
