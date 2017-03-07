const MONGO_URL = require("./PRIVATE_DATA")
const mongoose = require('mongoose');

const userSchema = {
    email: String,
    pass: String,
    key: String,
    id: String,
    fullName: String,
    place: String
};

const productSchema = {
    userID: String,
    productID: String,
    name: String,
    description: String,
    startPrice: String,
    bids: [],
}

Users = mongoose.model('Users', userSchema);
Products = mongoose.model("Products", productSchema)

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://marko:roleks@ds141128.mlab.com:41128/snapandgo", function (err) {
    if (err) console.log(err);
    else console.log("Mongodb connected successfully!\n");
});

findUser = (user, pass, usr) => {
    usr.findOne({ user: user, pass: pass }, function (err, obj) {
        if (err) {
            console.log(err);
        } else {
            console.log("naso")
            return obj;
        }
    })
}



module.exports = { findUser, Users, Products };