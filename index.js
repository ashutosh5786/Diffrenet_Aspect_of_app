const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const routes = require("./routes/router");

//setting the view to ejs
app.set("view engine", "ejs");

//routing the users
app.use("/", routes);

//starting the server
app.listen(80, () => console.log("listening on http://localhost:80"));
