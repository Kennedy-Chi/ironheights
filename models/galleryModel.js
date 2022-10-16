const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  type: {
    type: String,
  },
  title: {
    type: String,
  },
  Msg: {
    type: String,
  },
  Wwd: {
    type: String,
  },
  list: {
    type: Array,
  },
  gallery: {
    type: Array,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
