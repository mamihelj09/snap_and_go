const express = require('express')
const path = require('path')
const something = require("./mongodb.js")
const bodyParser = require("body-parser")
const multer = require("multer")
const fs = require("fs")

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

routes.post("/removeMessage", (req, res) => {
    console.log("/removeMessage")
    something.Users.findOneAndUpdate({ id: req.body.id }, {
        $pull: {
            "messages": {
                productID: req.body.productID
            }
        }
    }, (err) => {
        if (!err) res.send(200)
        else console.log(err)
    })
})

routes.post("/fetchOneProduct", (req, res) => {
    console.log("req => /fetchOne");
    something.Products.findOne({ productID: req.body.id }, (err, product) => {
        if (product) res.send(200, product)
        else res.send(403)
    })
})

routes.post("/fetchAllProducts", (req, res) => {
    console.log("req => /fetchAllProducts");
    something.Products.find({}, (err, products) => {
        if (products) res.send(200, products)
        else res.send(403)
    })
})

routes.post("/fetchMyProducts", (req, res) => {
    console.log("req => /fetchMyProducts");
    something.Products.find({ sellerID: req.body.id }, (err, products) => {
        if (products) res.send(200, products)
        else res.send(403)
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
        sellerID: req.body.sellerID,
        productID: req.body.productID,
        name: req.body.name,
        description: req.body.description,
        startPrice: req.body.startPrice,
        maxBid: req.body.startPrice,
        maxBidUser: "",
        timeCreated: new Date(),
        imgsPath: req.body.imgsPath,
    })
    tempProduct.save((err, obj) => {
        var imgsPath = obj.imgsPath
        setTimeout(() => {
            something.Users.findOne({ id: obj.sellerID }, (err, seller) => {
                if (seller && !err) {
                    something.Products.findOne({ productID: obj.productID }, (err, product) => {
                        if (product && !err) {
                            something.Users.findOne({ id: product.maxBidUser }, (err, user) => {
                                if (user && !err) {
                                    user.update({
                                        $push: {
                                            "messages": {
                                                id: product.sellerID,
                                                mail: seller.email,
                                                productID: product.productID,
                                                productName: product.name,
                                                price: product.maxBid,
                                                type: "BOUGHT",
                                            }
                                        }
                                    }, (err) => {
                                        if (!err) console.log("proslo user")
                                        else console.log("nije prolso", err)
                                    })
                                    seller.update({
                                        $push: {
                                            "messages": {
                                                id: user.id,
                                                mail: user.email,
                                                productID: product.productID,
                                                productName: product.name,
                                                price: product.maxBid,
                                                type: "SOLD",
                                            }
                                        }
                                    }, (err) => {
                                        if (!err) console.log("proso seller")
                                        else console.log("nije proso", err)
                                    })
                                } else console.log(err)
                            })
                            obj.remove((err) => {
                                fs.exists(imgsPath[0], (exists) => {
                                    if (exists && !err) {
                                        for (var i = 0; i < imgsPath.length; i++) {
                                            fs.unlink(imgsPath[i])
                                        }
                                        console.log("Izbrisano...")
                                    } else console.log(err)
                                })
                            })
                        } else console.log(err)
                    })
                } else console.log(err)
            })
        }, 1000 * 60 * 10) //1000 => sec
        if (err) res.send(403)
        res.send(200)
    })
})

module.exports = routes;
