const express = require("express");
const goodsController = require("../controllers/goodsController");
const router = express.Router();
const upload = require("../config/multer");

const check = (req, res, next) => {
  console.log(req);
  next();
};

router
  .route("/")
  .get(goodsController.getAllGoods)
  .post(upload.upload.single("image"), goodsController.createGoods);

router
  .route("/:id")
  .get(goodsController.getGoods)
  .patch(upload.upload.single("image"), goodsController.updateGoods)
  .delete(goodsController.deleteGoods);

module.exports = router;
