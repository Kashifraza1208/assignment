const express = require("express");
const { signUp, loginUser, logOut } = require("../controllers/userController");
const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(loginUser);
router.route("/logout").get(logOut);

module.exports = router;
