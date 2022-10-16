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
  category: {
    type: String,
    default: false,
  },
});

const Banner = mongoose.model("GeneralBanner", bannerSchema);

module.exports = Banner;
