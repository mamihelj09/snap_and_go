import React from "react"

class ProductListItem extends React.Component {
    render() {
        return (
            <div className="thumbnail item">
                <img src={this.props.img} className="img-responsive" role="presentation" />
                <div className="caption">
                    <h3>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h3>
                    <p>{this.props.description}</p>
                    <h5>Price: ${this.props.maxBid}</h5>
                </div>
            </div>
        )
    }
}

export default ProductListItem