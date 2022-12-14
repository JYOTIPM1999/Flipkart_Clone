const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const WishList = require("./Routes/Wishlist.router");
const compression = require("compression");
const userRouter = require("./Routes/user.router");
const ProductRouter = require("./Routes/product.router");
const TvRouter = require("./Routes/tv.router");
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
app.use("/tv", TvRouter);

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
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://FLIPKART:project@cluster0.aycyzrd.mongodb.net/Flipkart"
  )
  .then(() => {
    app.listen(8090, (req, res) => {
      console.log("Server started on http://localhost:8090");
    });
  });
