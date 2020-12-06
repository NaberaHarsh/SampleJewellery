import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Components/About /about";
import Account from "./Components/Account/account";
import Checkout from "./Components/Checkout/checkout";
import Designer from "./Components/Designer/designer";
import Discover from "./Components/Discover/discover";
import Footer from "./Components/Footer/footer";
import Gift from "./Components/Gift/gift";
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
          <Route path="/account" render={() => <Account />} />
          <Route path="/designer" render={() => <Designer />} />
          <Route path="/discover" render={() => <Discover />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/gift" render={() => <Gift />} />

          <Route path="/" component={Footer} />
        </Router>
      </Fragment>
    );
  }
}

export default App;
