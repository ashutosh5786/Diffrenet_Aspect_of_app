const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const routes = require("./routes/router");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

try {
  mongoose.connect(
    PROCESS.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
} catch (error) {
  console.error(error);
}

//setting the view to ejs
app.set("view engine", "ejs");
//routing the users
app.use("/", routes);

//starting the server
app.listen(80);
