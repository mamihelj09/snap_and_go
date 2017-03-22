import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Redirect, Link } from "react-router-dom"
import { login } from "../../../actions/login_action"

class LoginLogic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mail: "",
            pass: "",
        }
    }

    handleMailChange(e) {
        this.setState({ mail: e.target.value })
    }

    handlePassChange(e) {
        this.setState({ pass: e.target.value })
    }

    render() {
        return (
            <div className="log_sign_up">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-12 left">
                            <Link to="/" className="navbar-brand navLogo">Snap'n'Go!<span id="version">ALPHA</span></Link>
                            <h4>Another motivational text to motivate you to log on to my awesome site and earn some $$$</h4>
                        </div>
                        <div className="col-sm-6 col-xs-12 right">
                            {this.props.user.loggedIn ? <Redirect to={"/profile/" + localStorage.getItem("id")} /> :
                                <div className="box">
                                    <h1>LogIn / <Link to="/singup">SignUp</Link></h1> <br />
                                    <input type="text" placeholder="E-mail" onChange={this.handleMailChange.bind(this)} /> <br />
                                    <input type="password" placeholder="Password" onChange={this.handlePassChange.bind(this)} /> <br />
                                    <button onClick={() => this.props.login(this.state.mail, this.state.pass)}>Login</button>
                                </div>}
                        </div>
                    </div>
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
        login: login,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginLogic)