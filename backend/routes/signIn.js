const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema({
    username:String,
    password:String,
    role:String
})

const SignIn = mongoose.model("SignIn",signInSchema)

module.exports = SignIn