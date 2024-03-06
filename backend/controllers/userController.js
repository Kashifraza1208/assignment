const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/userModel.js");
const ErrorHandler = require("../utils/errorhandler.js");
const sendToken = require("../utils/jwtToken.js");

exports.signUp = catchAsyncErrors(async (req, res, next) => {
  const { username, email, password } = req.body;

  const userName = await User.findOne({ username });
  const userEmail = await User.findOne({ email });

  if (userName) {
    return next(new ErrorHandler("Username already exists!", 400));
  }
  if (userEmail) {
    return next(new ErrorHandler("Email already exists!", 400));
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  sendToken(user, 201, res);
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password 🫣", 401));
  }

  //must use await i waste 2 hour for this shit await
  const isPasswordMatced = await user.comparePassword(password);

  if (!isPasswordMatced) {
    return next(new ErrorHandler("Invalid Password 🫣", 401));
  }

  sendToken(user, 200, res);
});

exports.logOut = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    sucess: true,
    message: "Logged Out.",
  });
});
