import React, { Component } from "react";
import "./checkout.css";
import withWidth from "@material-ui/core/withWidth";
import {
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: "panel1",
    };
  }

  handleChange = (panel) => {
    this.setState({ expanded: panel });
  };

  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);
    return (
      <body>
        <main>
          <section className="checkoutPage mb-4">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3 className="titleHeading">CHECKOUT</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 col-lg-4 order-md-1 mb-4 mb-md-0">
                  <div className="productDetails">
                    <div className="productItem">
                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
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
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span className="prePrice">
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>
                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
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
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span className="prePrice">
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>

                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
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
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span className="prePrice">
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>

                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
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
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span className="prePrice">
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>

                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
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
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span className="prePrice">
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>

                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
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
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span className="prePrice">
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>

                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
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
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span className="prePrice">
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>

                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
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
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span className="prePrice">
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>
                      <div className="priceDetails">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th colspan="2">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="gift"
                                    />
                                    <label
                                      className="custom-control-label pl-2 mb-0"
                                      for="gift"
                                      style={{
                                        textTransform: "none",
                                        paddingTop: "0px",
                                      }}
                                    >
                                      This is a gift
                                    </label>
                                  </div>
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td className="pt-2">SUBTOTAL</td>
                                <td className="fontEb pt-2">Rs 10,000</td>
                              </tr>
                              <tr>
                                <td>
                                  COUPON <span className="code">YAK200</span>
                                </td>
                                <td className="fontEb">Rs 200</td>
                              </tr>
                              <tr>
                                <td className="pb-3">SHIPPING</td>
                                <td className="fontEb pb-3">Rs 0</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td>GRAND TOTAL</td>
                                <td className="fontEb">Rs. 9800</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="couponCode">
                      <p>I HAVE A COUPON CODE</p>
                      <div className="codeWrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your code"
                        />
                        <button type="submit" className="btn btnApply">
                          APPLY
                        </button>
                      </div>
                      <div className="selectedCode">
                        <span>YAK200</span>
                        <a href="#">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
                              fill="#616161"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8">
                  <div className="checkoutCollapse">
                    <div className="accordion" id="accordionCheckout">
                      <div className="card">
                        <ExpansionPanel
                          expanded={this.state.expanded === "panel1"}
                          onChange={() => this.handleChange("panel1")}
                          elevation={0}
                        >
                          <ExpansionPanelSummary
                            className="expansion"
                            // expandIcon={<ExpandMoreIcon />}
                          >
                            <div
                              className="card-header"
                              id="headingTwo"
                              style={{ width: "100%" }}
                            >
                              <h2 className="mb-0" style={{ width: "100%" }}>
                                <button
                                  className="btn btn-link btn-block text-left collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  style={{
                                    width: "100%",
                                    paddingBottom: "20px",
                                  }}
                                >
                                  <span>1. LOGIN</span>
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
                                </button>
                              </h2>
                            </div>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails style={{ width: "100%" }}>
                            <div
                              id="collapseOne"
                              className=" collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordionCheckout"
                              style={{ width: "100%" }}
                            >
                              <div
                                className="card-body"
                                style={{ width: "100%" }}
                              >
                                <div
                                  className="loginWrap"
                                  style={{ width: "100%" }}
                                >
                                  <span>Aanchal</span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="9560811484"
                                  />
                                  <a href="#" className="btn btnChange">
                                    CHANGE
                                  </a>
                                </div>
                              </div>
                            </div>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      </div>

                      <div className="card">
                        <ExpansionPanel
                          expanded={this.state.expanded === "panel2"}
                          onChange={() => this.handleChange("panel2")}
                          elevation={0}
                        >
                          <ExpansionPanelSummary
                            className="expansion"
                            // expandIcon={<ExpandMoreIcon />}
                          >
                            <div
                              className="card-header"
                              id="headingTwo"
                              style={{ width: "100%" }}
                            >
                              <h2 className="mb-0" style={{ width: "100%" }}>
                                <button
                                  className="btn btn-link btn-block text-left collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  style={{
                                    width: "100%",
                                    paddingBottom: "20px",
                                  }}
                                >
                                  <span>2. DELIVERY ADDRESS</span>
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
                                </button>
                              </h2>
                            </div>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails style={{ width: "100%" }}>
                            <div
                              id="collapseOne"
                              className=" collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordionCheckout"
                              style={{ width: "100%" }}
                            >
                              <div className="card-body">
                                <div className="deliveryAdd">
                                  <div className="savedAdd">
                                    <div className="addressBtn">
                                      <button
                                        type="button"
                                        className="btn btnAdd"
                                      >
                                        + ADD NEW ADDRESS
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btnAdd"
                                      >
                                        SAVE ADDRESS
                                      </button>
                                    </div>
                                    <div className="addressContent">
                                      <label>Default Address</label>
                                      <div className="addressCard">
                                        <div className="body">
                                          <div className="addWrap">
                                            <h6>Aanchal</h6>
                                            <p>
                                              Sign up to our newsletter to be{" "}
                                              <br />
                                              the first to know about our latest{" "}
                                              <br />
                                              news and get access to <br />
                                              exclusive offers.
                                              <br />
                                              exclusive offers.
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
                                    </div>

                                    <div className="addressContent">
                                      <label>Ohter Addresses</label>
                                      <div className="addressCard">
                                        <div className="body">
                                          <div className="addWrap">
                                            <h6>Aanchal</h6>
                                            <p>
                                              Sign up to our newsletter to be
                                              the first to
                                              <br />
                                              know about our latest news and get
                                              access to
                                              <br />
                                              exclusive offers. <br />
                                            </p>
                                          </div>
                                          <div className="labelWrap">
                                            <label>OFFICE</label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="addressCard">
                                        <div className="body">
                                          <div className="addWrap">
                                            <h6>Aanchal</h6>
                                            <p>
                                              Sign up to our newsletter to be
                                              the first to
                                              <br />
                                              know about our latest news and get
                                              access to
                                              <br />
                                              exclusive offers. <br />
                                            </p>
                                          </div>
                                          <div className="labelWrap">
                                            <label>OFFICE</label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="newAdd">
                                    <form>
                                      <div className="form-group">
                                        <label for="inputEmail">E-MAIL *</label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          id="inputEmail"
                                        />
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-md-6">
                                          <label for="firstName">
                                            FIRST NAME *
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="firstName"
                                          />
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label for="lastName">
                                            LAST NAME *
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-md-12 mb-0">
                                          <label for="firstName">
                                            PHONE NUMBER *
                                          </label>
                                        </div>
                                        <div className="form-group col-2 col-lg-1">
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="firstName"
                                            placeholder="+91"
                                          />
                                        </div>
                                        <div className="form-group col-10 col-lg-11">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder="Enter a valid 10 digit mobile number"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label for="inputAddress">
                                          ADDRESS *
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputAddress"
                                          placeholder=""
                                        />
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-md-7">
                                          <label for="inputCity">CITY *</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputCity"
                                          />
                                        </div>

                                        <div className="form-group col-md-5">
                                          <label for="inputZip">
                                            PIN CODE *
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="inputZip"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <label for="inputState">STATE *</label>
                                        <select
                                          id="inputState"
                                          className="form-control"
                                        >
                                          <option selected value="Select state">
                                            Select state
                                          </option>
                                          <option value="Select state">
                                            UK
                                          </option>
                                          <option value="Select state">
                                            UP
                                          </option>
                                        </select>
                                      </div>

                                      <div className="form-group">
                                        <label>COUNTRY:</label>
                                        <span>India</span>
                                      </div>
                                      <div className="form-group">
                                        <label>ADDRESS TYPE</label>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-md-4">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="home"
                                            />
                                            <label
                                              className="custom-control-label pl-2 mb-0"
                                              for="home"
                                            >
                                              HOME
                                            </label>
                                          </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="office"
                                            />
                                            <label
                                              className="custom-control-label pl-2 mb-0"
                                              for="office"
                                            >
                                              OFFICE
                                            </label>
                                          </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="other"
                                            />
                                            <label
                                              className="custom-control-label pl-2 mb-0"
                                              for="other"
                                            >
                                              OTHER
                                            </label>
                                          </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="save"
                                            />
                                            <label
                                              className="custom-control-label pl-2 mb-0"
                                              for="save"
                                            >
                                              SAVE AND DELIVER HERE
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>

                                  <div className="btnWrap">
                                    <button
                                      type="button"
                                      className="btn btnContinue"
                                    >
                                      CONTINUE
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      </div>
                      <div className="card">
                        <ExpansionPanel
                          expanded={this.state.expanded === "panel3"}
                          onChange={() => this.handleChange("panel3")}
                          elevation={0}
                        >
                          <ExpansionPanelSummary
                            className="expansion"
                            // expandIcon={<ExpandMoreIcon />}
                          >
                            <div
                              className="card-header"
                              id="headingTwo"
                              style={{ width: "100%" }}
                            >
                              <h2 className="mb-0" style={{ width: "100%" }}>
                                <button
                                  className="btn btn-link btn-block text-left collapsed"
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  style={{
                                    width: "100%",
                                    paddingBottom: "20px",
                                  }}
                                >
                                  <span>3. SHIPPING</span>
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
                                </button>
                              </h2>
                            </div>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails style={{ width: "100%" }}>
                            <div
                              id="collapseOne"
                              className=" collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordionCheckout"
                              style={{ width: "100%" }}
                            >
                              <div className="card-body">
                                <div className="shippingDetail">
                                  <div className="shipWrap">
                                    <div className="d-flex align-items-center active">
                                      <span className="dot"></span>
                                      <span className="shipType">STANDARD</span>
                                    </div>
                                    <span className="shipCharge">FREE</span>
                                  </div>
                                  <div className="shipWrap">
                                    <div className="d-flex align-items-center">
                                      <span className="dot"></span>
                                      <span className="shipType">
                                        CASH ON DELIVERY
                                      </span>
                                    </div>
                                    <span className="shipCharge">Rs. 100</span>
                                  </div>
                                  <div className="noteText">
                                    <p>
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.33301 5.99992H8.66634V4.66659H7.33301V5.99992ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.9399 2.66634 7.99992C2.66634 5.05992 5.05967 2.66659 7.99967 2.66659C10.9397 2.66659 13.333 5.05992 13.333 7.99992C13.333 10.9399 10.9397 13.3333 7.99967 13.3333ZM7.99967 1.33325C7.1242 1.33325 6.25729 1.50569 5.44845 1.84072C4.63961 2.17575 3.90469 2.66682 3.28563 3.28587C2.03539 4.53612 1.33301 6.23181 1.33301 7.99992C1.33301 9.76803 2.03539 11.4637 3.28563 12.714C3.90469 13.333 4.63961 13.8241 5.44845 14.1591C6.25729 14.4941 7.1242 14.6666 7.99967 14.6666C9.76779 14.6666 11.4635 13.9642 12.7137 12.714C13.964 11.4637 14.6663 9.76803 14.6663 7.99992C14.6663 7.12444 14.4939 6.25753 14.1589 5.4487C13.8238 4.63986 13.3328 3.90493 12.7137 3.28587C12.0947 2.66682 11.3597 2.17575 10.5509 1.84072C9.74206 1.50569 8.87515 1.33325 7.99967 1.33325ZM7.33301 11.3333H8.66634V7.33325H7.33301V11.3333Z"
                                          fill="#878786"
                                        />
                                      </svg>
                                      <span>
                                        * Delivery timeline may take slightly
                                        longer than usual due to Covid19.
                                      </span>
                                    </p>
                                  </div>
                                  <div className="btnWrap">
                                    <button
                                      type="button"
                                      className="btn btnContinue"
                                    >
                                      CONTINUE
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <div
                          id="collapseThree"
                          className="collapse show"
                          aria-labelledby="headingThree"
                          data-parent="#accordionCheckout"
                        ></div>
                      </div>
                    </div>
                    <div className="completePay">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="subscribe"
                        />
                        <label
                          className="custom-control-label pl-2 mb-0"
                          for="subscribe"
                          style={{
                            textTransform: "uppercase",
                            paddingTop: "0px",
                          }}
                        >
                          SUBSCRIBE TO OUR NEWSLETTER
                        </label>
                        <p>
                          Sign up to our newsletter to be the first to know
                          about our latest news and get access to exclusive
                          offers.
                        </p>
                      </div>
                      <div className="btnWrap">
                        {!mobileView && (
                          <button type="button" className="btn btnPay">
                            COMPLETE PAYMENT
                          </button>
                        )}
                        <p>
                          By placing your order you agree to our{" "}
                          <strong>Terms& Conditions</strong> and you understand
                          that we will process your personal data on the basis
                          of our <strong>Privacy Policy.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="wideSection whatNew my-4 d-none d-md-block">
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
        {mobileView && (
          <div
            className="fixedBtn"
            style={{
              textAlign: "center",
              backgroundColor: "#f4f2f0",
              width: "100%",
              zIndex: 999,
            }}
          >
            PLACE ORDER
          </div>
        )}
      </body>
    );
  }
}

export default withWidth()(Checkout);
