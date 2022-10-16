const { token } = require("morgan");
const Drawing = require("../models/drawingModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.getDrawingLength = catchAsync(async (req, res, next) => {
  const result = await Drawing.find();
  req.length = result.length;

  next();
});

exports.getAllDrawings = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Drawing.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const drawings = await features.query.clone();

  res.status(200).json({
    status: "success",
    results: resultLen.length,
    data: {
      drawings,
    },
  });
});

exports.createDrawing = catchAsync(async (req, res, next) => {
  let length = pad(req.length * 1 + 1, 4);
  let name = `IHE-HOUSE${length}`;

  function pad(num, size) {
    var s = "000" + num;
    return s.substring(s.length - size);
  }

  const newDrawing = await Drawing.create({
    category: req.body.category.toLowerCase(),
    storyBuilding: req.body.storyBuilding,
    downloadFiles: req.files.downloadFiles,
    displayImages: req.files.displayImages,
    buildingInfo: req.body.buildingInfo,
    designInfo: req.body.designInfo,
    price: req.body.price,
    drawingName: name,
  });

  res.status(200).json({
    status: "success",
    data: newDrawing,
  });
});

exports.editDrawing = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  const newDrawing = await Drawing.findByIdAndUpdate(
    req.params.id,
    {
      category: req.body.category.toLowerCase(),
      storyBuilding: req.body.storyBuilding,
      downloadFiles: req.files.downloadFiles,
      displayImages: req.files.displayImages,
      buildingInfo: req.body.buildingInfo,
      designInfo: req.body.designInfo,
      price: req.body.price,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!newDrawing) {
    return next(new AppError("No drawing found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    token,
    data: newDrawing,
  });
});

exports.downloadDrawing = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  const newDrawing = await Drawing.findOneAndUpdate(req.params.id, {
    $inc: { downloads: 1 },
  });

  if (!newDrawing) {
    return next(new AppError("No drawing found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    token,
    data: newDrawing,
  });
});

exports.publishDrawings = catchAsync(async (req, res, next) => {
  console.log(req.body);
  let newDrawing = await Drawing.updateMany(
    { _id: { $in: req.body } },
    { $set: { published: true, status: "published" } },
    { multi: true }
  );

  res.status(200).json({
    status: "success",
  });
});

exports.draftDrawings = catchAsync(async (req, res, next) => {
  console.log(req.body);
  let newDrawing = await Drawing.updateMany(
    { _id: { $in: req.body } },
    { $set: { published: false, status: "draft" } },
    { multi: true }
  );

  res.status(200).json({
    status: "success",
  });
});

exports.deleteDrawing = catchAsync(async (req, res, next) => {
  const drawing = await Drawing.findByIdAndDelete(req.params.id);

  if (!drawing) {
    return next(new AppError("No Drawing found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
