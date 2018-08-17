import React, { Component } from "react";
import { connect } from "react-redux";
import "../dist/css/Home.css";
import { getListProduct } from "../../redux/action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.call_GetListProduct();
  }

  render() {
    return (
      <div>
        <h3>This is HOME PAGE, {this.props.products}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.products);

  return {
    products: state.products
  };
};

const mapDispathToProps = (dispatch, props) => {
  return {
    call_GetListProduct: () => {
      dispatch(getListProduct());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
