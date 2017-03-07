const express = require('express')
const path = require('path')
const something = require("./mongodb.js")
const bodyParser = require("body-parser")
const uuid = require("node-uuid");

const routes = express.Router()

routes.post("/", (req, res) => {
    something.Users.findOne({ email: req.body.mail, pass: req.body.pass }, (err, obj) => {
        if (obj) {
            console.log("Req => /");
            res.json(200, obj)
        } else {
            res.send(403)
        }
    })

})

routes.post("/token", (req, res) => {
    something.Users.findOne({ key: req.body.token }, (err, obj) => {
        if (obj) {
            console.log("Req => /token");
            res.json(200, obj)
        } else {
            res.send(403)
        }
    })
})

routes.post("/signup", (req, res) => {
    console.log("Req => /signup");
    something.Users.findOne({ email: req.body.newUser.email }, (err, obj) => {
        if (obj) {
            res.send(403)
        } else {
            var newUser = new something.Users({
                email: req.body.newUser.email,
                pass: req.body.newUser.pass,
                key: uuid.v4(),
                id: Date.now(),
                fullName: req.body.newUser.fullName,
                place: req.body.newUser.place,
            })
            newUser.save(function (err) {
                if (err) res.send(403)
                else res.json(200, newUser)
            })
        }
    })
})

module.exports = routes;
