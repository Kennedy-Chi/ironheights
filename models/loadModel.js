const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  wattage: {
    type: Number,
  },
  unit: {
    type: Number,
    default: 0,
  },
});

const Load = mongoose.model("Load", quoteSchema);

module.exports = Load;
