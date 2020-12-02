import React from "react";
import "../Home/home.css";
import { Dialog, DialogContent } from "@material-ui/core";
import AddressButton from "../AddressButton/addressButton";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: false,
      address: false,
      wishlist: false,
      profile: true,
    };
  }

  handleOrders = () => {
    this.setState({
      orders: true,
      address: false,
      wishlist: false,
      profile: false,
    });
  };

  handleAddress = () => {
    this.setState({
      orders: false,
      address: true,
      wishlist: false,
      profile: false,
    });
  };
  handleWishlist = () => {
    this.setState({
      orders: false,
      address: false,
      wishlist: true,
      profile: false,
    });
  };
  handleProfile = () => {
    this.setState({
      orders: false,
      address: false,
      wishlist: false,
      profile: true,
    });
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
                        this.state.profile ? "nav-link active" : "nav-link "
                      }
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                      onClick={this.handleProfile}
                    >
                      MY PROFILE
                    </a>
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
                  </div>
                </div>
                <div className="col-md-9 col-lg-7 mr-auto">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className={
                        this.state.profile
                          ? "tab-pane fade show active"
                          : "tab-pane fade "
                      }
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <h4>MY PROFILE</h4>
                      <div className="myProfile">
                        <h5>Edit Details</h5>
                        <form>
                          <div className="form-group">
                            <div className="customPhone">
                              <label for="phoneNum">PHONE NUMBER *</label>
                              <input
                                type="text"
                                className="form-control"
                                id="phoneNum"
                                placeholder="9560811484"
                              />
                              <a href="#" className="btnChange">
                                CHANGE
                              </a>
                            </div>
                          </div>
                          <div className="form-group">
                            <label for="profileEmail">E-MAIL *</label>
                            <input
                              type="email"
                              className="form-control"
                              id="profileEmail"
                              placeholder="aanchalkalra99@gmail.com"
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="firstName">FIRST NAME *</label>
                              <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Aanchal"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="lastName">LAST NAME *</label>
                              <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Kalra"
                              />
                            </div>
                          </div>
                          <div className="form-row my-3">
                            <div className="form-group col-4 col-md-2">
                              <label className="radioContainer">
                                <input
                                  type="radio"
                                  // checked="checked"
                                  name="gender"
                                />
                                <span className="radioCheckmark"></span>
                                <span>MALE</span>
                              </label>
                            </div>
                            <div className="form-group col-4 col-md-2">
                              <label className="radioContainer">
                                <input
                                  type="radio"
                                  // checked="checked"
                                  name="gender"
                                />
                                <span className="radioCheckmark"></span>
                                <span>FEMALE</span>
                              </label>
                            </div>
                          </div>

                          <div className="form-group">
                            <input
                              type="date"
                              className="form-control"
                              id="birthDate"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="profileLocation"
                              placeholder="Location"
                            />
                          </div>
                          <div className="form-row">
                            <div className="col-12">
                              <label for="altMobile">
                                ALERNATE MOBILE NUMBER
                              </label>
                            </div>
                            <div className="form-group col-3 col-md-2">
                              <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                placeholder="+91"
                              />
                            </div>
                            <div className="form-group col-9 col-md-10">
                              <input
                                type="text"
                                className="form-control"
                                id="altMobile"
                                placeholder="Enter a valid 10 digit mobile number"
                              />
                            </div>
                          </div>
                          <div className="buttonWrap mt-4">
                            <button type="button" className="btn saveChange">
                              SAVE CHANGES
                            </button>
                            <button type="button" className="btn changePass">
                              CHANGE PASSWORD
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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
                      <h4>MY ORDERS</h4>

                      <div className="orderDetails">
                        <div className="orderHead">
                          <div>
                            <p>
                              <span>Order No.</span> <span>4564768</span>
                            </p>
                            <p>
                              <span>Order Date</span> <span>10/12/2020</span>
                            </p>
                          </div>
                          <div>
                            <p className="ml-3 pl-1">
                              <span>Order qty</span>{" "}
                              <span className="ml-3">3</span>
                            </p>
                            <p>
                              <span>Total Amount</span>{" "}
                              <strong className="ml-3">Rs 10,000</strong>
                            </p>
                          </div>
                        </div>
                        <div className="shippingAdd">
                          <h5>Shipping Address</h5>
                          <div className="addWrap">
                            <div>
                              <h6>Aanchal Kalra</h6>
                              <address>
                                D1/1 A Rana Pratap Bagh, <br />
                                New Delhi - 110007 <br />
                                aanchalkalra99@gmail.com <br />
                                +91 9560811484
                              </address>
                            </div>
                            <div>
                              <label>OFFICE</label>
                            </div>
                          </div>
                        </div>
                        <div className="orderStatus">
                          <h5>Order Status</h5>
                          <div className="statusWrap">
                            <div className="statusHead">
                              <div>
                                <p className="shipItem">Shipment 1 of 2</p>
                                <p>Package Delivery by May 25, 2020</p>
                              </div>
                              <div>
                                <p className="ml-md-3 pl-md-1">
                                  <span>Payment Mode</span>{" "}
                                  <span className="ml-1 ml-md-3">COD</span>
                                </p>
                                <p>
                                  <span>Amount to be Paid</span>{" "}
                                  <strong className="ml-1 ml-md-3">
                                    Rs 5,000
                                  </strong>
                                </p>
                              </div>
                            </div>
                            <div className="statusBody">
                              <div className="statusItem">
                                <div className="d-flex">
                                  <div className="imgWrap">
                                    <img
                                      className="img-fluid"
                                      src="https://dummyimage.com/64x64/d3d3d3/fff.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="itemContent">
                                    <h5>
                                      Artisan Square Necklace 18ct Gold Plate
                                    </h5>
                                    <p>By Aashna Dalmia</p>
                                    <p>Qty: 1</p>
                                    <p>SKU: AD 001</p>
                                  </div>
                                </div>
                                <h6>Rs 3,000</h6>
                              </div>
                            </div>
                            <div className="statusBody">
                              <div className="statusItem">
                                <div className="d-flex">
                                  <div className="imgWrap">
                                    <img
                                      className="img-fluid"
                                      src="https://dummyimage.com/64x64/d3d3d3/fff.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="itemContent">
                                    <h5>
                                      Artisan Square Necklace 18ct Gold Plate
                                    </h5>
                                    <p>By Aashna Dalmia</p>
                                    <p>Qty: 1</p>
                                    <p>SKU: AD 001</p>
                                  </div>
                                </div>
                                <h6>Rs 3,000</h6>
                              </div>
                            </div>
                            <div className="bottomLink">
                              <a href="#">
                                <span>DOWNLOAD INVOICE</span>
                                <svg
                                  width="18"
                                  height="17"
                                  viewBox="0 0 18 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.56445 11.6942L9.83588 8.69542L6.56445 5.69006L7.5716 4.76685L11.8573 8.69542L7.5716 12.624L6.56445 11.6942Z"
                                    fill="#398DAF"
                                  />
                                </svg>
                              </a>
                              <a href="#">
                                <span>TRACK</span>
                                <svg
                                  width="18"
                                  height="17"
                                  viewBox="0 0 18 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.56445 11.6942L9.83588 8.69542L6.56445 5.69006L7.5716 4.76685L11.8573 8.69542L7.5716 12.624L6.56445 11.6942Z"
                                    fill="#398DAF"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="statusWrap">
                            <div className="statusHead">
                              <div>
                                <p className="shipItem">Shipment 2 of 2</p>
                                <p>Package Delivery by May 28, 2020</p>
                              </div>
                              <div>
                                <p className="ml-md-3 pl-md-1">
                                  <span>Payment Mode</span>{" "}
                                  <span className="ml-1 ml-md-3">COD</span>
                                </p>
                                <p>
                                  <span>Amount to be Paid</span>{" "}
                                  <strong className="ml-1 ml-md-3">
                                    Rs 5,000
                                  </strong>
                                </p>
                              </div>
                            </div>
                            <div className="statusBody">
                              <div className="statusItem">
                                <div className="d-flex">
                                  <div className="imgWrap">
                                    <img
                                      className="img-fluid"
                                      src="https://dummyimage.com/64x64/d3d3d3/fff.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="itemContent">
                                    <h5>
                                      Artisan Square Necklace 18ct Gold Plate
                                    </h5>
                                    <p>By Aashna Dalmia</p>
                                    <p>Qty: 1</p>
                                    <p>SKU: AD 001</p>
                                  </div>
                                </div>
                                <h6>Rs 3,000</h6>
                              </div>
                            </div>
                            <div className="bottomLink">
                              <a href="#">
                                <span>DOWNLOAD INVOICE</span>
                                <svg
                                  width="18"
                                  height="17"
                                  viewBox="0 0 18 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.56445 11.6942L9.83588 8.69542L6.56445 5.69006L7.5716 4.76685L11.8573 8.69542L7.5716 12.624L6.56445 11.6942Z"
                                    fill="#398DAF"
                                  />
                                </svg>
                              </a>
                              <a href="#">
                                <span>TRACK</span>
                                <svg
                                  width="18"
                                  height="17"
                                  viewBox="0 0 18 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.56445 11.6942L9.83588 8.69542L6.56445 5.69006L7.5716 4.76685L11.8573 8.69542L7.5716 12.624L6.56445 11.6942Z"
                                    fill="#398DAF"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <div className="savedAdd">
                        <div className="addressBtn px-1">
                          <h5>Saved Addresses</h5>

                          <AddressButton />
                        </div>
                        <div className="addressContent">
                          <label>Default Address</label>
                          <div className="row">
                            <div className="col-lg-6">
                              <label className="radioContainer">
                                <input
                                  type="radio"
                                  // checked="checked"
                                  name="defaultAddress"
                                />
                                <span className="radioCheckmark"></span>

                                <div className="addressCard">
                                  <div className="body">
                                    <div className="addWrap">
                                      <h6>Aanchal</h6>
                                      <p>
                                        D1/1 A Rana Pratap Bagh,
                                        <br />
                                        New Delhi- 110007 <br />
                                        <br />
                                        aanchalkalra99@gmail.com
                                        <br />
                                        +91 9560811484
                                        <br />
                                      </p>
                                    </div>
                                    <div className="labelWrap">
                                      <label>HOME</label>
                                    </div>
                                  </div>
                                  <div className="foot">
                                    <a href="#" className="btn">
                                      EDIT
                                    </a>
                                    <a href="#" className="btn">
                                      REMOVE
                                    </a>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="addressContent">
                          <label>Other Addresses</label>
                          <div className="row">
                            <div className="col-lg-6">
                              <label className="radioContainer">
                                <input type="radio" name="defaultAddress" />
                                <span className="radioCheckmark"></span>

                                <div className="addressCard">
                                  <div className="body">
                                    <div className="addWrap">
                                      <h6>Aanchal</h6>
                                      <p>
                                        D1/1 A Rana Pratap Bagh,
                                        <br />
                                        New Delhi- 110007 <br />
                                        <br />
                                        aanchalkalra99@gmail.com
                                        <br />
                                        +91 9560811484
                                        <br />
                                      </p>
                                    </div>
                                    <div className="labelWrap">
                                      <label>OFFICE</label>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <label className="radioContainer">
                                <input type="radio" name="defaultAddress" />
                                <span className="radioCheckmark"></span>

                                <div className="addressCard">
                                  <div className="body">
                                    <div className="addWrap">
                                      <h6>Aanchal</h6>
                                      <p>
                                        D1/1 A Rana Pratap Bagh,
                                        <br />
                                        New Delhi- 110007 <br />
                                        <br />
                                        aanchalkalra99@gmail.com
                                        <br />
                                        +91 9560811484
                                        <br />
                                      </p>
                                    </div>
                                    <div className="labelWrap">
                                      <label>OFFICE</label>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
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
