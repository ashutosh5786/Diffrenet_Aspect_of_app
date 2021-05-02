const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/delUser", async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (!emailExists) return res.status(400).send("No User Found for Deletion");

  try {
    const result = await User.deleteOne(emailExists, () => {
      res.render("res_del", { data: emailExists });
    });
  } catch (err) {
    res.status(400);
  }
});
module.exports = router;
