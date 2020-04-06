//Dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

//Express server
const app = express();
const PORT = process.env.PORT || 9000;

//Middleware
app.use(morgan("short"));
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

mongoose.connect("mongodb://ericcwong:password1@ds263847.mlab.com:63847/heroku_cr5n4dh4", {
  useNewUrlParser: true,
  useFindAndModify: false
});


//Starts the server
app.listen(PORT, () =>{
    console.log(`Currently listening to http://localhost:${PORT}`)
});