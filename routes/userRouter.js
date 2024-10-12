const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// User Routes
// Create a new user (Signup)
router.post('/signup', userController.createUser);

// User login (without JWT)
router.post('/login', userController.loginUser);

module.exports = router;
