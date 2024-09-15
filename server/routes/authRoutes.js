const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, login, register } = require('../controllers/authController');
const { getProfile } = require('../controllers/profileController');

// middleware 
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)


router.get('/', test)
router.post('/register', register)
router.post('/signin', login)
router.get('/profile', getProfile)

module.exports = router