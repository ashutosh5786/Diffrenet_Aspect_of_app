const express = require("express");
const router = express.Router();
const find = require("./find");
const add = require("./addUser");
const del = require("./delUser");

router.get("/", (req, res) => {
  res.render("index");
});

//Searching the User API
router.get("/find", (req, res) => {
  res.render("find");
});
router.post("/find", find);

//Adding User API
router.post("/addUser", add);

//Delete User-DAta
router.get("/del", (req, res) => {
  res.render("deleted");
});
router.post("/delUser", del);

//exorting the routes
module.exports = router;
