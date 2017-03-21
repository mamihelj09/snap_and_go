import React from "react"
import { Link } from "react-router-dom"

class ProductPreviewNav extends React.Component {

    render() {
        return (
            <div className="nav">
                <Link to="/" className="navbar-brand navLogo">Snap'n'Go!</Link>
            </div>
        )
    }
}

export default ProductPreviewNav