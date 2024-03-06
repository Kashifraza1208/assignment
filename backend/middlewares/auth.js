const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorhandler");
const User = require("../models/userModel");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login first", 401));
  }

  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);
  next();
});
