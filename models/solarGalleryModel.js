const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  gallery: {
    type: Array,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const Gallery = mongoose.model("SolarGallery", gallerySchema);

module.exports = Gallery;
