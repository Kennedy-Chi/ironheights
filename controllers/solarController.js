const Banner = require("../models/solarBannerModel");
const Gallery = require("../models/solarGalleryModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

//-----------------GALLERY SECTION --------------------//
exports.getAllGallery = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Gallery.find(), req.query).filter();

  const gallery = await result.query;
  res.status(200).json({
    status: "success",
    data: {
      gallery,
    },
  });
});

exports.createGallery = catchAsync(async (req, res, next) => {
  let files = [];
  req.files.forEach((el) => {
    files.push(el.filename);
  });

  const newGallery = await Gallery.create({
    gallery: files,
  });

  res.status(200).json({
    status: "success",
    data: {
      newGallery,
    },
  });
});

exports.editGallery = catchAsync(async (req, res, next) => {
  const gallery = await Gallery.findByIdAndUpdate(
    req.params.id,
    {
      gallery: req.files,
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
      gallery,
    },
  });
});

exports.deleteGallery = catchAsync(async (req, res, next) => {
  const gallery = await Gallery.findByIdAndDelete(req.params.id);

  if (!gallery) {
    return next(new AppError("No video found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
//---------------X GALLERY SECTION X-------------------//
