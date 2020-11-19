import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./Components/Product/Product";
import FullWidthTabs from "./Components/Product/ProductTab";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" render={() => <Product />} />
          <Route path="/" render={() => <FullWidthTabs />} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
