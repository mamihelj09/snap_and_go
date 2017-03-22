import React, { Component } from "react"
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
                        {/*mobile prikaz*/}
                        <div className="col-xs-12 col-sm-6 hidden-md hidden-lg profile_info">
                            <ProfileDisplay />
                            <ProfileMessages />
                        </div>
                        <div className="col-xs-12 col-sm-6 hidden-md hidden-lg">
                            <h2>My products:</h2>
                            <div className="row main">
                                <ProfileProductList />
                            </div>
                        </div>
                        {/*web prikaz*/}
                        <div className="col-sm-8 hidden-sm hidden-xs">
                            <h2>My products:</h2>
                            <div className="row main">
                                <ProfileProductList />
                            </div>
                        </div>
                        <div className="col-sm-4 hidden-sm hidden-xs profile_info">
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