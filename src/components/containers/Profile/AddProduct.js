import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link } from "react-router-dom"
import { fetchUserInfoToken, logout } from "../../../actions/login_action"

class AddProduct extends Component {

    componentDidMount() {
        if (localStorage.getItem("token") && !this.props.user.loggedIn) {
            this.props.fetchUserInfoToken(localStorage.getItem("token"))
        }
    }
    render() {
        return (
            <div>
                {this.props.user.redirectToHome ? <Redirect to="/" /> : <div>
                    {!this.props.user.loggedIn ? <Redirect to="/login" /> :
                        <div>
                            Profile!
                            <button onClick={() => this.props.logout()}>Logout</button>
                            <hr />
                            Name: {this.props.user.user.fullName}
                            <Link to="/addproduct">Add</Link>
                        </div>}
                </div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        logout,
        fetchUserInfoToken,
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(AddProduct)