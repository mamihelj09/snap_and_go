import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link } from "react-router-dom"
import { fetchUserEmailSignup } from "../../../actions/login_action"
// import SimpleNav from "../../presentationals/nav/SimpleNav"

class SignupLogic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            pass: "",
            firstName: "",
            lastName: "",
            city: "",
            state: "",
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

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value })
    } handleLastNameChange(e) {
        this.setState({ lastName: e.target.value })
    } handleCityChange(e) {
        this.setState({ city: e.target.value })
    } handleStateChange(e) {
        this.setState({ state: e.target.value })
    }

    handleFNameChange(e) {
        this.setState({ fullName: e.target.value })
    }

    handlePlaceChange(e) {
        this.setState({ place: e.target.value })
    }

    render() {
        return (
            <div className="log_sign_up">
                <div className="container">
                    {this.props.user.loggedIn ? <Redirect to={"/profile/" + localStorage.getItem("id")} /> :
                        <div className="row">
                            <div className="col-sm-6 col-xs-12 left">
                                <Link to="/" className="navbar-brand navLogo">Snap'n'Go!<span id="version">ALPHA</span></Link>
                                <h4>Some motivational text to motivate you to sign up in and use my awesome site!!!</h4>
                            </div>
                            <div className="col-sm-6 col-xs-12 right">
                                <div className="box">
                                    <h1><Link to="/login">LogIn</Link> / SignUp</h1> <br />
                                    <input onChange={this.handleMailChange.bind(this)} type="text" placeholder="E-mail" /><br />
                                    <input onChange={this.handlePassChange.bind(this)} type="text" placeholder="Password" /><br />
                                    <div className="doubleInput">
                                        <div className="hidden-xs">
                                            <input className="smallInput" onChange={this.handleFirstNameChange.bind(this)} type="text" placeholder="First name" />
                                            <input className="smallInput" onChange={this.handleLastNameChange.bind(this)} type="text" placeholder="Last name" />
                                        </div>
                                        <div className="hidden-sm hidden-md hidden-lg">
                                            <input className="smallInput" onChange={this.handleFirstNameChange.bind(this)} type="text" placeholder="First" />
                                            <input className="smallInput" onChange={this.handleLastNameChange.bind(this)} type="text" placeholder="Last" />
                                        </div>
                                    </div><br />
                                    <div className="doubleInput">
                                        <input className="smallInput" onChange={this.handleCityChange.bind(this)} type="text" placeholder="City" />
                                        <input className="smallInput" onChange={this.handleStateChange.bind(this)} type="text" placeholder="State" /><br />
                                    </div>
                                    <button onClick={() => this.props.fetchUserEmailSignup(this.state)}>Signup</button>
                                </div>
                            </div>
                        </div>}
                </div>
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
