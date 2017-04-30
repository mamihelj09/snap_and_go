import React, { Component } from "react"
import $ from "jquery"
import ProfileDisplay from "../components/containers/ProfileDisplay"
import ProfileProductList from "../components/containers/ProfileProductList"
import ProfileMessages from "../components/containers/ProfileMessages"
import SimpleNav from "../components/presentationals/nav/SimpleNav"

class Profile extends Component {

    handleClick() {
        $("#products").toggleClass("hide")
        $("#messages").toggleClass("hide")
        $("#products_btn").toggleClass("selected")
        $("#messages_btn").toggleClass("selected")
    }

    render() {
        return (
            <div className="profile">
                <SimpleNav />
                <div className="container">
                    <ProfileDisplay />
                    <div className="item_list">
                        <div className="selector">
                            <span id="products_btn" onClick={() => this.handleClick()} className="selected">My products</span>
                            <span id="messages_btn" onClick={() => this.handleClick()}>Messages</span>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div id="products" className="">
                            <ProfileProductList />
                        </div>
                        <div id="messages" className="hide">
                            <ProfileMessages />
                        </div>
                    </div>


                </div>

                {/*<div className="container">
                    <div className="row">
                        <div id="products" className="col-xs-6 profile_bar active" onClick={() => this.handleClick()}>Products</div>
                        <div id="messages" className="col-xs-6 profile_bar" onClick={() => this.handleClick()}>Messages</div>
                        <div id="display_products" className="col-sm-12">
                            <div className="row main">
                                <ProfileProductList />
                            </div>
                        </div>
                        <div id="display_messages" className="col-sm-4 hidden">
                            <ProfileMessages />
                        </div>
                    </div>
                </div>*/}
            </div>
        )
    }
}


export default Profile