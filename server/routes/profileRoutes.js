const express = require('express')
const router = express.Router();
const cors = require('cors')
const autheniticateToken = require('../middleware/auth')
const { getProfile } = require('../controllers/profileController')


// middleware 
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.use(autheniticateToken)

// profile routes 
router.get('/profile', getProfile)

module.exports = router;