const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const router = require("./back/routes")
const app = express()
const port = process.env.PORT || 9000

app.use(express.static("./build"))

app.use("/authentication", router)
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./build", "index.html"))
})

app.listen(port, () => {
    console.log("Server is on port ", port);
})