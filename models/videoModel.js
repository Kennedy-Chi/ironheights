const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  thumbnail: {
    type: Object,
  },
  video: {
    type: Object,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
