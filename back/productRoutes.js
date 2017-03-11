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

routes.post("/fetchOneProduct", (req, res) => {
    console.log("req => /fetchOne");
    something.Products.findOne({ productID: req.body.id }, (err, product) => {
        if (err) res.send(403)
        else res.send(200, product)
    })
})

routes.post("/fetchAllProducts", (req, res) => {
    console.log("req => /fetchAllProducts");
    something.Products.find({}, (err, products) => {
        if (err) {
            res.send(403)
            console.log("asda");
        }
        else res.send(200, products)
    })
})

routes.post("/fetchMyProducts", (req, res) => {
    something.Products.find({ userID: req.body.id }, (err, products) => {
        if (err) res.send(403)
        else res.send(200, products)
    })
})

//save to DB
routes.post('/saveImgs', multer({ dest: "uploads/", storage }).array('data'), function (req, res, next) {
    console.log("req => /saveImgs");
    res.send(200, req.files)
})

routes.post("/addProduct", (req, res) => {
    console.log("req => /addProduct");
    var tempProduct = new something.Products({
        userID: req.body.userID,
        productID: req.body.productID,
        name: req.body.name,
        description: req.body.description,
        startPrice: req.body.startPrice,
        maxBid: req.body.startPrice,
        maxBidUser: "",
        imgsPath: req.body.imgsPath,
    })
    tempProduct.save((err) => {
        if (err) res.send(403)
        res.send(200)
    })
})

module.exports = routes;
