import React, { Component } from "react"
import AddProduct from "../components/containers/AddProduct"
import ProductPreview from "../components/containers/ProductPreview"

class Profile extends Component {

    render() {
        return (
            <div>
                <AddProduct />
                <hr />
                <h1>My products:</h1>
                <ProductPreview />
            </div>
        )
    }
}


export default Profile