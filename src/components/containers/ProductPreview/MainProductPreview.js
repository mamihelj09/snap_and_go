import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { unmountRedirectToProduct, fetchOneProductToDisplay } from "../../../actions/products_actions"

class MainProductPreview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedImg: 0,
            imgUrl: "../uploads/err/no_image_available.jpeg"
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
            <div>
                {!this.props.products.oneProduct.imgsPath ?
                    <img src={this.state.imgUrl} role="presentation" /> :
                    <div>
                        <img className="img-rounded img-responsive" role="presentation" src={"../" + this.props.products.oneProduct.imgsPath[this.state.selectedImg]} />
                        <hr />
                        <div className="small_img">
                            {this.props.products.oneProduct.imgsPath.map((item, i) => (
                                <img role="presentation" onClick={() => this.selectImg(i)} className="img-rounded img-responsive" src={"../" + item} key={i} />
                            ))}
                        </div>
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