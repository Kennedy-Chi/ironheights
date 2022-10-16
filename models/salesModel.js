const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  goods: {
    type: Array,
    required: [true, "A sale must have goods"],
  },
  price: {
    type: Array,
    required: [true, "A sale must have price"],
  },
  total: {
    type: Number,
  },
  quantity: {
    type: Array,
    required: [true, "A sale must have quantity"],
  },
  stock: {
    type: Array,
  },
  rating: {
    type: Array,
    required: [true, "A goods must have rating"],
  },
  idArray: {
    type: Array,
  },
  day: {
    type: Number,
  },
  createdAt: {
    type: String,
  },
  nature: {
    type: String,
    enum: ["Bought", "Sold"],
  },
  discount: { type: Number, default: 0 },
  receipt: {
    type: Object,
    required: [true, "A sale must have a receipt"],
  },
});

salesSchema.pre("save", function (next) {
  let d = new Date(this.createdAt);
  this.day = d.getDate();
  next();
});

const Sales = mongoose.model("Sales", salesSchema);

module.exports = Sales;
