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
const PORT = process.env.PORT || 9000;
// Serve up static assets (usually on heroku)

// const publicPath = path.join(__dirname, "../public")

//Middleware
app.use(morgan("short"));
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true 
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connection to MongoDB was successful!")
})

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../public/index.html"));
// });
app.use("/", apiRouting);

//Starts the server
app.listen(PORT, () =>{
    console.log(`Currently listening to http://localhost:${PORT}`)
});