const Banner = require("../models/generalBannerModel");
const Page = require("../models/pageListingModel");
const General = require("../models/generalModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

const catchAsync = require("../utils/catchAsync");

exports.getAllBanner = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Banner.find(), req.query).filter();

  const banners = await result.query;

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
    category: req.body.category.toLowerCase(),
    image: req.file.filename,
  });

  res.status(200).json({
    status: "success",
    data: {
      newBanner,
    },
  });
});

exports.editBanner = catchAsync(async (req, res, next) => {
  const allowedFields = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category.toLowerCase(),
  };

  if (req.file) {
    allowedFields.image = req.file.filename;
  }

  const banner = await Banner.findByIdAndUpdate(req.params.id, allowedFields, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

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
    return next(new AppError("No Banner found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});

//-----------------PAGE SECTION --------------------//
exports.getAllPage = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Page.find(), req.query).filter();

  const page = await result.query;

  res.status(200).json({
    status: "success",
    data: {
      page,
    },
  });
});

exports.createPage = catchAsync(async (req, res, next) => {
  const page = await Page.create({
    category: req.body.category.toLowerCase(),
    title: req.body.title,
    list: req.body.list,
    intro: req.body.intro,
  });

  res.status(200).json({
    status: "success",
    data: {
      page,
    },
  });
});

exports.editPage = catchAsync(async (req, res, next) => {
  const page = await Page.findByIdAndUpdate(
    req.params.id,
    {
      category: req.body.category.toLowerCase(),
      title: req.body.title,
      list: req.body.list,
      intro: req.body.intro,
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
      page,
    },
  });
});

exports.deletePage = catchAsync(async (req, res, next) => {
  const page = await Page.findByIdAndDelete(req.params.id);

  if (!page) {
    return next(new AppError("No pagefound with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
//---------------X PAGE SECTION X-------------------//

//-----------------GENERAL SECTION --------------------//
exports.getAllGeneral = catchAsync(async (req, res, next) => {
  const general = await General.find({});

  res.status(200).json({
    status: "success",
    data: {
      general,
    },
  });
});

exports.createGeneral = catchAsync(async (req, res, next) => {
  const general = await General.create({
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    youtube: req.body.youtube,
    whatsapp: req.body.whatsapp,
    address: req.body.address,
  });

  res.status(200).json({
    status: "success",
    data: {
      general,
    },
  });
});

exports.editGeneral = catchAsync(async (req, res, next) => {
  const general = await General.findByIdAndUpdate(
    req.params.id,
    {
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      youtube: req.body.youtube,
      whatsapp: req.body.whatsapp,
      address: req.body.address,
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
      general,
    },
  });
});

//---------------X GENERAL SECTION X-------------------//
