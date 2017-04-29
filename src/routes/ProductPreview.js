import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { unmountRedirectToProduct } from "../actions/products_actions"
import { Redirect } from "react-router-dom"

import SimpleNav from "../components/presentationals/nav/SimpleNav"
import MainProductPreview from "../components/containers/ProductPreview/MainProductPreview"
import BiddingLogic from "../components/containers/ProductPreview/BiddingLogic"

class ProductPreview extends Component {

    componentWillUnmount() {
        this.props.unmountRedirectToProduct()
    }

    render() {
        return (
            <div>
                <SimpleNav />
                {this.props.products.redirectToError ? <Redirect to="/error" /> :
                    <div className="container">
                        {!this.props.products.redirectToProduct ? <Redirect to="/" /> :
                            <div className="row">
                                <br />
                                <div className="col-sm-6 col-xs-12" style={{ marginBottom: "15px" }}>
                                    <MainProductPreview />
                                </div>
                                <div className="col-sm-6 col-xs-12">
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