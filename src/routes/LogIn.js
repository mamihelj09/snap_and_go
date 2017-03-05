import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect } from "react-router-dom"
import { login } from "../actions/login_action"

class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            pass: "",
        }
    }

    handleUserChange(e) {
        this.setState({ user: e.target.value })
    }

    handlePassChange(e) {
        this.setState({ pass: e.target.value })
    }

    render() {
        return (
            <div>
                {this.props.user.loggedIn ? <Redirect to="/profile/1" /> : <div>
                    <input type="text" placeholder="Username" onChange={this.handleUserChange.bind(this)} /><br />
                    <input type="text" placeholder="Password" onChange={this.handlePassChange.bind(this)} /><br />
                    <button onClick={() => this.props.login(this.state.user, this.state.pass)}>Login</button>
                </div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        login: login,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LogIn)