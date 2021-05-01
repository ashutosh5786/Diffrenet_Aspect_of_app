const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/find", async (req, res) => {
  // Checking if the user is already registered
  const UserAvailability = await User.findOne({ name: req.body.name });
  console.log(UserAvailability);
  if (!UserAvailability) return res.sendStatus(400);
  res.sendStatus(200);
});
//exorting the routes
module.exports = router;
