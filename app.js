const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const myRoutes = require("./api/routes/app");
const userRoutes = require("./api/routes/user");

app.use("/", myRoutes);
app.use("/user", userRoutes);

module.exports = app;
