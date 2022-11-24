const express = require("express");
const productModel = require("../Schema/product.model");

const app = express.Router();

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findById(id);
  res.send(product);
});

module.exports = app;
