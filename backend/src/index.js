const express = require("express");
const mongoose = require("mongoose");
const TvModel = require("./Schema/tv.model");
const WishList = require("./Routes/Wishlist.router");
const compression = require("compression");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(compression());

app.get("/", async (req, res) => {
  let Tv = await TvModel.find();
  res.send(Tv);
});

app.post("/:id", async (req, res) => {
  const { id } = req.params;

  let Update = await TvModel.updateOne(
    { _id: mongoose.Types.ObjectId(id) },
    { $set: { wish: req.body.wishlist } }
  );
  res.send(Update);
});

mongoose.connect("mongodb://127.0.0.1:27017/Flipkart").then(() => {
  app.listen(8080, () => {
    console.log("server started on port 8080");
  });
});
