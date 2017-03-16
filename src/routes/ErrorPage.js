import React, { Component } from "react"
import { Link } from "react-router-dom"

class ErrorPage extends Component {

    render() {
        return (
            <div>
                <Link to="/">Go home</Link>
                <h1>Auction over!</h1>
                <h3>Product doesn't exist anymore!</h3>
            </div>
        )
    }
}

export default ErrorPage