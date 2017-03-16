import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { unmountRedirectToProduct } from "../actions/products_actions"
import { Redirect, Link } from "react-router-dom"


import MainProductPreview from "../components/containers/ProductPreview/MainProductPreview"
import BiddingLogic from "../components/containers/ProductPreview/BiddingLogic"

class ProductPreview extends Component {

    componentWillUnmount() {
        this.props.unmountRedirectToProduct()
    }

    render() {
        return (
            <div>
                {this.props.products.redirectToError ? <Redirect to="/error" /> : <div>
                    {!this.props.products.redirectToProduct ? <Redirect to="/" /> :
                        <div className="row">
                            <Link to="/">Go home</Link>
                            <hr />
                            <div className="col-sm-6">
                                <MainProductPreview />
                            </div>
                            <div className="col-sm-6">
                                <BiddingLogic />
                            </div>
                        </div>
                    }
                </div>}
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
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductPreview)