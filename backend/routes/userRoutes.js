const express = require("express");
const { model } = require("mongoose");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//Here are Two Ways of creating end Points 1 Chaining
// Them 2.Without Chianing
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
