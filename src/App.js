import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import ProductPage from "./Components/Product/ProductPage";
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
          <Route path="/home" render={() => <Home />} />

          <Route path="/product" render={() => <ProductPage />} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
