import React, { Component } from "react"
import HomeProductList from "../components/containers/HomeProductList"
import HomeNav from "../components/presentationals/nav/HomeNav"

class Home extends Component {

    render() {
        return (
            <div>
                <HomeNav />
                <div className="infoText hidden-sm hidden-xs">
                    <span>Here you can buy best products for the best price!</span><br />
                    <h3>Every auction last's exactly 1 hour, so hurry up!</h3>
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