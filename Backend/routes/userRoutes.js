// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/userController');

router.post('/signup', createUser);
router.post('/login', loginUser);

module.exports = router;
