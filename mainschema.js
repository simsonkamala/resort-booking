const mongoose = require('mongoose')

const resortlist = new mongoose.Schema({
    image : { type : String, required : true },
    rooms : { type : String, required : true }
})

module.exports = mongoose.model("resortlist", resortlist)