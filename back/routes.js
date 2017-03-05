const express = require('express')
const path = require('path')
const something = require("./mongodb.js")
const routes = express.Router()

routes.post("/", (req, res) => {
    something.Users.findOne({ user: "Marko", pass: "123" }, (err, obj) => {
        if (obj) {
            res.json(200, obj)
        } else {
            res.send(403)
        }
    })

})



module.exports = routes;
