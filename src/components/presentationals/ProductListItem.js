import React from "react"

class ProductListItem extends React.Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.img} role="presentation" />
                <h2>{this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}</h2>
                <h4>Price: ${this.props.maxBid}</h4>
            </div>
        )
    }
}

export default ProductListItem