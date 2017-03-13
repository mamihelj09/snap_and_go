import React, { Component } from "react"
import AddProduct from "../components/containers/AddProduct"
import ProfileProductList from "../components/containers/ProfileProductList"

class Profile extends Component {

    render() {
        return (
            <div>
                <AddProduct />
                <hr />
                <h1>My products:</h1>
                <ProfileProductList />
            </div>
        )
    }
}


export default Profile