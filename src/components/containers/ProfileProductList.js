import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { unmountRedirectToProduct, redirectToProduct, fetchMyProducts } from "../../actions/products_actions"
import ProductListItem from "../presentationals/ProductListItem"

class ProfileProductList extends Component {

    componentDidMount() {
        if (this.props.products.myProducts.length < 1 && localStorage.getItem("id")) {
            this.props.fetchMyProducts(localStorage.getItem("id"));
        }
    }


    render() {
        return (
            <div>
                {this.props.products.redirectToProduct ? <Redirect to={"/product/" + this.props.products.idToRedirect} /> :
                    <div>
                        {this.props.products.myProducts.length > 0 ?
                            <div>
                                {this.props.products.myProducts.map((item, i) => (
                                    <div onClick={() => this.props.redirectToProduct(item.productID)} key={i} className="col-sm-5 item">
                                        <ProductListItem
                                            img={"../" + item.imgsPath[0]}
                                            name={item.name}
                                            description={item.description}
                                            maxBid={item.maxBid}
                                        />
                                    </div>
                                ))}
                            </div> : <div>Empty...</div>
                        }
                    </div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        products: state.products
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        unmountRedirectToProduct,
        redirectToProduct,
        fetchMyProducts,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileProductList)