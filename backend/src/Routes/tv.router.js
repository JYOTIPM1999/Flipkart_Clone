const express = require("express");
const TvModel = require("../Schema/tv.model");
const app = express.Router();

app.get("/lth", async (req, res) => {
  if (true) {
    const product = await TvModel.find().sort({ price: 1 });
    res.send(product);
  }
});
module.exports = app;
