const Quote = require("../models/solarQuotesModel");
const Load = require("../models/loadModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.getAllQuotes = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Quote.find(), req.query).filter().sort();

  const resultLen = await result.query;

  const features = result.paginate();

  const quotes = await features.query.clone();

  res.status(200).json({
    status: "success",
    data: {
      quotes,
    },
  });
});

exports.getAllQuotation = catchAsync(async (req, res, next) => {
  const load = req.params.load;

  const result = new APIFeatures(
    Quote.find({ rating: { $gt: load } }),
    req.query
  ).paginate();

  const quote = await result.query;

  if (!quote) {
    return next(new AppError(`Sorry no quotation for ${load}KVA`, 401));
  }

  res.status(200).json({
    status: "success",
    data: {
      quote,
    },
  });
});

exports.createQuote = catchAsync(async (req, res) => {
  const quote = await Quote.create({
    rating: req.body.rating,
    materials: req.body.materials,
  });

  res.status(200).json({
    status: "success",
    data: {
      quote,
    },
  });
});

exports.editQuote = catchAsync(async (req, res) => {
  const allowedFields = {
    rating: req.body.rating,
    materials: req.body.materials,
  };

  const quotes = await Quote.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      quotes,
    },
  });
});

exports.deleteQuote = async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
    });
  } catch (error) {}
};

exports.getAllLoad = catchAsync(async (req, res, next) => {
  const loads = await Load.find();

  res.status(200).json({
    status: "success",
    data: {
      loads,
    },
  });
});

exports.createLoad = catchAsync(async (req, res) => {
  const load = await Load.create({
    name: req.body.name,
    wattage: req.body.wattage,
    image: req.file.filename,
  });

  res.status(200).json({
    status: "success",
    data: {
      //   load,
    },
  });
});

exports.editLoad = catchAsync(async (req, res) => {
  const allowedFields = {
    name: req.body.name,
    wattage: req.body.wattage,
  };

  if (req.file) {
    allowedFields.image = req.file.filename;
  }
  const load = await Load.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      load,
    },
  });
});

exports.deleteLoad = async (req, res) => {
  try {
    await Load.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
    });
  } catch (error) {}
};
