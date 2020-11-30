import React from "react";
import "./account.css";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: false,
      address: false,
      wishlist: true,
    };
  }

  handleOrders = () => {
    this.setState({ orders: true, address: false, wishlist: false });
  };

  handleAddress = () => {
    this.setState({ orders: false, address: true, wishlist: false });
  };
  handleWishlist = () => {
    this.setState({ orders: false, address: false, wishlist: true });
  };
  render() {
    return (
      <body>
        <main>
          <section className="account">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="titleHeading">
                    <h3>MY ACCOUNT</h3>
                    <a href="#" className="logOut">
                      LOGOUT
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-lg-3 ml-auto">
                  <div
                    className="nav flex-md-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className={
                        this.state.orders ? "nav-link active" : "nav-link "
                      }
                      id="v-pills-orders-tab"
                      data-toggle="pill"
                      //   href="#v-pills-orders"
                      role="tab"
                      aria-controls="v-pills-orders"
                      aria-selected="true"
                      onClick={this.handleOrders}
                    >
                      ORDERS
                    </a>
                    <a
                      className={
                        this.state.address
                          ? "nav-link border-lg-y-0 active"
                          : "nav-link border-lg-y-0"
                      }
                      id="v-pills-addresses-tab"
                      data-toggle="pill"
                      //   href="#v-pills-addresses"
                      role="tab"
                      aria-controls="v-pills-addresses"
                      aria-selected="false"
                      onClick={this.handleAddress}
                    >
                      ADDRESSES
                    </a>
                    <a
                      className={
                        this.state.wishlist ? "nav-link active" : "nav-link "
                      }
                      id="v-pills-wishlist-tab"
                      data-toggle="pill"
                      //   href="#v-pills-wishlist"
                      role="tab"
                      aria-controls="v-pills-wishlist"
                      aria-selected="false"
                      onClick={this.handleWishlist}
                    >
                      WISHLIST
                    </a>
                    <a href="#" className="nav-link logOut">
                      LOGOUT
                    </a>
                  </div>
                </div>
                <div className="col-md-9 col-lg-7 mr-auto">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className={
                        this.state.orders
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="v-pills-orders"
                      role="tabpanel"
                      aria-labelledby="v-pills-orders-tab"
                    >
                      <h4>ORDERS</h4>
                    </div>
                    <div
                      className={
                        this.state.address
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="v-pills-addresses"
                      role="tabpanel"
                      aria-labelledby="v-pills-addresses-tab"
                    >
                      <h4>ADDRESSES</h4>
                      ...
                    </div>
                    <div
                      className={
                        this.state.wishlist
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="v-pills-wishlist"
                      role="tabpanel"
                      aria-labelledby="v-pills-wishlist-tab"
                    >
                      <h4>WISHLIST</h4>
                      <div className="wishItem">
                        <div className="row align-items-end">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-4">
                                <div className="imgWrap">
                                  <img
                                    className="img-fluid"
                                    src="../../assets/images/necklace.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-8">
                                <div className="detailWrap">
                                  <h5 className="mb-3">
                                    Artisan Square Necklace 18ct Gold Plate
                                  </h5>
                                  <p>Rs. 10,000</p>
                                  <div className="qtyWrap">
                                    <div className="qtyChange">
                                      <a href="#" className="minus">
                                        <svg
                                          width="4"
                                          height="2"
                                          viewBox="0 0 4 2"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M3.54 1.516H0.456V0.724H3.54V1.516Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </a>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="1"
                                      />
                                      <a href="#" className="plus">
                                        <svg
                                          width="8"
                                          height="7"
                                          viewBox="0 0 8 7"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M4.356 3.004H7.056V3.724H4.356V6.424H3.636V3.724H0.936V3.004H3.636V0.304H4.356V3.004Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="buttonWrap">
                              <button
                                type="button"
                                className="btn btnBag"
                                style={{ marginRight: "12px" }}
                              >
                                ADD TO BAG
                              </button>
                              <button type="button" className="btn btnRemove">
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wishItem">
                        <div className="row align-items-end">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-4">
                                <div className="imgWrap">
                                  <img
                                    className="img-fluid"
                                    src="../../assets/images/necklace.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-8">
                                <div className="detailWrap">
                                  <h5 className="mb-3">
                                    Artisan Square Necklace 18ct Gold Plate
                                  </h5>
                                  <p>Rs. 10,000</p>
                                  <div className="qtyWrap">
                                    <div className="qtyChange">
                                      <a href="#" className="minus">
                                        <svg
                                          width="4"
                                          height="2"
                                          viewBox="0 0 4 2"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M3.54 1.516H0.456V0.724H3.54V1.516Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </a>
                                      <input
                                        type="number"
                                        className="form-control"
                                        placeholder="1"
                                      />
                                      <a href="#" className="plus">
                                        <svg
                                          width="8"
                                          height="7"
                                          viewBox="0 0 8 7"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M4.356 3.004H7.056V3.724H4.356V6.424H3.636V3.724H0.936V3.004H3.636V0.304H4.356V3.004Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="buttonWrap">
                              <button
                                type="button"
                                className="btn btnBag"
                                style={{ marginRight: "12px" }}
                              >
                                ADD TO BAG
                              </button>
                              <button type="button" className="btn btnRemove">
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tabOuter">
                    <a href="#" className="btn btnContinue">
                      CONTINUE SHOPPING
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="wideSection whatNew my-md-3"
            style={{ marginBottom: "20px" }}
          >
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-8 order-lg-1">
                  <div className="bgWrap">
                    {/* <!-- <img className="img-fluid d-lg-none" src="https://dummyimage.com/991x425/d3d3d3/fff.jpg" alt="" /> --> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contentWrap">
                    <h3>WHAT'S NEW</h3>
                    <p>
                      At Amrutam, discover unusual luxury pieces that we have
                      scoured the world to find.{" "}
                    </p>
                    <a href="#" className="shopNow">
                      <span>SHOP NOW</span>
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 10.58L4.1244 6L0 1.41L1.26974 0L6.67288 6L1.26974 12L0 10.58Z"
                          fill="#616161"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    );
  }
}

export default Account;
