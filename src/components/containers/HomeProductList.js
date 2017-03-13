import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { unmountRedirectToProduct, redirectToProduct, fetchAllProducts, fetchMyProducts } from "../../actions/products_actions"

class HomeProductList extends Component {

    componentDidMount() {
        // if (this.props.products.allProducts.length < 1) 
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
                                    <div onClick={() => this.props.redirectToProduct(item.productID)} key={i} className="col-sm-4 border">
                                        <img role="presentation" src={"../" + item.imgsPath[0]} />
                                        <h1>{item.name}</h1>
                                        <h4>{item.description}</h4>
                                        <h4>Current price: ${item.maxBid}</h4>
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