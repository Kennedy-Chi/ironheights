const mongoose = require("mongoose");

const applianceSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  rating: {
    type: String,
    require: true,
    trim: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const Appliance = mongoose.model("Appiance", applianceSchema);

module.exports = Appliance;
