import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchAllProducts } from "../actions/products_actions"

class Home extends Component {

    componentDidMount() {
        if (this.props.products.allProducts.length < 1) {
            this.props.fetchAllProducts();
        }
    }

    render() {
        return (
            <div>
                <h1 className="logo">Snap'n'Go</h1>
                <Link to="/login" >Login</Link><br />
                <Link to="/singup" >Signup</Link><br />
                {localStorage.getItem("id") ?
                    <Link to={"/profile/" + localStorage.getItem("id")} >Profile</Link> :
                    <Link to="/login" >Profile</Link>
                }
                <hr />
                <div>
                    {this.props.products.allProducts.length > 0 ?
                        <div>
                            {this.props.products.allProducts.map((item, i) => (
                                <div key={i} className="col-sm-3 border">
                                    <img src={item.imgsPath[0]} />
                                    <h1>{item.name}</h1>
                                    <h4>{item.description}</h4>
                                    <h4>${item.startPrice}</h4>
                                </div>
                            ))}
                        </div> : <div>Empty...</div>
                    }
                </div>
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
        fetchAllProducts: fetchAllProducts,
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Home)