import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { logout } from "../../../actions/login_action"



class ProductPreviewNav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand nav_logo">Snap'n'Go!</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a onClick={() => this.props.logout()}>LogOut</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        logout,
    }, dispatch)
}


export default connect(null, matchDispatchToProps)(ProductPreviewNav)