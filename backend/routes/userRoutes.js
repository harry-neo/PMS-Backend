const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMyData,
} = require("../controllers/authController/auth");


router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
