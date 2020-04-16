//Dependencies
const express = require("express");

const mongoose = require("mongoose");
const morgan = require("morgan");
const apiRouting = require("./routes/apiRouting");
const cors = require('cors')
require("dotenv").config();

//Express server
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(morgan("short"));
app.use(cors())
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("/", apiRouting);
mongoose.connect(process.env.MONGODB_URI || "mongodb://ericcwong:password1@ds137488.mlab.com:37488/heroku_rm8m12jc",
{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => console.log("Connected to MongoDB!")
);




//Starts the server
app.listen(PORT, () =>{
    console.log(`Currently listening to http://localhost:${PORT}`)
});