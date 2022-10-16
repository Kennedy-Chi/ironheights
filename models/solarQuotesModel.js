const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  rating: {
    type: Number,
    unique: [true, "A quotation for this KVA already exists."],
    trim: true,
  },
  materials: {
    type: Array,
  },
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
