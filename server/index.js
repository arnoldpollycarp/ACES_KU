const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser') 
const cookieParser = require('cookie-parser')

// db connection 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('database not connected', err))

const app = express();

// middleware 
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'));
app.use('/register', require('./routes/authRoutes'));
app.use('/signin', require('./routes/authRoutes'));
app.use('/profile', require('./routes/profileRoutes'));


const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))