const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Post = require("../models/postModel");
const User = require("../models/userModel");

exports.createPost = catchAsyncErrors(async (req, res, next) => {
  const { title, body } = req.body;
  const userId = req.user._id; // Assuming req.user contains authenticated user data

  if (!title || !body) {
    return res
      .status(400)
      .json({ success: false, message: "Title and body are required" });
  }

  const post = await Post.create({ title, body, user: userId });
  res
    .status(201)
    .json({ success: true, message: "Post created successfully", post });
});

exports.getPost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.find({});
  res
    .status(200)
    .json({ sucess: true, message: "Post added successfully", post });
});
