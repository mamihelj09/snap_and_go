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
      <div className="search" >
        <h1>WHERE BEST PRICE'S ARE MOVING</h1>
        <h3>Search for product's</h3> <br />
        <div className="search_box" >
          <input type="text" onChange={this.handleChange.bind(this)} onKeyUpCapture={this.handleKeyPress.bind(this)} />
          <button onClick={() => this.props.fetchSearchedProducts(this.state.searchText)}><i className="material-icons">search</i></button>
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