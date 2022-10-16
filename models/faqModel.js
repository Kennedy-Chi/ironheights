const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  category: {
    type: String,
  },
  question: {
    type: String,
  },

  answer: {
    type: String,
  },
});

const FAQ = mongoose.model("FAQ", historySchema);

module.exports = FAQ;
