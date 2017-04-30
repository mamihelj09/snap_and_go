import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { removeMessage } from "../../actions/products_actions"

const ProfileMessages = React.createClass({
    render() {
        if (this.props.user.loggedIn) {
            return (
                <div className="message_cont">
                    <h2>Messages:</h2>
                    <hr />
                    {!(this.props.user.user.messages.length > 0) ? <div>No messages...</div> :
                        <div>
                            {this.props.user.user.messages.map((item, i) => (
                                <div key={i}>
                                    <button className="btn btn-danger btn-xs" onClick={() => this.props.removeMessage(item.productID, this.props.user.user.id, localStorage.getItem("token"))}>Remove</button>
                                    <span><b>{item.type}</b> SellerEmail: {item.mail} <strong>|</strong> </span>
                                    <span>Product: {item.productName} <strong>{item.price}$</strong></span>
                                </div>
                            ))}
                        </div>}
                </div>
            )
        }
        return null
    }

})

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        removeMessage
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProfileMessages)