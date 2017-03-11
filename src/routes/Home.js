import React, { Component } from "react"
import { Link } from "react-router-dom"
import ProductPreview from "../components/containers/Home/ProductPreview"

class Home extends Component {

    render() {
        return (
            <div>
                <h1 className="logo">Snap'n'Go</h1>
                <Link to="/login" >Login</Link><br />
                <Link to="/singup" >Signup</Link><br />
                {localStorage.getItem("id") ?
                    <Link to={"/profile/" + localStorage.getItem("id")} >Profile</Link> :
                    <Link to="/login" >Profile</Link>
                }
                <hr />
                <ProductPreview />
            </div>
        )
    }
}

export default Home