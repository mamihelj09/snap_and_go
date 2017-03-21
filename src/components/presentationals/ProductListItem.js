import React from "react"

class ProductListItem extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} />
                <h2>{this.props.name}</h2>
                {/*<h4>{this.props.description}</h4>*/}
                <h4>Price: ${this.props.maxBid}</h4>
            </div>
        )
    }
}

export default ProductListItem