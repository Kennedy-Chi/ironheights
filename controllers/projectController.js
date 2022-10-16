const Project = require("../models/projectModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.getAllProject = catchAsync(async (req, res) => {
  const project = await Project.find();

  res.status(200).json({
    status: "success",
    results: project.length,
    data: {
      project,
    },
  });
});

exports.getProject = catchAsync(async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.createProject = catchAsync(async (req, res) => {
  const newProject = await Project.create({
    description: req.body.description,
    client: req.body.name,
    amount: req.body.amount,
    dateStarted: req.body.dateStarted,
    dateFinished: req.body.dateFinished,
    document: req.file,
  });

  res.status(200).json({
    status: "success",
    data: {
      newProject,
    },
  });
});

exports.updateProject = catchAsync(async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    {
      client: req.body.name,
      amount: req.body.amount,
      description: req.body.description,
      dateStarted: req.body.dateStarted,
      dateFinished: req.body.dateFinished,
      document: req.file,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.deleteProject = catchAsync(async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
  });
});
