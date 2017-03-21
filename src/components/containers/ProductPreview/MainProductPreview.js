import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { unmountRedirectToProduct, fetchOneProductToDisplay } from "../../../actions/products_actions"

class MainProductPreview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedImg: 0,
        }
    }

    componentDidMount() {
        this.props.fetchOneProductToDisplay(this.props.products.idToRedirect)
    }

    selectImg(i) {
        this.setState({ selectedImg: i });
    }

    render() {
        return (
            <div className="img_cont">
                {!this.props.products.oneProduct.imgsPath ? <div></div> :
                    <div>
                        <img role="presentation" src={"../" + this.props.products.oneProduct.imgsPath[this.state.selectedImg]} />
                        <hr />
                        {this.props.products.oneProduct.imgsPath.map((item, i) => (
                            <img role="presentation" onClick={() => this.selectImg(i)} className="smallImg" src={"../" + item} key={i} />
                        ))}
                    </div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        unmountRedirectToProduct,
        fetchOneProductToDisplay,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MainProductPreview)