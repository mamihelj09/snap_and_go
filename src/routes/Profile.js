import React, { Component } from "react"
import AddProduct from "../components/containers/Profile/AddProduct"
import ProductPreview from "../components/containers/Profile/ProductPreview"

class Profile extends Component {

    render() {
        return (
            <div>
                <AddProduct />
                <hr />
                <ProductPreview />
            </div>
        )
    }
}


export default Profile