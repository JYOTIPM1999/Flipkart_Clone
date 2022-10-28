const express = require("express");
const mongoose = require("mongoose");
const signUpRouter = require("./routes/signUp")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/signUp",signUpRouter)

app.get("/", (req, res) => res.send("hello express"));

mongoose.connect("mongodb://localhost:27017/flipkart").then(()=>{
  app.listen(8080, () => {
    console.log("server started on port 8080");
  });
})

