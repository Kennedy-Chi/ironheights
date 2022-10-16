const { token } = require("morgan");
const History = require("../models/aboutHistoryModel");
const Gallery = require("../models/galleryModel");
const Video = require("../models/videoModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

//-----------------HISTORY SECTION --------------------//
exports.getAllHistory = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(History.find(), req.query).filter();

  const history = await result.query;

  res.status(200).json({
    status: "success",
    data: {
      history,
    },
  });
});

exports.createHistory = catchAsync(async (req, res, next) => {
  const history = await History.create({
    history: req.body.history,
    list: req.body.list,
  });

  res.status(200).json({
    status: "success",
    data: {
      history,
    },
  });
});

exports.editHistory = catchAsync(async (req, res, next) => {
  console.log(req);
  const history = await History.findByIdAndUpdate(
    req.params.id,
    {
      history: req.body.history,
      list: req.body.list,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    status: "success",
    token: req.token,
    data: {
      history,
    },
  });
});

exports.historyStatus = catchAsync(async (req, res, next) => {
  const history = await History.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    status: "success",
    token: req.token,
    data: {
      history,
    },
  });
});

exports.deleteHistory = catchAsync(async (req, res, next) => {
  const history = await History.findByIdAndDelete(req.params.id);

  if (!history) {
    return next(new AppError("No history found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
//---------------X HISTORY SECTION X-------------------//
