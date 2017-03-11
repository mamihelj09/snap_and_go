import React, { Component } from "react"
import Dropzone from "react-dropzone"
import $ from "jquery"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchUserInfoToken } from "../../actions/login_action"

class AddProductLogic extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            startPrice: "",
            imagePreviewUrl: [],
            data: [],
        }
    }

    componentDidMount() {
        if (localStorage.getItem("token") && !this.props.user.loggedIn) {
            this.props.fetchUserInfoToken(localStorage.getItem("token"))
        }
    }

    async drop(file) {
        var b = this.state.data;
        var stateUrl = this.state.imagePreviewUrl
        if (file.length > 0) {
            for (var i in file) {
                if (b.length < 3) {
                    const a = await fetch(file[i].preview)
                    stateUrl.push(file[i].preview)
                    b.push({ a: a, name: file[i].name })
                    this.setState({ data: b, imagePreviewUrl: stateUrl });
                } else {
                    console.log("Prevec");
                }
            }
        } else {
            const a = await fetch(file[0].preview)
            if (b.length < 3) {
                stateUrl.push(file[i].preview)
                b.push({ a: a, name: file[0].name })
                this.setState({ data: b, imagePreviewUrl: stateUrl });
            } else {
                console.log("Prevec");
            }
        }
    }

    async add() {
        const formData = new FormData()
        if (this.state.data.length > 1) {
            for (var i in this.state.data) {
                if (this.state.data[i]) {
                    const b = await this.state.data[i].a.blob()
                    formData.append("data", b, this.state.data[i].name)
                }
            }
        } else if (this.state.data.length === 1) {
            const b = await this.state.data[0].a.blob()
            formData.append("data", b, this.state.data[0].name)
        }
        await $.ajax({
            url: "/upload/saveImgs",
            method: "POST",
            processData: false,
            contentType: false,
            data: formData,
            success: (data) => {
                var path = [];
                for (var i in data) {
                    if (data[i])
                        path.push(data[i].path)
                }
                fetch("/upload/addProduct", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userID: this.props.user.user.id,
                        productID: this.state.name + Date.now(),
                        name: this.state.name,
                        description: this.state.description,
                        startPrice: this.state.startPrice,
                        imgsPath: path,
                        bids: [],
                    })
                })
            }
        })
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handlePriceChange(e) {
        this.setState({ startPrice: e.target.value });
    }


    render() {
        return (
            <div>
                <div className="row">
                    <h1>Add Product</h1> <hr />
                    <div className="col-sm-6">
                        <input type="text" placeholder="Product name" onChange={this.handleNameChange.bind(this)} /> <br />
                        <textarea cols="30" rows="10" placeholder="Product description" onChange={this.handleDescriptionChange.bind(this)} /> <br />
                        <input type="number" placeholder="Start price" onChange={this.handlePriceChange.bind(this)} />$ <br />
                        <button onClick={this.add.bind(this)}>Add</button>
                    </div>
                    <div className="col-sm-6">
                        <Dropzone accept="image/*" multiple={true} onDrop={this.drop.bind(this)} >
                            <span>Drop max 3 files here</span>
                        </Dropzone> <br />
                        {this.state.imagePreviewUrl.length !== 0 ?
                            <div>
                                {this.state.imagePreviewUrl.map((item, i) => (
                                    <img role="presentation" key={i} src={item} />
                                ))}
                            </div> : <div>No images to display...</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUserInfoToken: fetchUserInfoToken,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AddProductLogic)