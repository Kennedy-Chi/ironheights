const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please fill in your username"],
    minlength: [3, "Username must be more than 5 characters"],
    unique: [true, "A user with this username already exist"],
    trim: true,
  },
  fullName: {
    type: String,
    required: [true, "Please fill in your fullname"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please fill in your email"],
    unique: [true, "A user with this email already exist"],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please fill in your phone number"],
    unique: [true, "A user with this phone number already exist"],
    minlength: [10, "Phone number must be at least 10 digits"],
    trim: true,
  },
  status: {
    type: String,
    enum: ["staff", "client", "designer", "affiliate", "student", "user"],
    default: "user",
  },
  staffType: {
    type: String,
    enum: [
      "ceo",
      "manager",
      "secretary",
      "solar",
      "cctv",
      "designer",
      "rep",
      "user",
    ],
    default: "user",
  },
  reviewStatus: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: [true, "Please fill in your password"],
    minlenght: [6, "Password must be at least 6 characters long"],
    select: false,
  },
  cPassword: {
    type: String,
    required: [true, "Please confirm the password"],
    validate: {
      //This only works on save
      validator: function (el) {
        return el == this.password;
      },
      message: "Sorry the passwords do not match",
    },
  },
  review: {
    type: Object,
  },
  regDate: { type: Date, default: Date.now },
  profilePicture: { type: String },
  referrals: [],
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.cPassword = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = this.passwordChangedAt.getTime() / 1000;
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
