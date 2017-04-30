import React, { Component } from "react"
import { Link } from "react-router-dom"

class ErrorPage extends Component {

    render() {
        return (
            <div className="error">
                <h1>Snap'n'NO Go!</h1>
                <h5>Sorry auction is over...More luck next time!</h5> <br/>
                <Link to="/" className="btn btn-warning btn-wide">Go home</Link>
            </div>
        )
    }
}

export default ErrorPage