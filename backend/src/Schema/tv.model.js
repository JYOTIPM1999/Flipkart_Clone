const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  rating: { type: Number },
  price: { type: Number },
  imglink: { type: String },
  wish: { type: Boolean },
});

const TvModel = mongoose.model("Tv", userSchema);
module.exports = TvModel;
