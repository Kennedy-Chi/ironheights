const Gallery = require("../models/galleryModel");
const Video = require("../models/videoModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

//-----------------VIDEO SECTION --------------------//
exports.getAllVideo = catchAsync(async (req, res, next) => {
  const videos = await Video.find({});

  res.status(200).json({
    status: "success",
    data: {
      videos,
    },
  });
});

exports.createVideo = catchAsync(async (req, res, next) => {
  const newVideo = await Video.create({
    thumbnail: req.files.thumbnail,
    video: req.files.video,
    description: req.body.description,
  });

  res.status(200).json({
    status: "success",
    data: {
      newVideo,
    },
  });
});

exports.editVideo = catchAsync(async (req, res, next) => {
  const video = await Video.findByIdAndUpdate(
    req.params.id,
    {
      thumbnail: req.files.thumbnail,
      description: req.body.description,
      video: req.files.video,
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
      video,
    },
  });
});

exports.videoStatus = catchAsync(async (req, res, next) => {
  const video = await Video.findByIdAndUpdate(
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
      video,
    },
  });
});

exports.deleteVideo = catchAsync(async (req, res, next) => {
  const video = await Video.findByIdAndDelete(req.params.id);

  if (!video) {
    return next(new AppError("No video found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
//---------------X VIDEO SECTION X-------------------//

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
  const files = [];
  req.files.forEach((el) => {
    files.push(el.filename);
  });
  const newGallery = await Gallery.create({
    type: req.body.type,
    title: req.body.title,
    Msg: req.body.message,
    Wwd: req.body.whatWeDo,
    list: req.body.list,
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
  const editedField = {
    type: req.body.type,
    title: req.body.title,
    Msg: req.body.message,
    Wwd: req.body.whatWeDo,
    list: req.body.list,
  };

  if (req.files) {
    let files = [];
    req.files.forEach((el) => {
      files.push(el.filename);
    });

    editedField.gallery = files;
  }
  const gallery = await Gallery.findByIdAndUpdate(req.params.id, editedField, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

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
