import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/checkout";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";

import Home from "./Components/Home/Home";
import ProductPage from "./Components/Product/ProductPage";
import Shop from "./Components/Shop/shop";
import Thankyou from "./Components/Thankyou/thankyou";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" component={Header} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/product" render={() => <ProductPage />} />
          <Route path="/shop" render={() => <Shop />} />
          <Route path="/checkout" render={() => <Checkout />} />
          <Route path="/thankyou" render={() => <Thankyou />} />

          <Route path="/" component={Footer} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
