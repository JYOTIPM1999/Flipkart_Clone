const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WishList = require("./Routes/Wishlist.router");
const compression = require("compression");
const userRouter = require("./Routes/user.router");
const ProductRouter = require("./Routes/product.router");
const TvModel = require("./Schema/tv.model");
const ProductModel = require("./Schema/product.model");
const UserModel = require("./Schema/user.model");

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());

app.use("/user", userRouter);
app.use("/wishlist", WishList);
app.use("/product", ProductRouter);

app.get("/", async (req, res) => {
  let tv = await TvModel.find();
  res.send(tv);
});

app.post("/:id", async (req, res) => {
  const { id } = req.params;
  let update = await TvModel.updateOne(
    { _id: mongoose.Types.ObjectId(id) },
    { $set: { wish: req.body.wishlist } }
  );
  res.send(update);
});

mongoose.connect("mongodb://127.0.0.1:27017/Flipkart").then(() => {
  app.listen(8080, (req, res) => {
    console.log("you sever started on http://localhost:8080");
  });
});
