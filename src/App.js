import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collection from "./Components/Cards/Collection";
import Info from "./Components/Cards/Info";
import LikedProduct from "./Components/Cards/LikedProduct";
import Pair from "./Components/Cards/Pair";
import Shop from "./Components/Cards/Shop";
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
          <Route path="/" render={() => <Pair />} />
          <Route path="/" render={() => <Info />} />
          <Route path="/" render={() => <LikedProduct />} />
          <Route path="/" render={() => <Collection />} />
          <Route path="/" render={() => <Shop />} />
          <br />
          <br />
        </Router>
      </Fragment>
    );
  }
}

export default App;
