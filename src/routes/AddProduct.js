import React, { Component } from "react"
import Dropzone from "react-dropzone"
import $ from "jquery"

class AddProduct extends Component {

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
    async drop(file) {
        if (file.length > 0) {
            for (var i in file) {
                const a = await fetch(file[i].preview)
                var b = this.state.data;
                if (b.length < 3) {
                    var stateUrl = this.state.imagePreviewUrl
                    stateUrl.push(file[i].preview)
                    b.push({ a: a, name: file[i].name })
                    this.setState({ data: b, imagePreviewUrl: stateUrl });
                } else {
                    console.log("Prevec");
                }
            }
        } else {
            const a = await fetch(file[0].preview)
            var b = this.state.data;
            if (b.length < 3) {
                var stateUrl = this.state.imagePreviewUrl
                stateUrl.push(file[i].preview)
                b.push({ a: a, name: file[0].name })
                this.setState({ data: b, imagePreviewUrl: stateUrl });
            } else {
                console.log("Prevec");
            }
        }
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handlePriceChange(e) {
        this.setState({ price: e.target.value });
    }

    async add() {
        const formData = new FormData()
        if (this.state.data.length > 1) {
            for (var i in this.state.data) {
                const b = await this.state.data[i].a.blob()
                formData.append("data", b, this.state.data[i].name)
            }
        }

        console.log(this.state.data);
        await $.ajax({
            url: "/upload/save",
            method: "POST",
            processData: false,
            contentType: false,
            data: formData,
        })
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
                                    <img key={i} src={item} />
                                ))}
                            </div> : <div>No images to display...</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProduct