const express = require("express");
const TvModel = require("../Schema/tv.model");
const app = express.Router();

app.post("/search", async (req, res) => {

  const { str } = req.body;
  if(str.length == 0)
  {
    return res.send([])
  }
  const result = await TvModel.find({ name: { $regex: str, $options: "$i" } });
  res.send(result);
});

app.get("/", async (req, res) => {
  const tv = await TvModel.find();
  res.send(tv);
});

app.get("/singlepage", async (req, res) => {
  const { id } = req.query;
  const tv = await TvModel.findOne({ _id: id });
  res.send(tv);
});

app.get("/lth", async (req, res) => {
  if (true) {
    const product = await TvModel.find().sort({ price: 1 });
    res.send(product);
  }
});
app.get("/htl", async (req, res) => {
  if (true) {
    const product = await TvModel.find().sort({ price: -1 });
    res.send(product);
  }
});

module.exports = app;
