const express = require("express");
const WishList = require("./Routes/Wishlist.router");
const compression = require("compression");
const app = express();

app.use(express.json());
app.use(compression());
app.use("/wishlist", WishList);

// app.get("/", (req, res) => res.send("hello express"));

app.listen(8080, () => {
  console.log("server started on port 8080");
});
