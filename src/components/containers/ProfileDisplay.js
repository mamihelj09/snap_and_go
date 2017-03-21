import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link } from "react-router-dom"
import { fetchUserInfoToken, logout } from "../../actions/login_action"

class ProfileDisplay extends Component {

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
                            <h2>{this.props.user.user.fullName}</h2>
                            <h4>{this.props.user.user.place}</h4>
                            <h5>{this.props.user.user.email}</h5>
                            <button onClick={() => this.props.logout()}>LogOut</button> <br />
                            <Link to="/addproduct"><i className="material-icons add_btn">add</i></Link>
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


export default connect(mapStateToProps, matchDispatchToProps)(ProfileDisplay)