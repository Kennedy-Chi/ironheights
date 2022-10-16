const Appliance = require("../models/appliance");

exports.getAllAppliance = async (req, res) => {
  try {
    const appliance = await Appliance.find();

    res.status(200).json({
      status: "success",
      results: appliance.length,
      data: {
        appliance,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.getAppliance = async (req, res) => {
  try {
    const appliance = await Appliance.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        appliance,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.createAppliance = async (req, res) => {
  try {
    const newAppliance = await appliance.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        newAppliance,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.editAppliance = async (req, res) => {
  try {
    const appliance = await Appliance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        appliance,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.deleteAppliance = async (req, res) => {
  try {
    await Appliance.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
