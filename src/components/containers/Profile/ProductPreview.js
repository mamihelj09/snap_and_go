import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
// import { fetchUserInfoToken, logout } from "../actions/login_action"
import { fetchMyProducts } from "../../../actions/products_actions"

class ProductPreview extends Component {

    componentDidMount() {
        if (this.props.products.myProducts.length < 1) {
            this.props.fetchMyProducts(this.props.user.user.id)
        }
    }

    render() {
        return (
            <div>
                <h1>My products:</h1>
                {this.props.products.myProducts.length > 0 ?
                    <div>
                        {this.props.products.myProducts.map((item, i) => (
                            <div key={i} className="col-sm-3 border">
                                <img role="presentation" src={"../" + item.imgsPath[0]} />
                                <h1>{item.name}</h1>
                                <h4>{item.description}</h4>
                                <h4>${item.startPrice}</h4>
                            </div>
                        ))}
                    </div> : <div>Empty...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        products: state.products,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchMyProducts: fetchMyProducts,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductPreview)