const bycrypt = require('bcrypt');

// password hasshing function 
const hashPassword = (password) => {
    return new Promise((resolve, reject) =>{
        bycrypt.genSalt(12, (err, salt) =>{
            if(err){
                reject(err)
            }
            bycrypt.hash(password, salt, (err, hash)=>{
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

// compare password function 
const comparePassword = (password, hashed) => {
   return bycrypt.compare(password, hashed)
}

module.exports = {
    hashPassword, comparePassword
}