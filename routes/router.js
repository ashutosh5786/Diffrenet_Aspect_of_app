const express = require("express");
const router = express.Router();

//sending the user to homepage
router.get("/", (req, res) => {
  res.render("index");
});

//exorting the routes
module.exports = router;
