const fs = require("fs");
const deleteFile = (req, res, next) => {
  if (req.file) {
    let filename = req.body.filename;
    if (!Array.isArray(filename)) {
      filename = new Array(filename);
    }
    if (filename.length != 0) {
      for (let i = 0; i < filename.length; i++) {
        if (fs.existsSync(`uploads/${filename[i]}`)) {
          fs.unlinkSync(`uploads/${filename[i]}`);
        }
      }
    }
  }

  res.status(200).json({
    status: "success",
    token: req.token,
    data: {
      user: req.user,
    },
  });
};

module.exports = deleteFile;
