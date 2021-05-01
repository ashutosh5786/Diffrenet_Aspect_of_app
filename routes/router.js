const express = require("express");
const router = express.Router();
const find = require("./find");

//sending the user to homepage
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/find", find);
router.get("/find", (req, res) => {
  res.render("find");
});

//exorting the routes
module.exports = router;
