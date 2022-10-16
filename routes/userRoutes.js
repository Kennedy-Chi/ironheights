const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const upload = require("../config/multer");
const router = express.Router();
const deleteFile = require("../utils/deleteFile");

const response = (req, res) => {
  res.status(200).json({
    status: "success",
    token: req.token,
    data: {
      user: req.user,
    },
  });
};

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.get("/validate", authController.protect, response);

router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);
router.route("/reviews").get(authController.protect, userController.getReviews);

router
  .route("/reviewStatus/:id")
  .patch(authController.protect, userController.reviewStatus);

router.patch("/reviews/:id", authController.protect, userController.editReview);

router.patch(
  "/updateMe/:id",
  upload.upload.single("profilePicture"),
  authController.protect,
  userController.updateMe,
  deleteFile
);

router.delete(
  "/deleteMe/:token",
  authController.protect,
  userController.deleteMe
);

router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.editUser)
  .delete(
    authController.protect,
    authController.restrictTo("user"),
    userController.deleteUser
  );

module.exports = router;
