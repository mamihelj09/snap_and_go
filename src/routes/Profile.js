import React, { Component } from "react"
import { Link } from "react-router-dom"
import ProfileDisplay from "../components/containers/ProfileDisplay"
import ProfileProductList from "../components/containers/ProfileProductList"
import ProfileMessages from "../components/containers/ProfileMessages"
import SimpleNav from "../components/presentationals/nav/SimpleNav"

class Profile extends Component {

    render() {
        return (
            <div className="profile">
                <SimpleNav />
                <div className="container">
                    <h1>Profile info</h1>
                    <hr />
                    <div className="row">
                        <div className="col-sm-7 col-xs-12">
                            <h2>My products:</h2>
                            <ProfileProductList />
                        </div>
                        <div className="col-sm-5 col-xs-12 profile_info">
                            <ProfileDisplay />
                            <ProfileMessages />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Profile