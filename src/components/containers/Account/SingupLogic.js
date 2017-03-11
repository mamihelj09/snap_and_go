import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect } from "react-router-dom"
import { fetchUserEmailSignup } from "../../../actions/login_action"

class SignupLogic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            pass: "",
            fullName: "",
            place: "",
        }
    }

    handleMailChange(e) {
        this.setState({ email: e.target.value })
    }

    handlePassChange(e) {
        this.setState({ pass: e.target.value })
    }

    handleFNameChange(e) {
        this.setState({ fullName: e.target.value })
    }

    handlePlaceChange(e) {
        this.setState({ place: e.target.value })
    }

    render() {
        return (
            <div>
                {this.props.user.loggedIn ? <Redirect to={"/profile/" + localStorage.getItem("id")} /> : <div>
                    Signup! <hr />
                    <input onChange={this.handleMailChange.bind(this)} type="text" placeholder="email" /><br />
                    <input onChange={this.handlePassChange.bind(this)} type="text" placeholder="pass" /><br />
                    <input onChange={this.handleFNameChange.bind(this)} type="text" placeholder="full name" /><br />
                    <input onChange={this.handlePlaceChange.bind(this)} type="text" placeholder="place" /><br />
                    <button onClick={() => this.props.fetchUserEmailSignup(this.state)}>Signup</button>
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
        fetchUserEmailSignup: fetchUserEmailSignup,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SignupLogic)
