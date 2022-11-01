const express = require("express");
const UserModel = require("../Schema/user.model");
const jwt = require("jsonwebtoken")

const app = express.Router();

app.get("/", async (req, res) => {
  const signUp = await UserModel.find();
  res.send(signUp);
});





app.post("/signup", async (req, res) => {
  const {email, name , password } = req.body;

  if(!email || !name || !password)
  {
    return  res.send("Please Enter all the fields")
  }

  const  existing = await UserModel.findOne({email})

  if(existing)
  {
    return res.send("User already exists")
  }

  const newuser = new UserModel({email,name,password})
  await newuser.save()

  res.send("user create")


})

app.post("/signin",async(req,res)=>{

var {email,password} = req.body

const existing = await UserModel.findOne({email})

if(!existing){
  return res.send("No such user with this email exists")
}
else{
  if(existing.password == password)
  {
    const token = jwt.sign({email},"secret1234",{
       expiresIn:"30 days"
    })

   return res.send({
     status:"success",
     token:token
   })
  }
  else
  {
    return res.send("wrong password")
  } 
}





})

module.exports = app;
