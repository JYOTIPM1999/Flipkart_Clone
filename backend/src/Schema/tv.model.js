const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  rating: { type: Number },
  price: { type: String },
  imglink: { type: String },
  wish: { type: Boolean },
});

const TvModel = mongoose.model("tv", userSchema);
module.exports = TvModel;
