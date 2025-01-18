const express = require("express")
const router = express.Router();

module.exports = router 

const resortlist = require("./mainschema")
const resortform = require("./resortform")

router.get("/list", async (req, res) => {
    const data = await resortlist.find();
    res.status(201).json(data)
})

router.get("/formlist", async (req, res) => {
    const formdatas = await resortform.find();
    res.status(201).json(formdatas)
})

router.get("/:id", async(req, res) => {
    let id = req.params.id;
    let datas = await resortlist.findById(id);
    res.status(201).json(datas)
})

router.get("/updatebooking/:bookingID", async (req, res) => {
    let id = req.params.bookingID;
    const bookingperson = await resortform.findById(id);
    res.status(201).json( bookingperson )
})

router.put("/postdatabooking/", async (req, res) => {
    let id = req.body.Idsbooking;
    const alldatas = await resortform.findById(id);
    alldatas.name = req.body.updatename,
    alldatas.email = req.body.updateemail,
    alldatas.phoneNo = req.body.updatephoneNo,
    alldatas.address = req.body.updateaddress
    const updatedBooking = await alldatas.save();
    res.status(201).json({'Message' : 'updated Successfully...'})
})

router.put("/apploaddata", async (req, res) => {
    let id = req.body.ids;
    let resortdata = await resortlist.findById(id)
    resortdata.rooms = req.body.updaterooms,
    resortdata.image = req.body.updateimages
    const updatedatas = await resortdata.save()
    res.status(201).json({'message' : 'updated Successfully...'})
})

router.post("/insert", async(req, res) => {
    
    let inserteddata = resortform({
        name    : req.body.names,
        email   : req.body.emails,
        phoneNo : req.body.phoneno,
        address : req.body.address
    })

    let saveddata = await inserteddata.save();

    res.status(201).json({ 'message' : 'Booked'})
    
})

