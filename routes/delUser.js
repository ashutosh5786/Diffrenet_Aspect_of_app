const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/delUser", async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (!emailExists) return res.status(400).send("No User Found");
  const result = await User.deleteOne(emailExists, (err) => {
    if (err) return console.log(err);
    res.sendStatus(200);
  });
});
module.exports = router;
