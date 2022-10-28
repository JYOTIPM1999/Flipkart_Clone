const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type: String,
        enum : ['EXECUTIVE','USER'],
        default: 'USER'
    },
})

const SignUp = mongoose.model("SignUp",signUpSchema)

module.exports = SignUp