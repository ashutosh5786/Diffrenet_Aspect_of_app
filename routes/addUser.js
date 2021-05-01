const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/addUser", async (req, res) => {
  // Checking The Email
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email Already Exists");
  // Adding A New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  });
  try {
    const savedUser = await user.save();
    res.sendStatus(200);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
});
module.exports = router;
