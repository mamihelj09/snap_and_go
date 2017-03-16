import React, { Component } from "react"
import { Link } from "react-router-dom"
import AddProduct from "../components/containers/AddProduct"
import ProfileProductList from "../components/containers/ProfileProductList"
import ProfileMessages from "../components/presentationals/ProfileMessages"

class Profile extends Component {

    render() {
        return (
            <div>
                <Link to="/">Go home</Link>
                <AddProduct />
                <hr />
                <ProfileMessages />
                <h1>My products:</h1>
                <ProfileProductList />
            </div>
        )
    }
}


export default Profile