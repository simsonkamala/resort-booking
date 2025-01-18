const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/mern20");
const db = mongoose.connection

db.on("error", () => { console.log("Connection error....") } )
db.on("open", () => { console.log("Connection Successfull...")})

const maindata = require("./mainfiledata");
app.use("/main",maindata)

app.listen( 1111 , () => {
    console.log("Server Started....")
})