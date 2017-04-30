import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link } from "react-router-dom"
import { fetchUserEmailSignup } from "../../../actions/login_action"

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
            <div>
                {this.props.user.loggedIn ? <Redirect to={"/profile/" + localStorage.getItem("id")} /> :
                    <div className="login_main">
                        <div className="login_icon hidden-xs">
                            <img src="cam_ico.png" alt="" />
                            <Link to="/" >
                                <h4>Snap'n'Go!</h4>
                            </Link>
                        </div>
                        <div className="login_screen">
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="text" className="form-control login-field" placeholder="Enter Email" onChange={this.handleMailChange.bind(this)} />
                                    <label className="login-field-icon fui-mail hidden-xs"></label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control login-field" placeholder="Enter Password" onChange={this.handlePassChange.bind(this)} />
                                    <label className="login-field-icon fui-lock hidden-xs"></label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control login-field" placeholder="Enter First name" onChange={this.handleFirstNameChange.bind(this)} />
                                    <label className="login-field-icon fui-user hidden-xs"></label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control login-field" placeholder="Enter Last name" onChange={this.handleLastNameChange.bind(this)} />
                                    <label className="login-field-icon fui-user hidden-xs"></label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control login-field" placeholder="Enter City" onChange={this.handleCityChange.bind(this)} />
                                    <label className="login-field-icon fui-location hidden-xs"></label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control login-field" placeholder="Enter State" onChange={this.handleStateChange.bind(this)} />
                                    <label className="login-field-icon fui-location hidden-xs"></label>
                                </div>
                                <button className="btn btn-primary btn-lg btn-block" onClick={() => this.props.fetchUserEmailSignup(this.state)}>Sign Up</button>

                                {this.props.user.displayErrMsg ?
                                    <h3 style={{ textAlign: "center", color: "#E74C3C" }}><strong>Failed to sign up!</strong></h3> : ""}
                            </div>
                        </div>
                    </div>}
            </div>
        )
        {/*<div className="log_sign_up">
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
                                        <div className="hidden-xs hidden-sm">
                                            <input className="smallInput" onChange={this.handleFirstNameChange.bind(this)} type="text" placeholder="First name" />
                                            <input className="smallInput" onChange={this.handleLastNameChange.bind(this)} type="text" placeholder="Last name" />
                                        </div>
                                        <div className=" hidden-md hidden-lg">
                                            <input className="smallInput" onChange={this.handleFirstNameChange.bind(this)} type="text" placeholder="First" />
                                            <input className="smallInput" onChange={this.handleLastNameChange.bind(this)} type="text" placeholder="Last" />
                                        </div>
                                    </div><br />
                                    <div className="doubleInput">
                                        <input className="smallInput" onChange={this.handleCityChange.bind(this)} type="text" placeholder="City" />
                                        <input className="smallInput" onChange={this.handleStateChange.bind(this)} type="text" placeholder="State" /><br />
                                    </div>
                                    <button onClick={() => this.props.fetchUserEmailSignup(this.state)}>Signup</button>
                                    {this.props.user.displayErrMsg ? <h3 className="error_msg"><strong>Email is already in database</strong></h3> : ""}
                                </div>
                            </div>
                        </div>}
                </div>
            </div>*/}
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
