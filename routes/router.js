const express = require("express");
const router = express.Router();
const find = require("./find");
const add = require("./addUser");
const del = require("./delUser");

//Searching the User API
router.post("/find", find);

//Adding User API
router.post("/addUser", add);

//Delete User-DAta
router.post("/delUser", del);

//exorting the routes
module.exports = router;
