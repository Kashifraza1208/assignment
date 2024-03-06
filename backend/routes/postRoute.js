const express = require("express");
const { createPost, getPost } = require("../controllers/postController");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.route("/post").post(isAuthenticatedUser, createPost);
router.route("/post").get(isAuthenticatedUser, getPost);

module.exports = router;
