import React, { Component } from "react"
import HomeProductList from "../components/containers/HomeProductList"
import HomeNav from "../components/presentationals/nav/HomeNav"
import Search from "../components/containers/Search"

class Home extends Component {

    render() {
        return (
            <div>
                <HomeNav />
                <div className="infoText ">
                    <Search />
                </div>
                <div className="container main">
                    <h1>Some Neat Products</h1>
                    <hr />
                    <div className="row">
                        <HomeProductList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home