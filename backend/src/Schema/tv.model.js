const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    name:{type: String , required:true},           
    rating: {type: Number},
    price: {type: String , required:true, unique: true},  
    imglink: {tyle:String},
   
})


const TvModel = mongoose.model("tv", userSchema);  
module.exports = TvModel;


