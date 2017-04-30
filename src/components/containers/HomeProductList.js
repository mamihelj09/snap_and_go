import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { unmountRedirectToProduct, redirectToProduct, fetchAllProducts, fetchMyProducts } from "../../actions/products_actions"
import ProductListItem from "../presentationals/ProductListItem"

class HomeProductList extends Component {

    componentWillMount() {
        this.props.fetchAllProducts();
    }


    render() {
        return (
            <div>
                {this.props.products.redirectToProduct ? <Redirect to={"/product/" + this.props.products.idToRedirect} /> :
                    <div>
                        {this.props.products.allProducts.length > 0 ?
                            <div>
                                {this.props.products.allProducts.map((item, i) => (
                                    <div onClick={() => this.props.redirectToProduct(item.productID)} key={i} className="col-xs-12 col-sm-6 col-md-4">
                                        <ProductListItem
                                            img={item.imgsPath[0]}
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
        fetchAllProducts,
        unmountRedirectToProduct,
        redirectToProduct,
        fetchMyProducts,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeProductList)