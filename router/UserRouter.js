const express = require("express");
const router = express.Router();
// const userValidationSchema = require("./schema/UserValidationSchema");
const User = require("../model/UserModel");
require("../db/config");

router.post("/", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  res.send("User created");
  console.log(req.body);
});

module.exports = router;
