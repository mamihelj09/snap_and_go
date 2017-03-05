import React, { Component } from "react"
import { Link } from "react-router-dom"

class Home extends Component {

    // componentDidMount() {
    //     fetch("/authentication", {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //     })
    // }

    render() {
        return (
            <div>
                <h1 className="logo">Snap'n'Go</h1>
                <Link to="/login" >Login</Link><br />
                <Link to="/singup" >Signup</Link><br />
                <Link to="/profile/1" >Profile</Link>
            </div>
        )
    }
}

export default Home