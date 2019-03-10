const express = require("express");
const app = express();

const myRoutes = require("./api/routes/app");

app.use("/", myRoutes);

module.exports = app;
