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
    process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connect")
  );
} catch (error) {
  console.error(error);
}

//setting the view to ejs

//routing the users
app.use("/", routes);

//starting the server
app.listen(80, () => console.log("listening on http://localhost:80"));
