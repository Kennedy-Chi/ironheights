const Sales = require("../models/salesModel");
const Goods = require("../models/goodsModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
exports.getSalesLength = catchAsync(async (req, res, next) => {
  const result = await Sales.find();
  req.length = result.length;

  next();
});

exports.getAllSales = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Sales.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const sales = await features.query.clone();

  res.status(200).json({
    status: "success",
    results: resultLen,
    data: {
      sales,
    },
  });
});

exports.createSales = catchAsync(async (req, res, next) => {
  let idArray = req.body.id;
  let stockArray = req.body.stock;

  if (!Array.isArray(idArray)) {
    idArray = new Array(idArray);
  }

  if (!Array.isArray(stockArray)) {
    stockArray = new Array(stockArray);
  }

  for (let i = 0; i < idArray.length; i++) {
    await Goods.bulkWrite([
      {
        updateOne: {
          filter: {
            _id: idArray[i],
          },
          update: {
            $set: {
              stock: stockArray[i],
            },
          },
          upsert: true,
        },
      },
    ]);
  }

  const newSale = await Sales.create({
    goods: req.body.goods,
    price: req.body.price,
    quantity: req.body.quantity,
    rating: req.body.rating,
    stock: stockArray,
    idArray: idArray,
    createdAt: new Date(),
    nature: req.body.nature,
    discount: req.body.discount,
    total: req.body.total,
    receipt: req.file,
  });

  res.status(200).json({
    status: "success",
  });
});

exports.updateSales = catchAsync(async (req, res, next) => {
  let idArray = req.body.id;
  let stockArray = req.body.stock;

  if (!Array.isArray(idArray)) {
    idArray = new Array(idArray);
  }

  if (!Array.isArray(stockArray)) {
    stockArray = new Array(stockArray);
  }

  console.log(idArray, stockArray);

  for (let i = 0; i < idArray.length; i++) {
    await Goods.bulkWrite([
      {
        updateOne: {
          filter: {
            _id: idArray[i],
          },
          update: {
            $set: {
              stock: stockArray[i],
            },
          },
          upsert: true,
        },
      },
    ]);
  }

  const sales = await Sales.findOneAndUpdate(
    { _id: req.params.id, day: req.body.today },
    {
      goods: req.body.goods,
      price: req.body.price,
      quantity: req.body.quantity,
      rating: req.body.rating,
      stock: stockArray,
      idArray: idArray,
      nature: req.body.nature,
      discount: req.body.discount,
      total: req.body.total,
      receipt: req.file,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!sales) {
    return next(
      new AppError("Sorry you cannot edit sales of previous days", 400)
    );
  }
  res.status(200).json({
    status: "success",
    data: {
      sales,
    },
  });
  // const sales = await Sales.findByIdAndUpdate(
  //   req.params.id,
  //   {
  //     goods: req.body.goods,
  //     price: req.body.price,
  //     quantity: req.body.quantity,
  //     rating: req.body.rating,
  //     stock: stockArray,
  //     idArray: idArray,
  //     nature: req.body.nature,
  //     discount: req.body.discount,
  //     total: req.body.total,
  //     receipt: req.file,
  //   },
  //   {
  //     new: true,
  //     runValidators: true,
  //   }
  // );
});

exports.deleteSales = async (req, res) => {
  try {
    await Sales.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
    });
  } catch (error) {}
};
