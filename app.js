require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

/*************************
||    APP CONFIGURATION   ||
**************************/
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "config")));
global.__basedir = __dirname; // A way to access __dirname across the applications

/***********************
||  Routes             ||
************************/
require("./routes/user.route")(app);

// DB
const db = require("./models");

// Pass  {force: true} to the sync function,
// if you want to drop and create the tables always
db.sequelize.sync();

module.exports = app;
