import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addBid, recivedNewBits, itemHasExpired } from "../../../actions/products_actions"
import Timer from "./Timer"

const io = require("socket.io-client")
// const socket = io.connect("http://localhost:9000/")
const socket = io.connect("http://192.168.5.175:9000")
// const socket = io.connect("http://10.15.19.171:9000")


class BiddingLogic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bid: "",
        }
    }

    componentDidMount() {
        socket.on("getBids", (data) => {
            if (data.productID === this.props.products.oneProduct.productID)
                this.props.recivedNewBits(data.bid, data.sellerID, data.timeCreated)
        })
        socket.on("expired", (data) => {
            console.log("did mount")
            if (data.productID === this.props.products.oneProduct.productID) {
                console.log("ode", data.productID)
                this.props.itemHasExpired()
            }
        })
    }

    handleChange(e) {
        this.setState({ bid: e.target.value });
    }

    render() {
        var date = new Date(this.props.products.oneProduct.timeCreated)
        date.setMinutes(date.getMinutes() + 1)
        return (
            <div>
                <Timer start={date.getTime()} />
                <h3>Item starts at: ${this.props.products.oneProduct.startPrice}</h3> <hr />
                <h4>Current max bid: {this.props.products.oneProduct.maxBid}$
                                {this.props.products.oneProduct.maxBidUser === localStorage.getItem("id") ? <span>Your bid</span> : ""}</h4>
                <input type="number" onChange={this.handleChange.bind(this)} />
                <button onClick={() => this.props.addBid(this.state.bid, this.props.products.oneProduct.productID, localStorage.getItem("id"))}>Bid</button>
                <button onClick={() => this.props.addBid(++this.props.products.oneProduct.maxBid, this.props.products.oneProduct.productID, localStorage.getItem("id"))}>BidUp</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addBid,
        recivedNewBits,
        itemHasExpired,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BiddingLogic)