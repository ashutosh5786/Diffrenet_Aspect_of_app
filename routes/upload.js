const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/upload", async (req, res) => {
  // Checking if the user is already registered
  const UserAvailability = await User.findOne({ name: req.body.search });
  if (!UserAvailability) return res.send("User Not Found");
  res.redirect("/upload");
});
//exorting the routes
module.exports = router;
