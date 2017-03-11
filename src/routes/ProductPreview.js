import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { unmountRedirectToProduct, fetchOneProductToDisplay, addBid, recivedNewBits } from "../actions/products_actions"
import { Redirect } from "react-router-dom"

const io = require("socket.io-client")
// const socket = io.connect("http://localhost:9000/")
const socket = io.connect("http://192.168.5.175:9000")


class ProductPreview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedImg: 0,
            bid: "",
        }
    }

    componentDidMount() {
        socket.on("getBids", (data) => {
            console.log("aaaa", data);
            if (data.productID === this.props.products.oneProduct.productID)
                this.props.recivedNewBits(data.bid, data.userID)
        })

        this.props.fetchOneProductToDisplay(this.props.products.idToRedirect)


    }

    componentWillUnmount() {
        this.props.unmountRedirectToProduct();
    }

    selectImg(i) {
        this.setState({ selectedImg: i });
    }

    handleChange(e) {
        this.setState({ bid: e.target.value });
    }

    render() {
        return (
            <div>
                {!this.props.products.redirectToProduct ? <Redirect to="/" /> :
                    <div className="row">
                        <button onClick={() => this.props.unmountRedirectToProduct()}>To home</button>
                        <hr />
                        <div className="col-sm-6">
                            {!this.props.products.oneProduct.imgsPath ? <div></div> :
                                <div>
                                    <img role="presentation" className="preview" src={"../" + this.props.products.oneProduct.imgsPath[this.state.selectedImg]} />
                                    <hr />
                                    {this.props.products.oneProduct.imgsPath.map((item, i) => (
                                        <img role="presentation" onClick={() => this.selectImg(i)} className="smallImg" src={"../" + item} key={i} />
                                    ))}
                                </div>}
                            <h1>{this.props.products.oneProduct.name}</h1>
                            <h4>{this.props.products.oneProduct.description}</h4>
                            <h4>${this.props.products.oneProduct.startPrice}</h4>
                        </div>
                        <div className="col-sm-6">
                            <h3>Item starts at: ${this.props.products.oneProduct.startPrice}</h3> <hr />
                            <h4>Current max bid: {this.props.products.oneProduct.maxBid}$
                                {this.props.products.oneProduct.maxBidUser === localStorage.getItem("id") ? <span>Your bid</span> : ""}</h4>
                            <input type="number" onChange={this.handleChange.bind(this)} />
                            <button onClick={() => this.props.addBid(this.state.bid, this.props.products.oneProduct.productID, localStorage.getItem("id"))}>Bid</button>
                            <button onClick={() => this.props.addBid(++this.props.products.oneProduct.maxBid, this.props.products.oneProduct.productID, localStorage.getItem("id"))}>BidUp</button>
                        </div>
                    </div>
                }
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
        unmountRedirectToProduct,
        fetchOneProductToDisplay,
        addBid,
        recivedNewBits,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductPreview)