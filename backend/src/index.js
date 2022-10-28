const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WishList = require("./Routes/Wishlist.router");
const compression = require("compression");

const TvModel = require("./Schema/tv.model");

const app = express();

app.use(express.json());
app.use(cors)
app.use(compression());
app.use("/wishlist", WishList);

// app.get("/", (req, res) => res.send("hello express"));

app.listen(8080, async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Flipkart");
  console.log("you sever started on http://localhost:8080");
});
