import React from "react"
import { connect } from "react-redux"

const ProfileMessages = React.createClass({
    render() {
        if (this.props.user.loggedIn) {
            return (
                <div>
                    <h2>Messages:</h2>
                    {!(this.props.user.user.messages.length > 0) ? <div>No messages...</div> :
                        <div>
                            {this.props.user.user.messages.map((item, i) => (
                                <div>
                                    <span>SellerEmail: {item.sellerMail} | </span>
                                    <span>Product: {item.productName} {item.price}$</span>
                                </div>
                            ))}
                        </div>}
                    <hr />
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

export default connect(mapStateToProps)(ProfileMessages)