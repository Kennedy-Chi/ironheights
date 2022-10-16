const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  intro: {
    type: String,
  },
  title: {
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

const Page = mongoose.model("PageListing", pageSchema);

module.exports = Page;
