const express = require("express");
const UserModel = require("../Schema/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express.Router();

app.post("/signup", async (req, res) => {
  const { email, name, password,pic } = req.body;

  const existingemail = await UserModel.findOne({ email });

  if (existingemail) {
    return res.send("User already exist");
  }

  bcrypt.hash(password, 5, async function (err, hash) {
    let user = new UserModel({ email, name, password: hash ,pic});
    await user.save();
    res.send("success");
  });
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  var x = await UserModel.findOne({ email });

  if (!x) {
    return res.send("user not found");
  }

  bcrypt.compare(password, x.password, function (err, result) {
    if (result) {
      const token = jwt.sign({ id: x._id }, "flipkartsecret");

      res.send({ email: x.email, name: x.name, token });
    } else {
      res.send("wrong credentials");
    }
  });
});

module.exports = app;
