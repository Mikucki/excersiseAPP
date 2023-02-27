const express = require("express");
let User = require("../models/userModel.js");
const { userController } = require("../controllers/userController.js");

const router = express.Router();

router.route("/", userController);

module.exports = router;
