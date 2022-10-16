const Banner = require("../models/faqBannerModel");
const FAQ = require("../models/faqModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllBanner = catchAsync(async (req, res, next) => {
  const banners = await Banner.find({});

  res.status(200).json({
    status: "success",
    data: {
      banners,
    },
  });
});

exports.createBanner = catchAsync(async (req, res, next) => {
  const newBanner = await Banner.create({
    title: req.body.title,
    description: req.body.description,
    image: req.file,
  });

  res.status(200).json({
    status: "success",
    data: {
      newBanner,
    },
  });
});

exports.editBanner = catchAsync(async (req, res, next) => {
  const banner = await Banner.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      image: req.file,
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
      banner,
    },
  });
});

exports.bannerStatus = catchAsync(async (req, res, next) => {
  const banner = await Banner.findByIdAndUpdate(
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
      banner,
    },
  });
});

exports.deleteBanner = catchAsync(async (req, res, next) => {
  const banner = await Banner.findByIdAndDelete(req.params.id);

  if (!banner) {
    return next(new AppError("No user found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});

//-----------------HISTORY SECTION --------------------//
exports.getAllQuestion = catchAsync(async (req, res, next) => {
  const question = await FAQ.find({});

  res.status(200).json({
    status: "success",
    data: {
      question,
    },
  });
});

exports.createQuestion = catchAsync(async (req, res, next) => {
  const question = await FAQ.create({
    category: req.body.category,
    question: req.body.question,
    answer: req.body.answer,
  });

  res.status(200).json({
    status: "success",
    data: {
      question,
    },
  });
});

exports.editQuestion = catchAsync(async (req, res, next) => {
  const question = await FAQ.findByIdAndUpdate(
    req.params.id,
    {
      category: req.body.category,
      question: req.body.question,
      answer: req.body.answer,
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
      question,
    },
  });
});

exports.QuestionStatus = catchAsync(async (req, res, next) => {
  const question = await FAQ.findByIdAndUpdate(
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
      question,
    },
  });
});

exports.deleteQuestion = catchAsync(async (req, res, next) => {
  const question = await FAQ.findByIdAndDelete(req.params.id);

  if (!question) {
    return next(new AppError("No Question found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
//---------------X HISTORY SECTION X-------------------//
