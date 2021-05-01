const express = require("express");
const router = express.Router();

router.post("/upload", (req, res) => {
  const search = req.body.search;
  console.log(search);
  res.redirect("/upload");
});
//exorting the routes
module.exports = router;
