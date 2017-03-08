const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const authRoutes = require("./back/authRoutes")
const uploadRoutes = require("./back/productRoutes")
const app = express()
const port = process.env.PORT || 9000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("./build"))
app.use(express.static(path.join(__dirname)));


app.use("/authentication", authRoutes)
app.use("/upload", uploadRoutes)
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./build", "index.html"))
})

app.listen(port, () => {
    console.log("Server is on port ", port);
})