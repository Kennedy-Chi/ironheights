const express = require("express");
const drawingController = require("../controllers/drawingController");
const authController = require("../controllers/authController");
const upload = require("../config/multer");
const router = express.Router();

router
  .route("/")
  .post(
    authController.protect,
    upload.upload.fields([
      { name: "displayImages", maxCount: 6 },
      { name: "downloadFiles", maxCount: 10 },
    ]),
    drawingController.getDrawingLength,
    drawingController.createDrawing
  )
  .get(drawingController.getAllDrawings);

router.route("/update/:id").patch(
  authController.protect,
  upload.upload.fields([
    { name: "displayImages", maxCount: 6 },
    { name: "downloadFiles", maxCount: 10 },
  ]),
  drawingController.editDrawing
);

router
  .route("/download/:id")
  .patch(authController.protect, drawingController.downloadDrawing);

router.patch("/publish", drawingController.publishDrawings);
router.patch("/draft", drawingController.draftDrawings);
// .patch("/draft", drawingController.draftDrawings);

// router
//   .route("/:id")
//   .get()
//   .delete(authController.protect, authController.restrictTo("user"));

// router.patch(
//   "/updateMe/:id",
//   upload.upload.single("profilePicture"),
//   authController.protect
// );

// router.delete("/deleteMe/:token", authController.protect);

// router.route("/comments").get(authController.protect, userController.getAllUsers);

router.route("/").get(authController.protect);

module.exports = router;
