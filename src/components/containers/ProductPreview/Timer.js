import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { itemHasExpired } from "../../../actions/products_actions"

var Timer = React.createClass({

    getInitialState: function () {
        return { elapsed: 100 };
    },

    componentDidMount: function () {
        this.timer = setInterval(this.tick, 100);
    },

    componentWillUnmount: function () {
        clearInterval(this.timer);
    },

    tick() {
        if (((this.state.elapsed / 10).toFixed(1)) < 0) {
            this.props.itemHasExpired()
            clearInterval(this.timer);
            this.setState({ elapsed: 0 });
        }
        this.setState({ elapsed: this.props.start - new Date() });
    },

    render() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);
        return (
            <div>
                {this.props.start}
                <p>Until the end of auction: <b>{seconds} seconds</b></p>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        itemHasExpired,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Timer)
