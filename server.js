const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const something = require("./back/mongodb.js")
const app = express()
const server = require('http').createServer(app)
const io = require("socket.io")(server);

const port = process.env.PORT || 9000

const authRoutes = require("./back/authRoutes")
const uploadRoutes = require("./back/productRoutes")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("./build"))
app.use(express.static(path.join(__dirname)));


app.use("/authentication", authRoutes)
app.use("/upload", uploadRoutes)
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./build", "index.html"))
})

io.on("connect", (socket) => {
    console.log("Client connected")

    socket.on("makeNewBid", (data) => {
        console.log(data)
        something.Products.findOne({ productID: data.productID }, (err, product) => {
            if (err) console.log("nista", err)
            else {
                if (!product) {
                    console.log("Nema ga vise")
                    socket.emit("expired", { productID: data.productID })
                    socket.broadcast.emit("expired", { productID: data.productID })
                }
                else if (data.bid > product.maxBid) {
                    product.update({ maxBid: data.bid, maxBidUser: data.userID }, (err) => {
                        if (err) console.log("nista", err)
                        else {
                            console.log("emit all");
                            socket.broadcast.emit("getBids", { bid: data.bid, userID: data.userID, productID: data.productID, timeCreated: product.timeCreated })
                        }
                    })
                }
            }
        })
    })

})

server.listen(port, () => {
    console.log("Server is on port ", port);
})