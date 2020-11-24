import React, { Component, Fragment } from "react";
import "../Home/home.css";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
    };
  }

  handleFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  render() {
    return (
      <body>
        <section className="bannerSection shopBanner">
          <div className="bannerContent">
            <h3>Jewellery</h3>
            <p>
              Our jewelry builds on a legacy of over 180 years of craftsmanship
              with beautifully designed necklaces and pendants, bracelets, rings
              and more.
            </p>
          </div>
        </section>

        <section className="shopSection">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <div className="byWrap d-md-none">
                  <button
                    type="button"
                    className="btn filterBy"
                    onClick={() => this.handleFilter()}
                  >
                    <span>FILTER BY</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10.2344L12 15.2344L17 10.2344H7Z"
                        fill="#333232"
                      />
                    </svg>
                  </button>
                  {/* <!-- <button type="button" className="btn sortBy"><span>SORT BY</span><svg width="20" height="20"
                                    viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10.2344L12 15.2344L17 10.2344H7Z" fill="#333232" />
                                </svg>
                            </button> --> */}
                  <div className="dropdown">
                    <a
                      className="btn sortBy dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      SORT BY
                    </a>

                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a className="dropdown-item active" href="#">
                        Best Sellers
                      </a>
                      <a className="dropdown-item" href="#">
                        New Arrivals
                      </a>
                      <a className="dropdown-item" href="#">
                        Price high to low
                      </a>
                      <a className="dropdown-item" href="#">
                        Price low to high
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    this.state.showFilter
                      ? "shopCategory d-md-block"
                      : "shopCategory d-none d-md-block"
                  }
                  id="shopCategory"
                >
                  <div className="filterWrap d-md-none">
                    <div className="filterClose">
                      <span>Filter</span>
                      <a
                        href="#"
                        className="closeBtn"
                        onClick={() => this.handleFilter()}
                      >
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
                    <div className="chipsWrap">
                      <div className="filterChip">
                        <span>bracelets</span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.91671 2.67075L7.32921 2.08325L5.00004 4.41242L2.67087 2.08325L2.08337 2.67075L4.41254 4.99992L2.08337 7.32909L2.67087 7.91659L5.00004 5.58742L7.32921 7.91659L7.91671 7.32909L5.58754 4.99992L7.91671 2.67075Z"
                            fill="#616161"
                          />
                        </svg>
                      </div>
                      <div className="filterChip">
                        <span>bracelets</span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.91671 2.67075L7.32921 2.08325L5.00004 4.41242L2.67087 2.08325L2.08337 2.67075L4.41254 4.99992L2.08337 7.32909L2.67087 7.91659L5.00004 5.58742L7.32921 7.91659L7.91671 7.32909L5.58754 4.99992L7.91671 2.67075Z"
                            fill="#616161"
                          />
                        </svg>
                      </div>
                      <div className="filterChip">
                        <span>bracelets</span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.91671 2.67075L7.32921 2.08325L5.00004 4.41242L2.67087 2.08325L2.08337 2.67075L4.41254 4.99992L2.08337 7.32909L2.67087 7.91659L5.00004 5.58742L7.32921 7.91659L7.91671 7.32909L5.58754 4.99992L7.91671 2.67075Z"
                            fill="#616161"
                          />
                        </svg>
                      </div>
                      <div className="filterChip">
                        <span>bracelets</span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.91671 2.67075L7.32921 2.08325L5.00004 4.41242L2.67087 2.08325L2.08337 2.67075L4.41254 4.99992L2.08337 7.32909L2.67087 7.91659L5.00004 5.58742L7.32921 7.91659L7.91671 7.32909L5.58754 4.99992L7.91671 2.67075Z"
                            fill="#616161"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="accordion" id="accordionCategory">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span>SHOP BY CATEGORY</span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10.2344L12 15.2344L17 10.2344H7Z"
                                fill="#333232"
                              />
                            </svg>
                          </button>
                        </h2>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionCategory"
                      >
                        <div className="card-body">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="bracelets"
                            />
                            <label
                              className="custom-control-label"
                              for="bracelets"
                            >
                              bracelets
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brooches"
                            />
                            <label
                              className="custom-control-label"
                              for="brooches"
                            >
                              brooches
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="rings"
                            />
                            <label className="custom-control-label" for="rings">
                              rings
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="earrings"
                            />
                            <label
                              className="custom-control-label"
                              for="earrings"
                            >
                              earrings
                            </label>
                          </div>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="necklaces"
                            />
                            <label
                              className="custom-control-label"
                              for="necklaces"
                            >
                              necklaces
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="whatNew"
                            />
                            <label
                              className="custom-control-label"
                              for="whatNew"
                            >
                              what's new
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="treasures"
                            />
                            <label
                              className="custom-control-label"
                              for="treasures"
                            >
                              tiny treasures
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="trends"
                            />
                            <label
                              className="custom-control-label"
                              for="trends"
                            >
                              spring summer trends
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="readyShip"
                            />
                            <label
                              className="custom-control-label"
                              for="readyShip"
                            >
                              ready to ship
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="engagement"
                            />
                            <label
                              className="custom-control-label"
                              for="engagement"
                            >
                              engagement
                            </label>
                          </div>

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="anklets"
                            />
                            <label
                              className="custom-control-label"
                              for="anklets"
                            >
                              anklets
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="exclusives"
                            />
                            <label
                              className="custom-control-label"
                              for="exclusives"
                            >
                              auverture exclusives
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="singlEarrings"
                            />
                            <label
                              className="custom-control-label"
                              for="singlEarrings"
                            >
                              single earrings
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="united"
                            />
                            <label
                              className="custom-control-label"
                              for="united"
                            >
                              auverture united
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span>DESIGNERS</span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10.2344L12 15.2344L17 10.2344H7Z"
                                fill="#333232"
                              />
                            </svg>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionCategory"
                      >
                        <div className="card-body">
                          <a href="#">bracelets</a>
                          <a href="#">brooches</a>
                          <a href="#">rings</a>
                          <a href="#">earrings</a>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <span>OCCASION</span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10.2344L12 15.2344L17 10.2344H7Z"
                                fill="#333232"
                              />
                            </svg>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionCategory"
                      >
                        <div className="card-body">
                          <a href="#">bracelets</a>
                          <a href="#">brooches</a>
                          <a href="#">rings</a>
                          <a href="#">earrings</a>
                          <a href="#">necklaces</a>
                          <a href="#">what's new</a>
                          <a href="#">tiny treasures</a>
                          <a href="#">spring summer trends</a>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <span>MATERIAL</span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10.2344L12 15.2344L17 10.2344H7Z"
                                fill="#333232"
                              />
                            </svg>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordionCategory"
                      >
                        <div className="card-body">
                          <a href="#">bracelets</a>
                          <a href="#">brooches</a>
                          <a href="#">anklets</a>
                          <a href="#">auverture exclusives</a>
                          <a href="#">single earrings</a>
                          <a href="#">auverture united</a>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFive">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <span>PRICE</span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 10.2344L12 15.2344L17 10.2344H7Z"
                                fill="#333232"
                              />
                            </svg>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse show"
                        aria-labelledby="headingFive"
                        data-parent="#accordionCategory"
                      >
                        <div className="card-body">
                          <div className="form-group priceRange">
                            <input
                              type="range"
                              className="form-control-range"
                              id="formControlRange"
                            />
                            <div className="d-flex justify-content-between align-items-center">
                              <label for="formControlRange">6,850</label>
                              <label for="formControlRange">68,500</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resetWrap">
                    <button type="button" className="btn btnReset">
                      RESET
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-lg-9">
                <div className="topBar d-none d-md-flex">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Shop
                      </li>
                    </ol>
                  </nav>
                  <div className="sortBy">
                    <label>Sort By:</label>
                    {/* <!-- <div className="selectWrap"> -->
                                <!-- <select className="form-control">
                                        <option value="Recommendation">Recommendation</option>
                                        <option value="Trending">Trending</option>
                                        <option value="Recommendation">Recommendation</option>
                                        <option value="Recommendation">Recommendation</option>
                                    </select>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10.2344L12 15.2344L17 10.2344H7Z" fill="#333232" />
                                    </svg> --> */}
                    <div className="dropdown">
                      <a
                        className="btn sortBtn dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Recommendations
                      </a>

                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item active" href="#">
                          Best Sellers
                        </a>
                        <a className="dropdown-item" href="#">
                          New Arrivals
                        </a>
                        <a className="dropdown-item" href="#">
                          Price high to low
                        </a>
                        <a className="dropdown-item" href="#">
                          Price low to high
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                <div className="shopGrid">
                  <div className="row">
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>AMATHIST ROUND DOUBLE RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>AMATHIST ROUND DOUBLE RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 order-lg-1 mb-5 mb-lg-0">
                      <div className="sideBanner">
                        <div className="bgWrap">
                          <a href="#" className="btn lookShop">
                            <svg
                              width="17"
                              height="19"
                              viewBox="0 0 17 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.5 1L1 4.4V16.3C1 16.7509 1.17559 17.1833 1.48816 17.5021C1.80072 17.8209 2.22464 18 2.66667 18H14.3333C14.7754 18 15.1993 17.8209 15.5118 17.5021C15.8244 17.1833 16 16.7509 16 16.3V4.4L13.5 1H3.5Z"
                                stroke="#424040"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M1 4.3999H16"
                                stroke="#424040"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M11.8332 7.80005C11.8332 8.70178 11.482 9.56659 10.8569 10.2042C10.2317 10.8418 9.38389 11.2 8.49984 11.2C7.61578 11.2 6.76794 10.8418 6.14281 10.2042C5.51769 9.56659 5.1665 8.70178 5.1665 7.80005"
                                stroke="#424040"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span>Shop the look</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="shopItem">
                            <div className="imgWrap">
                              <img
                                className="img-fluid"
                                src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="itemDetails">
                              <div className="itemTitle">
                                <h5>COSMIC OPEN RING</h5>
                                <a href="#">
                                  <svg
                                    className="heartLine"
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
                                  <svg
                                    className="heartFill"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="20"
                                      height="18.35"
                                      fill="white"
                                    />
                                    <path
                                      d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                      fill="#84766F"
                                    />
                                  </svg>
                                </a>
                              </div>

                              <span className="itemBy">By Tomasz Donocik</span>

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
                        </div>
                        <div className="col-6">
                          <div className="shopItem">
                            <div className="imgWrap">
                              <img
                                className="img-fluid"
                                src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="itemDetails">
                              <div className="itemTitle">
                                <h5>COSMIC OPEN RING</h5>
                                <a href="#">
                                  <svg
                                    className="heartLine"
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
                                  <svg
                                    className="heartFill"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="20"
                                      height="18.35"
                                      fill="white"
                                    />
                                    <path
                                      d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                      fill="#84766F"
                                    />
                                  </svg>
                                </a>
                              </div>

                              <span className="itemBy">By Tomasz Donocik</span>

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
                        </div>
                        <div className="col-6">
                          <div className="shopItem">
                            <div className="imgWrap">
                              <img
                                className="img-fluid"
                                src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="itemDetails">
                              <div className="itemTitle">
                                <h5>COSMIC OPEN RING</h5>
                                <a href="#">
                                  <svg
                                    className="heartLine"
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
                                  <svg
                                    className="heartFill"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="20"
                                      height="18.35"
                                      fill="white"
                                    />
                                    <path
                                      d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                      fill="#84766F"
                                    />
                                  </svg>
                                </a>
                              </div>

                              <span className="itemBy">By Tomasz Donocik</span>

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
                        </div>
                        <div className="col-6">
                          <div className="shopItem">
                            <div className="imgWrap">
                              <img
                                className="img-fluid"
                                src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="itemDetails">
                              <div className="itemTitle">
                                <h5>COSMIC OPEN RING</h5>
                                <a href="#">
                                  <svg
                                    className="heartLine"
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
                                  <svg
                                    className="heartFill"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="20"
                                      height="18.35"
                                      fill="white"
                                    />
                                    <path
                                      d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                      fill="#84766F"
                                    />
                                  </svg>
                                </a>
                              </div>

                              <span className="itemBy">By Tomasz Donocik</span>

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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                    <div className="col-6 col-lg-3">
                      <div className="shopItem">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/d3d3d3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemDetails">
                          <div className="itemTitle">
                            <h5>COSMIC OPEN RING</h5>
                            <a href="#">
                              <svg
                                className="heartLine"
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
                              <svg
                                className="heartFill"
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="20" height="18.35" fill="white" />
                                <path
                                  d="M14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                                  fill="#84766F"
                                />
                              </svg>
                            </a>
                          </div>

                          <span className="itemBy">By Tomasz Donocik</span>

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
                    </div>
                  </div>
                </div>
                <div className="btnWrap">
                  <button type="button" className="btn loadMore">
                    LOAD MORE
                  </button>
                  <button type="button" className="btn backTop">
                    <span>BACK TO TOP</span>{" "}
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
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  }
}
export default Shop;
