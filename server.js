//Dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRouting = require("./routes/apiRouting");
const path = require("path")
require("dotenv").config();

//Express server
const app = express();
const PORT = process.env.PORT || 3001;

// const publicPath = path.join(__dirname, "../public")

//Middleware
app.use(morgan("short"));
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://ericcwong:password1@ds137488.mlab.com:37488/heroku_0kfclxf8");


app.use("/", apiRouting);

//Starts the server
app.listen(PORT, () =>{
    console.log(`Currently listening to http://localhost:${PORT}`)
});