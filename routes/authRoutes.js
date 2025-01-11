const express = require('express');
const router = express.Router();
const authController = require('../managers/controllers/authController');
const authMiddleware = require('../mws/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
