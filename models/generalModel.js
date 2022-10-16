const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");

const generalSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
  youtube: {
    type: String,
  },
  address: {
    type: String,
  },
});

const General = mongoose.model("General", generalSchema);

module.exports = General;
