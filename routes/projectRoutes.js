const express = require("express");
const projectController = require("../controllers/projectController");
const router = express.Router();
const upload = require("../config/multer");

router
  .route("/")
  .get(projectController.getAllProject)
  .post(upload.upload.single("document"), projectController.createProject);

router
  .route("/:id")
  .get(projectController.getProject)
  .patch(upload.upload.single("document"), projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = router;
