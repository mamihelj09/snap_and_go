import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link } from "react-router-dom"
import { fetchUserInfoToken, } from "../../actions/login_action"

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
                        <div className="jumbotron">
                            <div className="row">
                                <h2>{this.props.user.user.fullName}</h2>
                                <h4>{this.props.user.user.place}</h4>
                                <span>{this.props.user.user.email}</span>
                                <Link to="/addproduct" className="btn right btn-primary">Add Products</Link>
                            </div>

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
        fetchUserInfoToken,
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(ProfileDisplay)