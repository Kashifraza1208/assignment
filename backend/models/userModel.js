const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const JWT = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Your Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password 🙈"],
    minLength: [6, "Password should be grate than 6 characters."],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptjs.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function () {
  return JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.comparePassword = async function (enterdPassword) {
  return await bcryptjs.compare(enterdPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
