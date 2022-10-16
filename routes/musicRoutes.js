const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicController");
const upload = require("../config/multer");

const check = (req, res, next) => {
  console.log(req);
  next();
};

router.get("/", musicController.getAllMusics);
router.post(
  "/",
  check,
  upload.upload.single("music"),
  musicController.addNewMusic
);
router.delete("/:musicId", musicController.deleteMusic);

module.exports = router;
