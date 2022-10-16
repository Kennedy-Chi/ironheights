const express = require("express");
const controller = require("../controllers/applianceController");
const router = express.Router();

router
  .route("/")
  .get(controller.getAllAppliance)
  .post(controller.createAppliance);

router
  .route("/:id")
  .get(controller.getAppliance)
  .patch(controller.editAppliance)
  .delete(controller.deleteAppliance);

module.exports = router;
