import React, { Component } from "react"
import { Link } from "react-router-dom"

class ErrorPage extends Component {

    render() {
        return (
            <div className="error">
                <div className="error_box">
                    <h1 className="hidden-xs">Snap'n'NO Go!</h1>
                    <h1 className="hidden-lg hidden-md hidden-sm">NO GO!</h1>
                    <Link to="/">Go Home</Link>
                    <h2>Auction over!</h2>
                    <h3>Product doesn't exist anymore!</h3>
                </div>
            </div>
        )
    }
}

export default ErrorPage