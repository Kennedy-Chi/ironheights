const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "A project must have description"],
  },
  client: {
    type: String,
    required: [true, "A project must have client"],
  },
  document: {
    type: Object,
    required: [true, "A project must have location"],
  },
  amount: {
    type: String,
    required: [true, "A project must have amount"],
  },
  dateStarted: {
    type: Date,
  },
  dateFinished: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
