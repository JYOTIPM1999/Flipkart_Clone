const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WishList = require("./Routes/Wishlist.router");
const compression = require("compression");

const TvModel = require("./Schema/tv.model");

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());
// app.use("/wishlist", WishList);

app.get("/", async (req, res) => {
  let u = await TvModel.find();
  res.send(u);
});

app.post("/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id)

  // const update = await TvModel.findById(id);
  // let wish = update.wish;

  const search = await TvModel.updateOne(
    {price:15000 },
    { $set: { wish: "true" } }
  );
  res.send(search);
});

app.listen(8080, async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Flipkart");
  console.log("you sever started on http://localhost:8080");
});
