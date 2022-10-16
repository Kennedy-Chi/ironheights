const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
  rate: {
    type: String,
    required: [true, "A goods must have a rating"],
  },
  name: {
    type: String,
    require: [true, "A goods must have a name"],
    unique: [true, "A goods with this name already exist"],
  },
  image: {
    type: Object,
  },
  details: {
    type: String,
  },
  type: {
    type: String,
  },
  subType: {
    type: String,
  },
  sellingPrice: {
    type: Number,
    require: [true, "A goods must have a price"],
  },
  buyingPrice: {
    type: Number,
    require: [true, "A goods must have a price"],
  },
  stock: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Goods = mongoose.model("Goods", goodsSchema);

module.exports = Goods;
