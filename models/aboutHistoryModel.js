const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  history: {
    type: String,
  },
  list: {
    type: Array,
  },

  status: {
    type: Boolean,
    default: false,
  },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
