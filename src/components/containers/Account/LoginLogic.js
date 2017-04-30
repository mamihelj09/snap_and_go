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
            <div >
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
                                    <label className="login-field-icon fui-user hidden-xs"></label>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control login-field" placeholder="Enter Password" onChange={this.handlePassChange.bind(this)} />
                                    <label className="login-field-icon fui-lock hidden-xs"></label>
                                </div>

                                <button className="btn btn-primary btn-lg btn-block" onClick={() => this.props.login(this.state.mail, this.state.pass)}>Log in</button>

                                {this.props.user.displayErrMsg ?
                                    <h3 style={{ textAlign: "center", color: "#E74C3C" }}><strong>Failed to log in!</strong></h3> : ""}
                            </div>
                        </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(LoginLogic)