import React, { Component, Fragment } from "react";
import "../Home/home.css";
import {
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SquareSlider from "../Slider/squareSlider";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: true,
      shipping: false,
      care: false,
      return: false,
      expanded: "panel1",
    };
  }

  handleChange = (panel) => {
    this.setState({ expanded: panel });
  };

  handleDetails = () => {
    this.setState({
      details: true,
      shipping: false,
      care: false,
      return: false,
    });
  };
  handleShipping = () => {
    this.setState({
      details: false,
      shipping: true,
      care: false,
      return: false,
    });
  };
  handleCare = () => {
    this.setState({
      details: false,
      shipping: false,
      care: true,
      return: false,
    });
  };
  handleReturn = () => {
    this.setState({
      details: false,
      shipping: false,
      care: false,
      return: true,
    });
  };

  render() {
    return (
      <Fragment>
        <body>
          <main>
            <section className="bannerSection ProductSummary">
              <div className="container">
                <div className="row">
                  <div className="col-md-2 d-none d-md-block">
                    <div className="d-flex justify-content-between align-items-center align-items-md-end flex-md-column">
                      <div className="imgWrap text-right">
                        <img
                          className="img-fluid"
                          src="https://dummyimage.com/80x80/d3d3d3/fff.jpg"
                          alt=""
                        />
                      </div>
                      <div className="imgWrap text-right my-4">
                        <img
                          className="img-fluid"
                          src="https://dummyimage.com/80x80/d3d3d3/fff.jpg"
                          alt=""
                        />
                      </div>
                      <div className="imgWrap text-right">
                        <img
                          className="img-fluid"
                          src="https://dummyimage.com/80x80/d3d3d3/fff.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 mb-5 mb-md-0">
                    <div className="largeImg text-center text-md-left">
                      <div
                        id="carouselProduct"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselProductIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselProductIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselProductIndicators"
                            data-slide-to="2"
                          ></li>
                          <li
                            data-target="#carouselProductIndicators"
                            data-slide-to="3"
                          ></li>
                          <li
                            data-target="#carouselProductIndicators"
                            data-slide-to="4"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="https://dummyimage.com/440x440/d3d3d3/fff.jpg"
                              className="d-block w-100"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://dummyimage.com/440x440/d3d3d3/fff.jpg"
                              className="d-block w-100"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://dummyimage.com/440x440/d3d3d3/fff.jpg"
                              className="d-block w-100"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://dummyimage.com/440x440/d3d3d3/fff.jpg"
                              className="d-block w-100"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://dummyimage.com/440x440/d3d3d3/fff.jpg"
                              className="d-block w-100"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="productDetails">
                      <div className="d-flex justify-content-between mb-3">
                        <div className="headingWrap">
                          <h3>White daimond chain necklace</h3>
                          <span>by Dhwani Bansal</span>
                        </div>
                        <a href="#" className="iconHeart d-none d-md-block">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                              fill="#616161"
                            />
                          </svg>
                        </a>
                      </div>
                      <p>
                        Necklace with 18 kt rose gold chain and 18 kt rose gold
                        pendant set with a diamond
                      </p>

                      <div className="row detailWrap">
                        <div className="col-12 d-flex justify-content-between align-items-center mb-4">
                          <span>Quantity</span>
                          <span>1 +</span>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center mb-4">
                          <span>Size</span>
                          <span>7.5</span>
                        </div>
                        <div className="col-12 mb-4 d-md-none">
                          <a href="#" className="iconHeart">
                            <svg
                              width="20"
                              height="19"
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                fill="#616161"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="col-12 mb-4">
                          <div className="addBag d-flex justify-content-between align-items-center">
                            <span className="fw-800">Rs 2,200</span>
                            <div>
                              <a href="#" className="btn addToBag">
                                Add to Bag
                              </a>
                              <a href="#" className="btn buyNow">
                                Buy Now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 d-flex justify-content-between align-items-center mb-4">
                          <span>Availability</span>
                          <span className="fs-12">Mode to order</span>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center mb-4">
                          <span>Deliver to</span>
                          <div className="pinCheck">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Pin Code"
                            />
                            <button type="submit" className="btn btnCheck">
                              Check
                            </button>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center mb-4">
                          <span>Shipping Time</span>
                          <span className="fs-12">5-7 Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="detailInfo">
              <div className="container">
                <div className="detailtabs d-none d-md-block">
                  <nav className="datailNav">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className={
                          this.state.details ? "nav-link active" : "nav-link"
                        }
                        id="nav-details-tab"
                        data-toggle="tab"
                        // href="#nav-details"
                        role="tab"
                        aria-controls="nav-details"
                        aria-selected="true"
                        onClick={this.handleDetails}
                      >
                        <span>DETAILS</span>{" "}
                        <svg
                          className="d-sm-none"
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
                      <a
                        className={
                          this.state.shipping ? "nav-link active" : "nav-link"
                        }
                        id="nav-shipping-tab"
                        data-toggle="tab"
                        // href="#nav-shipping"
                        role="tab"
                        aria-controls="nav-shipping"
                        aria-selected="false"
                        onClick={this.handleShipping}
                      >
                        <span>SHIPPING INFO</span>{" "}
                        <svg
                          className="d-sm-none"
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
                      <a
                        className={
                          this.state.care ? "nav-link active" : "nav-link"
                        }
                        id="nav-instruction-tab"
                        data-toggle="tab"
                        // href="#nav-instruction"
                        role="tab"
                        aria-controls="nav-instruction"
                        aria-selected="false"
                        onClick={this.handleCare}
                      >
                        <span>CARE INSTRUCTIONS</span>{" "}
                        <svg
                          className="d-sm-none"
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
                      <a
                        className={
                          this.state.return ? "nav-link active" : "nav-link"
                        }
                        id="nav-warrenty-tab"
                        data-toggle="tab"
                        // href="#nav-warrenty"
                        role="tab"
                        aria-controls="nav-warrenty"
                        aria-selected="false"
                        onClick={this.handleReturn}
                      >
                        <span>RETURNS AND WARRANTY</span>
                        <svg
                          className="d-sm-none"
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
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className={
                        this.state.details
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="nav-details"
                      role="tabpanel"
                      aria-labelledby="nav-details-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <p>
                            At Amrutam, discover unusual luxury pieces that we
                            have scoured the world to find. We specialise in
                            unique, designer fine jewellery, dreamt up by
                            artists and brought to life by skilled craftspeople
                            in under-the-radar ateliers and workshops scattered
                            across the globe.
                          </p>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="border-top-0">SKU</td>
                                  <td className="text-right border-top-0">
                                    AM00400159
                                  </td>
                                </tr>
                                <tr>
                                  <td>Colour</td>
                                  <td className="text-right">Sliver</td>
                                </tr>
                                <tr>
                                  <td>Base material</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Weight</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Measurements</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        this.state.shipping
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="nav-shipping"
                      role="tabpanel"
                      aria-labelledby="nav-shipping-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <p>
                            At Amrutam, discover unusual luxury pieces that we
                            have scoured the world to find. We specialise in
                            unique, designer fine jewellery, dreamt up by
                            artists and brought to life by skilled craftspeople
                            in under-the-radar ateliers and workshops scattered
                            across the globe.
                          </p>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="border-top-0">SKU</td>
                                  <td className="text-right border-top-0">
                                    AM00400159
                                  </td>
                                </tr>
                                <tr>
                                  <td>Colour</td>
                                  <td className="text-right">Sliver</td>
                                </tr>
                                <tr>
                                  <td>Base material</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Weight</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Measurements</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        this.state.care
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="nav-instruction"
                      role="tabpanel"
                      aria-labelledby="nav-instruction-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <p>
                            At Amrutam, discover unusual luxury pieces that we
                            have scoured the world to find. We specialise in
                            unique, designer fine jewellery, dreamt up by
                            artists and brought to life by skilled craftspeople
                            in under-the-radar ateliers and workshops scattered
                            across the globe.
                          </p>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="border-top-0">SKU</td>
                                  <td className="text-right border-top-0">
                                    AM00400159
                                  </td>
                                </tr>
                                <tr>
                                  <td>Colour</td>
                                  <td className="text-right">Sliver</td>
                                </tr>
                                <tr>
                                  <td>Base material</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Weight</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Measurements</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        this.state.return
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="nav-warrenty"
                      role="tabpanel"
                      aria-labelledby="nav-warrenty-tab"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <p>
                            At Amrutam, discover unusual luxury pieces that we
                            have scoured the world to find. We specialise in
                            unique, designer fine jewellery, dreamt up by
                            artists and brought to life by skilled craftspeople
                            in under-the-radar ateliers and workshops scattered
                            across the globe.
                          </p>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="border-top-0">SKU</td>
                                  <td className="text-right border-top-0">
                                    AM00400159
                                  </td>
                                </tr>
                                <tr>
                                  <td>Colour</td>
                                  <td className="text-right">Sliver</td>
                                </tr>
                                <tr>
                                  <td>Base material</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Weight</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                                <tr>
                                  <td>Measurements</td>
                                  <td className="text-right">
                                    Stainless steel(316L)
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detailCollapse d-block d-md-none mb-5">
                  <div className="accordion" id="accordionProduct">
                    <div className="card">
                      <ExpansionPanel
                        expanded={this.state.expanded === "panel1"}
                        onChange={() => this.handleChange("panel1")}
                        elevation={0}
                        style={{ width: "100%" }}
                      >
                        <ExpansionPanelSummary
                          style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                          <div
                            className="card-header"
                            id="headingOne"
                            style={{
                              width: "100%",
                            }}
                          >
                            <button
                              className="btn btn-link d-flex justify-content-between align-items-center"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span>DETAILS</span>
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
                          </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails
                          style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionProduct"
                          >
                            <div className="card-body">
                              <p>
                                At Amrutam, discover unusual luxury pieces that
                                we have scoured the world to find. We specialise
                                in unique, designer fine jewellery, dreamt up by
                                artists and brought to life by skilled
                                craftspeople in under-the-radar ateliers and
                                workshops scattered across the globe.{" "}
                              </p>
                              <div className="table-responsive">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td className="border-top-0">SKU</td>
                                      <td className="text-right border-top-0">
                                        AM00400159
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Colour</td>
                                      <td className="text-right">Sliver</td>
                                    </tr>
                                    <tr>
                                      <td>Base material</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Weight</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Measurements</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
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
                        style={{ width: "100%" }}
                      >
                        <ExpansionPanelSummary
                          style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                          <div
                            className="card-header"
                            id="headingOne"
                            style={{
                              width: "100%",
                            }}
                          >
                            <button
                              className="btn btn-link d-flex justify-content-between align-items-center"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span>SHIPPING INFO</span>
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
                          </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails
                          style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionProduct"
                          >
                            <div className="card-body">
                              <p>
                                At Amrutam, discover unusual luxury pieces that
                                we have scoured the world to find. We specialise
                                in unique, designer fine jewellery, dreamt up by
                                artists and brought to life by skilled
                                craftspeople in under-the-radar ateliers and
                                workshops scattered across the globe.{" "}
                              </p>
                              <div className="table-responsive">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td className="border-top-0">SKU</td>
                                      <td className="text-right border-top-0">
                                        AM00400159
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Colour</td>
                                      <td className="text-right">Sliver</td>
                                    </tr>
                                    <tr>
                                      <td>Base material</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Weight</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Measurements</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
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
                        style={{ width: "100%" }}
                      >
                        <ExpansionPanelSummary
                          style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                          <div
                            className="card-header"
                            id="headingOne"
                            style={{
                              width: "100%",
                            }}
                          >
                            <button
                              className="btn btn-link d-flex justify-content-between align-items-center"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span>CARE & INSTRUCTIONS</span>
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
                          </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails
                          style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionProduct"
                          >
                            <div className="card-body">
                              <p>
                                At Amrutam, discover unusual luxury pieces that
                                we have scoured the world to find. We specialise
                                in unique, designer fine jewellery, dreamt up by
                                artists and brought to life by skilled
                                craftspeople in under-the-radar ateliers and
                                workshops scattered across the globe.{" "}
                              </p>
                              <div className="table-responsive">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td className="border-top-0">SKU</td>
                                      <td className="text-right border-top-0">
                                        AM00400159
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Colour</td>
                                      <td className="text-right">Sliver</td>
                                    </tr>
                                    <tr>
                                      <td>Base material</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Weight</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Measurements</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </div>
                    <div className="card">
                      <ExpansionPanel
                        expanded={this.state.expanded === "panel4"}
                        onChange={() => this.handleChange("panel4")}
                        elevation={0}
                        style={{ width: "100%" }}
                      >
                        <ExpansionPanelSummary
                          style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                          <div
                            className="card-header"
                            id="headingOne"
                            style={{
                              width: "100%",
                            }}
                          >
                            <button
                              className="btn btn-link d-flex justify-content-between align-items-center"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span>RETURN & WARRANTY</span>
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
                          </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails
                          style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionProduct"
                          >
                            <div className="card-body">
                              <p>
                                At Amrutam, discover unusual luxury pieces that
                                we have scoured the world to find. We specialise
                                in unique, designer fine jewellery, dreamt up by
                                artists and brought to life by skilled
                                craftspeople in under-the-radar ateliers and
                                workshops scattered across the globe.{" "}
                              </p>
                              <div className="table-responsive">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td className="border-top-0">SKU</td>
                                      <td className="text-right border-top-0">
                                        AM00400159
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Colour</td>
                                      <td className="text-right">Sliver</td>
                                    </tr>
                                    <tr>
                                      <td>Base material</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Weight</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Measurements</td>
                                      <td className="text-right">
                                        Stainless steel(316L)
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pairWith sliderWrap">
              <div className="sliderContainer">
                <div className="row">
                  <div className="col text-center">
                    <h3 className="titleHeading">PAIR IT WITH</h3>
                  </div>
                </div>
                <SquareSlider />{" "}
              </div>
            </section>

            <section className="meetDesigner">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="bgWrap">
                      {/* <!-- <img className="img-fluid" src="https://dummyimage.com/465x410/d3d3d3/fff.jpg" alt="" /> --> */}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="designerWrap">
                      <h3 className="titleHeading">MEET THE DESIGNER</h3>
                      <p>
                        At Amrutam, discover unusual luxury pieces that we have
                        scoured the world to find. We specialise in unique,
                        designer fine jewellery, dreamt up by artists and
                        brought to life by skilled craftspeople in
                        under-the-radar ateliers and workshops scattered across
                        the globe.{" "}
                      </p>

                      <a href="#" className="discoverMore">
                        <span>DISCOVER MORE</span>{" "}
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
                  <div className="col-lg-4">
                    <div className="bgWrap">
                      {/* <!-- <img className="img-fluid" src="https://dummyimage.com/465x410/d3d3d3/fff.jpg" alt="" /> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="youLike sliderWrap">
              <div className="sliderContainer">
                <div className="row">
                  <div className="col text-center">
                    <h3 className="titleHeading">YOU MAY ALSO LIKE</h3>
                  </div>
                </div>
                <SquareSlider />{" "}
              </div>
            </section>

            <section className="discoverCollection sliderWrap">
              <div className="sliderContainer">
                <div className="row">
                  <div className="col text-center">
                    <h3 className="titleHeading">DISCOVER MORE DESIGNS</h3>
                  </div>
                </div>
                <SquareSlider />{" "}
              </div>
            </section>

            <section className="wideSection ShopCollection">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className="contentWrap">
                      <h3>SHOP THE COLLECTION</h3>
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
                  <div className="col-lg-8">
                    <div className="bgWrap">
                      {/* <!-- <img className="img-fluid" src="https://dummyimage.com/874x425/d3d3d3/fff.jpg" alt="" /> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </body>
      </Fragment>
    );
  }
}

export default ProductPage;
