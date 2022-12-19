const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  display_img: { type: String, required: true },
  images: [
    {
      link: { type: String, required: true },
      type: { type: String, required: true },
    },
  ],
  brand: { type: String, required: true },
  stars: { type: Number, required: true },
  price: { type: Number, required: true },
  previous_price: { type: Number, required: true },
  discount_amount: { type: Number, required: true },
  discount_percent: { type: Number, required: true },
  stars_count: { type: [Number], required: true },
  circular_rating: { type: [Number], required: true },
  ratings: { type: Number, required: true },
  reviews: { type: Number, required: true },
  display_size: { type: [Number], required: true },
  resolutions: { type: [String], required: true },
  
  general_specification: [{ head: String, info: String }],
  
  review_image: [{ type: [String] }],
});

const TvModel = mongoose.model("Tv", userSchema);
module.exports = TvModel;
