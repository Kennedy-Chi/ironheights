const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: Object,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const Banner = mongoose.model("AboutBanner", bannerSchema);

module.exports = Banner;
