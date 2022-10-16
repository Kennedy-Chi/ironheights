const express = require("express");
const salesController = require("../controllers/salesController");
const router = express.Router();
const upload = require("../config/multer");

router
  .route("/")
  .get(salesController.getAllSales)
  .post(upload.upload.single("receipt"), salesController.createSales);

router
  .route("/:id")
  .get()
  .patch(upload.upload.single("receipt"), salesController.updateSales)
  .delete(salesController.deleteSales);

module.exports = router;
