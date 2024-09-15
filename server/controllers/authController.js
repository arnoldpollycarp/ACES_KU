const { default: mongoose } = require('mongoose')
const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/Auth')
const jwt = require('jsonwebtoken')


const test = (req, res) => {
    res.json('test is working')
}


// register controller 
const register = async (req, res) => {
   try {
    const {firstname, lastname, email, phone, password} = req.body;

    // data checks 
    // name checks 
    if(!firstname || !lastname){
        return res.json({
            error: "First and last name are required"
        })
    };
    // password check 
    if(!password || password.length < 6){
        return res.json({
            error: "password is required and should be atleast 6 characters"
        })
    };
    // email check 
    const exists = await User.findOne({email})
    if(exists){
        return res.json({
            error: "Email has already been taken"
        })
    }

    // hash password 
    const hashedPassword = await hashPassword(password);
    // creat user fun 
    const user = await User.create({
        firstname, lastname, email, phone, password: hashedPassword
    })

    return res.json(user)
   } catch (error) {
    console.log(error)
   }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check user exists 
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No user Found'
            })
        }
        // compare passwords 
        const match = await comparePassword(password, user.password);
        if(!match){
            res.json({
                error: "Passwords don't match"
            })
        }
       
        if(match){
           jwt.sign({email: user.email, id: user._id, firstname: user.firstname}, process.env.JWT_SECRET, {}, (err, token) =>{
            if (err) throw err;
            res.cookie('token', token).json(user)
           })
        }
      
    } catch (error) {
        console.log(error)
    }
}

// const getProfile = (req, res) => {
//     const {token} = req.cookies
//     if(token){
//      jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
//         if (err) throw err;
//         res.json(user)
//      })
//     }else{
//         res.json(null)
//     }
// }

module.exports = {
    test, login, register
}