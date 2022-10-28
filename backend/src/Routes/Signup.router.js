const express = require("express");
const SignUp = require("../Schema/signup.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const signUp = await SignUp.find();
  res.send(signUp);
});

router.post("/", async (req, res) => {
  const post = req.body;
  console.log(post);
  try {
    const newPost = await SignUp.create(post);
    newPost.save();
    res.status(201).send("updated successfully");
  } catch (error) {
    res.send(409).send({ error: error.message });
  }
  res.end();
});

module.exports = router;
