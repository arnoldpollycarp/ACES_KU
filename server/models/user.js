const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = ({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    phone: String,
    password: String
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;