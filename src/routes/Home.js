import React, { Component } from "react"
import HomeProductList from "../components/containers/HomeProductList"
import HomeNav from "../components/presentationals/nav/HomeNav"
import Search from "../components/containers/Search"

class Home extends Component {

    render() {
        return (
            <div className="home">
                <HomeNav />
                <div className="container">
                    <Search />
                    <div className="item_list">
                        <h1>All items!</h1>
                        <hr />
                        <div className="row">
                            <HomeProductList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home