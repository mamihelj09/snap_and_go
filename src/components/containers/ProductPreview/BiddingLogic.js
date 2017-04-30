import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addBid, recivedNewBits, itemHasExpired } from "../../../actions/products_actions"
import Timer from "./Timer"

const io = require("socket.io-client")
const socket = io.connect("http://localhost:9000/")
// const socket = io.connect("http://192.168.5.167:9000")
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
                this.props.recivedNewBits(data.bid, data.userID, data.timeCreated)
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
        date.setMinutes(date.getMinutes() + 60)
        return (
            <div>
                {this.props.products.oneProduct.name ?
                    <h2>{this.props.products.oneProduct.name.charAt(0).toUpperCase() + this.props.products.oneProduct.name.slice(1)}</h2> : ""}
                <p>{this.props.products.oneProduct.description}</p>
                <h4>Item starts at: ${this.props.products.oneProduct.startPrice}</h4>
                <hr />
                <Timer start={date.getTime()} />
                <h4>Current max bid: {this.props.products.oneProduct.maxBid}$
                    {this.props.products.oneProduct.maxBidUser === localStorage.getItem("id") ? <span>Your bid</span> : ""}</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <input className="form-control input-sm" type="number" onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-primary btn-block" onClick={() => this.props.addBid(this.state.bid, this.props.products.oneProduct.productID, localStorage.getItem("id"), this.props.products.oneProduct.maxBid)}>Bid</button>
                    </div>
                    <div className="col-sm-3">
                        <button className="btn btn-warning btn-block" onClick={() => this.props.addBid(++this.props.products.oneProduct.maxBid, this.props.products.oneProduct.productID, localStorage.getItem("id"), this.props.products.oneProduct.maxBid)}>BidUp</button>
                    </div>
                </div>
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