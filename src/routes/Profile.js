import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link } from "react-router-dom"
import { fetchUserInfoToken, logout } from "../actions/login_action"
import { fetchMyProducts } from "../actions/products_actions"


class Profile extends Component {

    componentDidMount() {
        if (localStorage.getItem("token") && !this.props.user.loggedIn) {
            this.props.fetchUserInfoToken(localStorage.getItem("token"))
        }
        if (this.props.products.myProducts.length < 1) {
            this.props.fetchMyProducts(this.props.user.user.id)
        }
    }

    render() {
        return (
            <div>
                {this.props.user.redirectToHome ? <Redirect to="/" /> : <div>
                    {!this.props.user.loggedIn ? <Redirect to="/login" /> :
                        <div>
                            Profile! <hr />
                            Name: {this.props.user.user.fullName}
                            <Link to="/addproduct">Add</Link>
                            <br /><button onClick={() => this.props.logout()}>Logout</button>
                        </div>}
                </div>}
                <hr />
                <h1>My products:</h1>
                {this.props.products.myProducts.length > 0 ?
                    <div>
                        {this.props.products.myProducts.map((item, i) => (
                            <div key={i} className="col-sm-3 border">
                                {/*{console.log(item.imgsPath[0])}*/}
                                <img src={"../" + item.imgsPath[0]} />
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
        fetchUserInfoToken: fetchUserInfoToken,
        logout: logout,
        fetchMyProducts: fetchMyProducts,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile)