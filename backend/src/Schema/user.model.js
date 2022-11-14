const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:  {type:String,required:true},
  email:  {type:String,required:true, unique:true},
  password: {type:String,required:true},
  // role: {
  //   type: String,
  //   enum: ["EXECUTIVE", "USER"],
  //   default: "USER",
  // },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
