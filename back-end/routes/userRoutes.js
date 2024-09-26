const express = require('express');
const { registerUser, loginUser, googleAuth } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/google', googleAuth);

module.exports = router;
