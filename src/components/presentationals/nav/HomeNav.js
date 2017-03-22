import React from "react"
import $ from "jquery"
import { Link } from "react-router-dom"

class HomeNav extends React.Component {

    toggleMenu() {
        $("#menuList").toggleClass("hidden")
    }

    render() {
        return (
            <div>
                <div className="nav">
                    <Link to="/" className="navbar-brand navLogo">Snap'n'Go!<span id="version">ALPHA</span></Link>
                    <Link to="/login" className="col-lg-1 hidden-sm hidden-xs">Login</Link>
                    <Link to="/singup" className="col-lg-1 hidden-sm hidden-xs">Signup</Link>
                    {localStorage.getItem("id") ?
                        <Link to={"/profile/" + localStorage.getItem("id")}
                            className="col-lg-1 hidden-sm hidden-xs">Profile</Link> :
                        <Link to="/login" className="col-lg-1 hidden-sm hidden-xs">Profile</Link>
                    }
                    <i className="material-icons hidden-lg hidden-md" onClick={this.toggleMenu}>menu</i>
                </div>
                <div id="menuList" className="menu hidden">
                    <Link to="/login" >Login</Link>
                    <Link to="/singup" >Signup</Link>
                    {localStorage.getItem("id") ?
                        <Link to={"/profile/" + localStorage.getItem("id")}
                        >Profile</Link> :
                        <Link to="/login" >Profile</Link>
                    }
                </div>
            </div>
        )
    }
}

export default HomeNav