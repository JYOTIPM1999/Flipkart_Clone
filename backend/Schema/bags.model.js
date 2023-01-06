const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
  name: { type: String },
  display_img: { type: String },
  brand: { type: String, required: true },
  price: { type: Number },
  stars: { type: Number },
  stars_count: { type: [Number] },
  circular_rating: { type: [Number] },
  ratings: { type: Number },
  reviews: { type: Number },
  discount_amount: { type: Number },
  discount_rate: { type: Number },
  warranty: { type: String },
  display_size: [Number],
  ideal_for: [Number],
  resolution: [String],
  screen_type: [String],
  smart_tv: { type: Boolean },
  operating_system: { type: String },
  connectivity: { type: String },
  number_of_HDMI_ports: [Number],
  number_of_USB_ports: [Number],
  highlights: [String],
  payment_methods: [String],
  seller: {
    name: { type: String },
    stars: { type: String },
    otherinfo: [String],
  },
  description: { type: String },
  general_specification: [{ head: String, info: String }],
  bank_offers: [{ name: { type: String }, message: { type: String } }],
  images: [
    { link: { type: String }, type: { type: String }, width: { type: String } },
  ],
});

const cameraModel = mongoose.model("camera", cameraSchema);
module.exports = cameraModel;
