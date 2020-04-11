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

const publicPath = path.join(__dirname, "..", "public")

//Middleware
app.use(morgan("short"));
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static(publicPath));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connection to MongoDB was successful!")
})

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.use("/", apiRouting);

//Starts the server
app.listen(PORT, () =>{
    console.log(`Currently listening to http://localhost:${PORT}`)
});