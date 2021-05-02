const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/find", async (req, res) => {
  // Checking if the user is already registered
  await User.findOne({ name: req.body.name }, (err, data) => {
    if (err) throw err;
    res.render("result", { users: data });
  });
});
//exorting the routes
module.exports = router;
