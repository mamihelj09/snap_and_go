import React, { Component } from "react"
import AddProductLogic from "../components/containers/AddProductLogic"
import SimpleNav from "../components/presentationals/nav/SimpleNav"

class AddProduct extends Component {

    render() {
        return (
            <div className="add_product">
                <SimpleNav />
                <AddProductLogic />
            </div>
        )
    }
}

export default AddProduct