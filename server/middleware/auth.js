const jwt = require('jsonwebtoken')
const User = require('../models/user')

const autheniticateToken = async (req, res, next) => {
    // verify authentication 
    const authorization = req.headers['authorization']
     
    // check if auth head has a value 
    if(!authorization) {
        return res.status(401).json({error: 'Auth token required'})
    }
    // get token from request header 
    const token = authorization.split(' ')[1]
    // verify the token 
    try {
      const _id = jwt.verify(token, process.env.JWT_SECRET)
    //   find the user using the id from the token 
      req.user = await User.findOne(_id).select('_id')
      console.log(req.user)
      next();
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request not authorized'})
    }  
}

module.exports = autheniticateToken;