const express = require("express");
const router = express.Router();
const upload = require("./upload");

//sending the user to homepage
router.get("/", (req, res) => {
  res.render("index");
});

router.post("/upload", upload);
router.get("/upload", (req, res) => {
  res.render("upload");
});

//exorting the routes
module.exports = router;
