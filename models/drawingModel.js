const mongoose = require("mongoose");
const validator = require("validator");

const drawingSchema = new mongoose.Schema({
  drawingName: {
    type: String,
    required: [true, "A drawing must have a name"],
    unique: [true, "A drawing with this name already exist"],
    trim: true,
  },
  designInfo: {
    type: Array,
    required: [true, "A drawing must have design information"],
  },
  category: {
    type: String,
    enum: ["private", "residential", "commercial"],
    required: [true, "A drawing must have category"],
  },
  storyBuilding: {
    type: String,
    required: [true, "A drawing must indicate the story building"],
  },
  buildingInfo: {
    type: Array,
    required: [true, "A drawing must have building information"],
  },
  downloadFiles: {
    type: Array,
    required: [true, "A drawing must have downloadable files"],
  },
  displayImages: {
    type: Array,
    required: [true, "A design must have display images"],
  },
  price: {
    type: Number,
    requred: [true, "A design must have a price"],
  },

  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  regDate: { type: Date, default: Date.now },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  published: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  downloads: {
    type: Number,
    default: 0,
  },
});

const Drawing = mongoose.model("Drawing", drawingSchema);

module.exports = Drawing;
