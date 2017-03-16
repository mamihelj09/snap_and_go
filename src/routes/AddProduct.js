import React, { Component } from "react"
import { Link } from "react-router-dom"
import AddProductLogic from "../components/containers/AddProductLogic"

class AddProduct extends Component {

    render() {
        return (
            <div>
                <Link to="/">Go home</Link>
                <AddProductLogic />
            </div>
        )
    }
}

export default AddProduct