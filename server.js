//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

//Declare Variables
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const homeRoute = require("./routes/home");
const editRoute = require("./routes/edit");

require("dotenv").config({ path: "./config/.env" });

connectDB();

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Set Routes
app.use("/", homeRoute);
app.use("/edit", editRoute);

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
