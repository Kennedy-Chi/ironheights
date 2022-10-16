const Goods = require("../models/goodsModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.getAllGoods = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Goods.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const goods = await features.query.clone();

  res.status(200).json({
    status: "success",
    results: goods.length,
    data: {
      goods,
    },
  });
});

exports.getGoods = catchAsync(async (req, res, next) => {
  const goods = await Goods.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      goods,
    },
  });
});

exports.getStock = catchAsync(async (req, res, next) => {
  const goods = await Goods.findById(req.params.id);
  req.stock = goods.stock;
  next();
});

exports.updateStock = catchAsync(async (req, res, next) => {
  const goods = await Goods.findByIdAndUpdate(
    req.params.id,
    {
      stock: req.body.stock,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  next();
});

exports.createGoods = catchAsync(async (req, res) => {
  const newGoods = await Goods.create({
    name: req.body.name,
    details: req.body.details,
    type: req.body.type,
    subType: req.body.subType,
    rate: req.body.rate,
    sellingPrice: req.body.sellingPrice,
    buyingPrice: req.body.buyingPrice,
    quantity: req.body.quantity,
    image: req.file.filename,
  });

  res.status(200).json({
    status: "success",
    data: {
      newGoods,
    },
  });
});

exports.updateGoods = catchAsync(async (req, res) => {
  const allowedFields = {
    name: req.body.name,
    details: req.body.details,
    type: req.body.type,
    subType: req.body.subType,
    rate: req.body.rate,
    sellingPrice: req.body.sellingPrice,
    buyingPrice: req.body.buyingPrice,
    quantity: req.body.quantity,
  };

  if (req.file) {
    allowedFields.image = req.file.filename;
  }
  const goods = await Goods.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      goods,
    },
  });
});

exports.deleteGoods = async (req, res) => {
  try {
    await Goods.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
    });
  } catch (error) {}
};
