import React from "react"
import $ from "jquery"
import { Link } from "react-router-dom"

class HomeNav extends React.Component {

    toggleMenu() {
        $("#menuList").toggleClass("hidden")
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                        <Link to="/" className="navbar-brand nav_logo">Snap'n'Go!</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse-01">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/singup">SignUp</Link></li>
                            <li><Link to="/login">LogIn</Link></li>
                            <li>
                                {localStorage.getItem("id") ?
                                    <Link to={"/profile/" + localStorage.getItem("id")}
                                    >Profile</Link> :
                                    <Link to="/login">Profile</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        )
    }
}

export default HomeNav