const data = require("./PRIVATE_DATA")
const mongoose = require('mongoose');

const userSchema = {
    email: String,
    pass: String,
    key: String,
    id: String,
    fullName: String,
    place: String,
    messages: [],
};

const productSchema = {
    sellerID: String,
    productID: String,
    name: String,
    description: String,
    startPrice: String,
    maxBid: String,
    maxBidUser: String,
    timeCreated: String,
    imgsPath: [],
}

Users = mongoose.model('Users', userSchema);
Products = mongoose.model("Products", productSchema)

mongoose.Promise = global.Promise;
mongoose.connect(data.MONGO_URL, function (err) {
    if (err) console.log(err);
    else console.log("Mongodb connected successfully!\n");
});

module.exports = { Users, Products };