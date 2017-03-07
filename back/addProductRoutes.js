const express = require('express')
const path = require('path')
const something = require("./mongodb.js")
const bodyParser = require("body-parser")
const multer = require("multer")

const routes = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + "-" + Date.now())
    }
})

var upload = multer({ storage: storage })

routes.post('/save', multer({ dest: "uploads/", storage }).array('data'), function (req, res, next) {
    console.log("req => /upload");

    // for (var i in req.files) {
    //     var temp = new something.Products({
    //         userID: "",
    //         productID: "",
    //         name: "",
    //         description: "",
    //         starterPrice: "",
    //         bids: []
    //     })
    //     temp.save((err) => {
    //         if (err) res.send(403)
    //         else res.send(200)
    //     })
    // }
    res.send(200, req.files)
})

module.exports = routes;
