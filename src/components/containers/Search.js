import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchSearchedProducts } from "../../actions/products_actions"


class Sreach extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: null,
    }
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleKeyPress(e) {
    this.props.fetchSearchedProducts(this.state.searchText)
  }

  render() {
    return (
      <div className="jumbotron">
        <h2>WHERE BEST PRICE'S ARE MOVING</h2>
        <h5>Search for product's</h5>
        <div className="form-group">
          <input type="text" className="form-control"
            onChange={this.handleChange.bind(this)}
            onKeyUpCapture={this.handleKeyPress.bind(this)} />
          <span className="form-control-feedback fui-search search"
            onClick={() => this.props.fetchSearchedProducts(this.state.searchText)}></span>
        </div>
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
    fetchSearchedProducts,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Sreach)