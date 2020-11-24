import React, { Component, Fragment } from "react";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>
        <header className="headerAmrutam">
          <div className="topHeader row">
            <div className="col-lg-4">
              <div className="securePayment">
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9 4H2.1V2H18.9V4ZM18.9 14H2.1V8H18.9V14ZM18.9 0H2.1C0.9345 0 0 0.89 0 2V14C0 14.5304 0.221249 15.0391 0.615076 15.4142C1.0089 15.7893 1.54305 16 2.1 16H18.9C19.457 16 19.9911 15.7893 20.3849 15.4142C20.7787 15.0391 21 14.5304 21 14V2C21 0.89 20.055 0 18.9 0Z"
                    fill="black"
                    fill-opacity="0.47"
                  />
                </svg>
                <span>Secure Payment</span>
              </div>
            </div>
            <div className="col-lg-4">
              <a href="#" className="brandLg">
                <img
                  className="img-fluid"
                  src="https://photos.angel.co/startups/i/7310596-61638d95a6e4ae3eefe9454badaa4ea5-medium_jpg.jpg?buster=1573556992"
                  alt="Brand Logo"
                  height="46"
                  width="46"
                />
              </a>
            </div>
            <div className="col-lg-4">
              <div className="freeShipping">
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0699 8.4107C20.8599 7.4108 20.0299 6.81086 19.2299 7.08583L13.9199 8.86065L6.99986 0.823975L5.08986 1.46141L9.22987 10.423L4.25985 12.0853L2.28985 10.1605L0.839844 10.648L2.65985 14.5976L3.42985 16.2599L5.02986 15.7349L10.3399 13.9476L14.6899 12.4978L19.9999 10.7355C20.8099 10.4355 21.2799 9.41059 21.0699 8.4107Z"
                    fill="black"
                    fill-opacity="0.47"
                  />
                </svg>
                <span>
                  Free express delivery and returns. <strong>more info</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="midHeader">
            <div className="genType">
              <span className="active">Women</span>
              <span>Men</span>
            </div>
            <div className="searchBar">
              <div className="searchWrap">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.22222 13.4454C10.6587 13.4454 13.4444 10.6596 13.4444 7.2232C13.4444 3.78676 10.6587 1.00098 7.22222 1.00098C3.78578 1.00098 1 3.78676 1 7.2232C1 10.6596 3.78578 13.4454 7.22222 13.4454Z"
                    stroke="#84766F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 15.001L11.6167 11.6177"
                    stroke="#84766F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  type="search"
                  className="form-control"
                  placeholder="What are you looking for?"
                />
              </div>
            </div>
            <div className="buttonWrap">
              <a href="#">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0C8.49456 0 9.44839 0.395088 10.1517 1.09835C10.8549 1.80161 11.25 2.75544 11.25 3.75C11.25 4.74456 10.8549 5.69839 10.1517 6.40165C9.44839 7.10491 8.49456 7.5 7.5 7.5C6.50544 7.5 5.55161 7.10491 4.84835 6.40165C4.14509 5.69839 3.75 4.74456 3.75 3.75C3.75 2.75544 4.14509 1.80161 4.84835 1.09835C5.55161 0.395088 6.50544 0 7.5 0ZM7.5 9.375C11.6438 9.375 15 11.0531 15 13.125V15H0V13.125C0 11.0531 3.35625 9.375 7.5 9.375Z"
                    fill="#84766F"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 1L1 4.4V16.3C1 16.7509 1.17559 17.1833 1.48816 17.5021C1.80072 17.8209 2.22464 18 2.66667 18H14.3333C14.7754 18 15.1993 17.8209 15.5118 17.5021C15.8244 17.1833 16 16.7509 16 16.3V4.4L13.5 1H3.5Z"
                    stroke="#84766F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 4.3999H16"
                    stroke="#84766F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.8332 7.80005C11.8332 8.70178 11.482 9.56659 10.8569 10.2042C10.2317 10.8418 9.38389 11.2 8.49984 11.2C7.61578 11.2 6.76794 10.8418 6.14281 10.2042C5.51769 9.56659 5.1665 8.70178 5.1665 7.80005"
                    stroke="#84766F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.86583 6.16708C4.00583 8.4075 5.8425 10.2442 8.08292 11.3842L9.82458 9.6425C10.0463 9.42083 10.355 9.3575 10.6321 9.44458C11.5188 9.7375 12.4688 9.89583 13.4583 9.89583C13.6683 9.89583 13.8697 9.97924 14.0181 10.1277C14.1666 10.2762 14.25 10.4775 14.25 10.6875V13.4583C14.25 13.6683 14.1666 13.8697 14.0181 14.0181C13.8697 14.1666 13.6683 14.25 13.4583 14.25C9.88896 14.25 6.46578 12.8321 3.94185 10.3081C1.41793 7.78422 0 4.36104 0 0.791667C0 0.581704 0.0834075 0.38034 0.231874 0.231874C0.38034 0.0834075 0.581704 0 0.791667 0H3.5625C3.77246 0 3.97383 0.0834075 4.12229 0.231874C4.27076 0.38034 4.35417 0.581704 4.35417 0.791667C4.35417 1.78125 4.5125 2.73125 4.80542 3.61792C4.8925 3.895 4.82917 4.20375 4.6075 4.42542L2.86583 6.16708Z"
                    fill="#84766F"
                  />
                </svg>
              </a>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg navbar-light py-0">
            <div className="container-fluid">
              <div className="mobNavWrap">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    width="30"
                    height="18"
                    viewBox="0 0 30 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 17H18"
                      stroke="#84766F"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 9H29"
                      stroke="#84766F"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 1H29"
                      stroke="#84766F"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <a className="navbar-brand d-lg-none mr-0" href="#">
                  <img
                    className="img-fluid"
                    src="https://photos.angel.co/startups/i/7310596-61638d95a6e4ae3eefe9454badaa4ea5-medium_jpg.jpg?buster=1573556992"
                    alt="Brand Logo"
                    height="46"
                    width="46"
                  />
                </a>
                <div className="buttonWrap d-lg-none">
                  <a href="#">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.22222 13.4454C10.6587 13.4454 13.4444 10.6596 13.4444 7.2232C13.4444 3.78676 10.6587 1.00098 7.22222 1.00098C3.78578 1.00098 1 3.78676 1 7.2232C1 10.6596 3.78578 13.4454 7.22222 13.4454Z"
                        stroke="#84766F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 15.001L11.6167 11.6177"
                        stroke="#84766F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      width="17"
                      height="19"
                      viewBox="0 0 17 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 1L1 4.4V16.3C1 16.7509 1.17559 17.1833 1.48816 17.5021C1.80072 17.8209 2.22464 18 2.66667 18H14.3333C14.7754 18 15.1993 17.8209 15.5118 17.5021C15.8244 17.1833 16 16.7509 16 16.3V4.4L13.5 1H3.5Z"
                        stroke="#84766F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 4.3999H16"
                        stroke="#84766F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.8332 7.80005C11.8332 8.70178 11.482 9.56659 10.8569 10.2042C10.2317 10.8418 9.38389 11.2 8.49984 11.2C7.61578 11.2 6.76794 10.8418 6.14281 10.2042C5.51769 9.56659 5.1665 8.70178 5.1665 7.80005"
                        stroke="#84766F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="d-lg-none">
                  <div className="menuClose">
                    <span>Menu</span>
                    <a
                      href="#"
                      className="closeBtn"
                      id="btnClose"
                      onclick="closeBtn()"
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
                  <div className="genType">
                    <span className="active">Women</span>
                    <span>Men</span>
                  </div>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <div
                      class="dropdown-menu megaMenu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div class="container">
                        <div class="row">
                          <div class="col-12 d-lg-none">
                            <div class="menuClose">
                              <span>Back</span>
                              <a
                                href="#"
                                class="closeBtn"
                                id="btnClose"
                                onclick="closeBtn()"
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
                            <div class="subMenu">SHOP</div>
                          </div>
                          <div class="col-lg-5">
                            <div class="row">
                              <div class="col-12">
                                <h4>FEATURED</h4>
                              </div>
                              <div class="col-sm-12">
                                <div class="row">
                                  <div class="col-6">
                                    <ul class="list-unstyled">
                                      <li>
                                        <a href="#">spring summer trends</a>
                                      </li>
                                      <li>
                                        <a href="#">what's new</a>
                                      </li>
                                      <li>
                                        <a href="#">tiny treasures</a>
                                      </li>
                                      <li>
                                        <a href="#">auverture exclusive</a>
                                      </li>
                                      <li>
                                        <a href="#">engagement</a>
                                      </li>
                                      <li>
                                        <a href="#">fine jewellery gifts</a>
                                      </li>
                                      <li class="d-none d-sm-block">
                                        <a href="#">show all</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="col-6">
                                    <ul class="list-unstyled">
                                      <li>
                                        <a href="#">spring summer trends</a>
                                      </li>
                                      <li>
                                        <a href="#">what's new</a>
                                      </li>
                                      <li>
                                        <a href="#">tiny treasures</a>
                                      </li>
                                      <li>
                                        <a href="#">auverture exclusive</a>
                                      </li>
                                      <li>
                                        <a href="#">engagement</a>
                                      </li>
                                      <li>
                                        <a href="#">fine jewellery gifts</a>
                                      </li>
                                      <li>
                                        <a href="#">show all</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-6 mt-4 mt-sm-0 d-sm-none">
                                <h4>CATEGORIES</h4>
                                <ul class="list-unstyled">
                                  <li>
                                    <a href="#">rings</a>
                                  </li>
                                  <li>
                                    <a href="#">bracelets</a>
                                  </li>
                                  <li>
                                    <a href="#">earrings</a>
                                  </li>
                                  <li>
                                    <a href="#">single earrings</a>
                                  </li>
                                  <li>
                                    <a href="#">necklaces</a>
                                  </li>
                                  <li>
                                    <a href="#">brooches</a>
                                  </li>
                                  <li>
                                    <a href="#">show all</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-7 d-none d-sm-block mt-4 mt-lg-0">
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="imgWrap">
                                  <img
                                    class="img-fluid"
                                    src="https://dummyimage.com/348x250/d3d3d3/fff.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="imgWrap">
                                  <img
                                    class="img-fluid"
                                    src="https://dummyimage.com/348x250/d3d3d3/fff.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Designers
                    </a>
                    <div
                      className="dropdown-menu megaMenu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="container">
                        <div className="row w-100">
                          <div className="col-12 d-lg-none">
                            <div className="menuClose">
                              <span>Back</span>
                              <a
                                href="#"
                                className="closeBtn"
                                id="btnClose"
                                onclick="closeBtn()"
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
                            <div className="subMenu">SHOP</div>
                          </div>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-12">
                                <h4>DESIGNER</h4>
                              </div>
                              <div className="col-sm-12">
                                <div className="row">
                                  <div className="col-6 col-lg-3">
                                    <ul className="list-unstyled">
                                      <li>
                                        <a href="#">spring summer trends</a>
                                      </li>
                                      <li>
                                        <a href="#">what's new</a>
                                      </li>
                                      <li>
                                        <a href="#">tiny treasures</a>
                                      </li>
                                      <li>
                                        <a href="#">auverture exclusive</a>
                                      </li>
                                      <li>
                                        <a href="#">engagement</a>
                                      </li>
                                      <li>
                                        <a href="#">fine jewellery gifts</a>
                                      </li>
                                      <li className="d-none">
                                        <a href="#">show all</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 col-lg-3">
                                    <ul className="list-unstyled">
                                      <li>
                                        <a href="#">spring summer trends</a>
                                      </li>
                                      <li>
                                        <a href="#">what's new</a>
                                      </li>
                                      <li>
                                        <a href="#">tiny treasures</a>
                                      </li>
                                      <li>
                                        <a href="#">auverture exclusive</a>
                                      </li>
                                      <li>
                                        <a href="#">engagement</a>
                                      </li>
                                      <li>
                                        <a href="#">fine jewellery gifts</a>
                                      </li>
                                      <li>
                                        <a href="#" className="d-none">
                                          show all
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 col-lg-3">
                                    <ul className="list-unstyled">
                                      <li>
                                        <a href="#">spring summer trends</a>
                                      </li>
                                      <li>
                                        <a href="#">what's new</a>
                                      </li>
                                      <li>
                                        <a href="#">tiny treasures</a>
                                      </li>
                                      <li>
                                        <a href="#">auverture exclusive</a>
                                      </li>
                                      <li>
                                        <a href="#">engagement</a>
                                      </li>
                                      <li>
                                        <a href="#">fine jewellery gifts</a>
                                      </li>
                                      <li>
                                        <a href="#" className="d-none">
                                          show all
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6 col-lg-3">
                                    <ul className="list-unstyled">
                                      <li>
                                        <a href="#">spring summer trends</a>
                                      </li>
                                      <li>
                                        <a href="#">what's new</a>
                                      </li>
                                      <li>
                                        <a href="#">tiny treasures</a>
                                      </li>
                                      <li>
                                        <a href="#">auverture exclusive</a>
                                      </li>
                                      <li>
                                        <a href="#">engagement</a>
                                      </li>
                                      <li>
                                        <a href="#">fine jewellery gifts</a>
                                      </li>
                                      <li>
                                        <a href="#">show all</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 mt-4 mt-sm-0 d-none">
                                <h4>CATEGORIES</h4>
                                <ul className="list-unstyled">
                                  <li>
                                    <a href="#">rings</a>
                                  </li>
                                  <li>
                                    <a href="#">bracelets</a>
                                  </li>
                                  <li>
                                    <a href="#">earrings</a>
                                  </li>
                                  <li>
                                    <a href="#">single earrings</a>
                                  </li>
                                  <li>
                                    <a href="#">necklaces</a>
                                  </li>
                                  <li>
                                    <a href="#">brooches</a>
                                  </li>
                                  <li>
                                    <a href="#">show all</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 d-none d-sm-block mt-4 mt-lg-0 mt-lg-3">
                            <div className="imgWrap">
                              <img
                                className="img-fluid"
                                src="https://dummyimage.com/348x250/d3d3d3/fff.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Occasion
                    </a>
                    <div
                      className="dropdown-menu megaMenu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="container">
                        <div className="row w-100">
                          <div className="col-12 d-lg-none">
                            <div className="menuClose">
                              <span>Back</span>
                              <a
                                href="#"
                                className="closeBtn"
                                id="btnClose"
                                onclick="closeBtn()"
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
                            <div className="subMenu">SHOP</div>
                          </div>
                          <div className="col-lg-5">
                            <div className="row">
                              <div className="col-12">
                                <h4>OCCASION</h4>
                              </div>
                              <div className="col-sm-12">
                                <div className="row">
                                  <div className="col-6">
                                    <ul className="list-unstyled">
                                      <li>
                                        <a href="#">spring summer trends</a>
                                      </li>
                                      <li>
                                        <a href="#">what's new</a>
                                      </li>
                                      <li>
                                        <a href="#">tiny treasures</a>
                                      </li>
                                      <li>
                                        <a href="#">auverture exclusive</a>
                                      </li>
                                      <li>
                                        <a href="#">engagement</a>
                                      </li>
                                      <li>
                                        <a href="#">fine jewellery gifts</a>
                                      </li>
                                      <li className="d-none d-sm-block">
                                        <a href="#">show all</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-6">
                                    <ul className="list-unstyled">
                                      <li>
                                        <a href="#">spring summer trends</a>
                                      </li>
                                      <li>
                                        <a href="#">what's new</a>
                                      </li>
                                      <li>
                                        <a href="#">tiny treasures</a>
                                      </li>
                                      <li>
                                        <a href="#">auverture exclusive</a>
                                      </li>
                                      <li>
                                        <a href="#">engagement</a>
                                      </li>
                                      <li>
                                        <a href="#">fine jewellery gifts</a>
                                      </li>
                                      <li>
                                        <a href="#">show all</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 mt-4 mt-sm-0 d-sm-none">
                                <h4>CATEGORIES</h4>
                                <ul className="list-unstyled">
                                  <li>
                                    <a href="#">rings</a>
                                  </li>
                                  <li>
                                    <a href="#">bracelets</a>
                                  </li>
                                  <li>
                                    <a href="#">earrings</a>
                                  </li>
                                  <li>
                                    <a href="#">single earrings</a>
                                  </li>
                                  <li>
                                    <a href="#">necklaces</a>
                                  </li>
                                  <li>
                                    <a href="#">brooches</a>
                                  </li>
                                  <li>
                                    <a href="#">show all</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7 d-none d-sm-block mt-4 mt-lg-0">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="imgWrap">
                                  <img
                                    className="img-fluid"
                                    src="https://dummyimage.com/348x250/d3d3d3/fff.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="imgWrap">
                                  <img
                                    className="img-fluid"
                                    src="https://dummyimage.com/348x250/d3d3d3/fff.jpg"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Discover
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gifts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Sale
                    </a>
                  </li>
                  <li className="nav-item d-lg-none">
                    <a className="nav-link" href="#">
                      Account
                    </a>
                  </li>
                  <li className="nav-item d-lg-none">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="freeShippingMob">
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0699 8.4107C20.8599 7.4108 20.0299 6.81086 19.2299 7.08583L13.9199 8.86065L6.99986 0.823975L5.08986 1.46141L9.22987 10.423L4.25985 12.0853L2.28985 10.1605L0.839844 10.648L2.65985 14.5976L3.42985 16.2599L5.02986 15.7349L10.3399 13.9476L14.6899 12.4978L19.9999 10.7355C20.8099 10.4355 21.2799 9.41059 21.0699 8.4107Z"
                fill="black"
                fill-opacity="0.47"
              />
            </svg>
            <span>FREE SHIPPING ON ALL ORDERS</span>
          </div>
        </header>

        <main>
          <section className="bannerSection homeBanner">
            <div className="container customContainer">
              <div className="bannerContent">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://dummyimage.com/1290x470/d3d3d3/fff.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://dummyimage.com/1290x470/d3d3d3/fff.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://dummyimage.com/1290x470/d3d3d3/fff.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    {/* <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span> */}
                    <svg
                      width="17"
                      height="33"
                      viewBox="0 0 17 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 31.084L1 16.084L16 1.08398"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    {/* <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span> */}
                    <svg
                      width="17"
                      height="33"
                      viewBox="0 0 17 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 31.084L16 16.084L1 1.08398"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="cateSlider sliderWrap">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h3>CATEGORIES</h3>
                </div>
              </div>
              <div className="row homeSlider">
                <div className="col-lg-2 mx-auto">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>EARRING</p>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>NECKPIECE</p>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>RING</p>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>
                      BANGLE <br /> & BRACELET
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>
                      HEAD <br /> ACCESSORIES
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>COSMIC OPEN RING</p>
                  </div>
                </div>
                <div className="col-lg-2 mx-auto">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>COSMIC OPEN RING</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="disOcc">
            <div class="container">
              <div class="row position-relative">
                <div class="disHeading mb-5 mb-lg-0 text-center">
                  <h3 class="titleHeading">
                    DISCOVER BY <span>OCCASION</span>
                  </h3>
                </div>
                <div class="col-6 col-lg-4 mb-4">
                  <div class="disItem">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 class="disCaption">HOLIDAY</h5>
                  </div>
                </div>
                <div class="col-6 col-lg-4 mb-4">
                  <div class="disItem secItem">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 class="disCaption">FESTIVE</h5>
                  </div>
                </div>
                <div class="col-6 col-lg-4 mb-4">
                  <div class="disItem">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 class="disCaption">COCKTAIL</h5>
                  </div>
                </div>
                <div class="col-6 col-lg-4 mb-4">
                  <div class="disItem">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 class="disCaption">CASUAL</h5>
                  </div>
                </div>
                <div class="col-6 col-lg-4 mb-4">
                  <div class="disItem fifItem">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 class="disCaption">WEDDING</h5>
                  </div>
                </div>
                <div class="col-6 col-lg-4 mb-4">
                  <div class="disItem">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 class="disCaption">WORK-WEAR</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="wideSection whatNew">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-8 order-lg-1">
                  <div className="bgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/874x425/d3d3d3/fff.jpg"
                      alt=""
                    />
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

          <section className="designersMeet sliderWrap">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="titleHeading">MEET THE DESIGNER</h3>
                </div>
              </div>
              <div className="row designerSlider">
                <div className="col-md-6 col-lg-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="designersCard">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="designBy">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/150x150/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="designerTitle">
                          <em>Cosmic Open Ring</em>
                          <em>By</em>
                          <h5>MITALI JAIN</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="designersCard">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="designBy">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/150x150/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="designerTitle">
                          <em>Cosmic Open Ring</em>
                          <em>By</em>
                          <h5>MITALI JAIN</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="designersCard">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="designBy">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/150x150/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="designerTitle">
                          <em>Cosmic Open Ring</em>
                          <em>By</em>
                          <h5>MITALI JAIN</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="designersCard">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="designBy">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/150x150/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="designerTitle">
                          <em>Cosmic Open Ring</em>
                          <em>By</em>
                          <h5>MITALI JAIN</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="designersCard">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="designBy">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/150x150/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="designerTitle">
                          <em>Cosmic Open Ring</em>
                          <em>By</em>
                          <h5>MITALI JAIN</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="row">
                    <div className="col-6">
                      <div className="designersCard">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="designBy">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/150x150/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="designerTitle">
                          <em>Cosmic Open Ring</em>
                          <em>By</em>
                          <h5>MITALI JAIN</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="shopLook">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h3 className="titleHeading">SHOP THE LOOK</h3>
                  <em className="titleCaption">What are you celebrating?</em>
                  <div className="imgWrapLg">
                    <img
                      className="img-fluid d-md-none"
                      src="https://dummyimage.com/450x650/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="sliderContent">
                    <h3 className="titleHeading">GOLD JEWELLERY</h3>
                    <em className="titleCaption">What are you celebrating?</em>
                    <a href="#" className="viewAll">
                      <span>View all</span>
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
                    <div className="row jewellerySlider mb-5 pb-5">
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sliderContent">
                    <h3 className="titleHeading">SLIVER JEWELLERY</h3>
                    <em className="titleCaption">What are you celebrating?</em>
                    <a href="#" className="viewAll">
                      <span>View all</span>
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
                    <div className="row jewellerySlider pb-5">
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 mx-auto">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="wideSection aboutAmrutam">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-8">
                  <div className="bgWrap"></div>
                </div>
                <div className="col-lg-4">
                  <div className="contentWrap">
                    <h3>ABOUT</h3>
                    <h4>Amrutam</h4>
                    <p>
                      At Amrutam, discover unusual luxury pieces that we have
                      scoured the world to find. We specialise in unique,
                      designer fine jewellery, dreamt up by artists and brought
                      to life by skilled craftspeople in under-the-radar
                      ateliers and workshops scattered across the globe.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="blogPost">
            <div class="container">
              <div class="row">
                <div class="col-md-12 mb-5">
                  <h3 class="titleHeading">ALL BLOG POSTS</h3>
                </div>

                <div class="col-6 col-lg-3 mb-4">
                  <div class="blogCard">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/300x275/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <em>Publications</em>
                    <h5>
                      OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                    </h5>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-4">
                  <div class="blogCard">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/300x275/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <em>Publications</em>
                    <h5>
                      OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                    </h5>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-4">
                  <div class="blogCard">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/300x275/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <em>Publications</em>
                    <h5>
                      OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                    </h5>
                  </div>
                </div>
                <div class="col-6 col-lg-3 mb-4">
                  <div class="blogCard">
                    <div class="imgWrap">
                      <img
                        class="img-fluid"
                        src="https://dummyimage.com/300x275/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <em>Publications</em>
                    <h5>
                      OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="findGift meetDesigner">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <div className="bgWrap"></div>
                </div>
                <div className="col-lg-4">
                  <div className="designerWrap">
                    <h3>Find Your Perfect Gift</h3>
                    <h5>What are you celebrating?</h5>

                    <hr />

                    <div className="tagsWrap">
                      <span>Achievement</span>
                      <span>Birthday</span>
                      <span>Anniversary</span>
                      <span>Graduation</span>
                      <span>Mum & Babies</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bgWrap d-none d-lg-block"></div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="amrutamFooter">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 order-lg-2 text-center text-md-left">
                <h5>Sign up for our news letters</h5>
                <p>
                  Be the first to know about new designer launches, exclusive
                  collections, latest trends, stories and more.
                </p>
                <div className="inputWrap">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your e-mail address"
                  />
                </div>
                <button className="btn btn-outline-dark">SUBMIT</button>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="row">
                  <div className="col-6">
                    <h5>Information</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Returns & Exchanges</a>
                      </li>
                      <li>
                        <a href="#">Shipping Information</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy & Cookies</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <h5>Amrutam</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Discover Designers</a>
                      </li>
                      <li>
                        <a href="#">Journal</a>
                      </li>
                      <li>
                        <a href="#">Refer a friend</a>
                      </li>
                      <li>
                        <a href="#">Gift</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-3 mb-lg-4 text-center text-md-left">
                <h5>Services</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="tel:+91-9871024847">Need help? +91-9871024847</a>
                  </li>
                  <li>
                    <a href="mailto:info@amrutamjewelry.com">
                      Available from Mon-Sat from 10am-8pm IST or 24/7 at
                      <br /> info@amrutamjewelry.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@amrutamjewelry.com">
                      For designers info@amrutamjewelry.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row subFooter">
              <div className="col text-center">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.04004C6.5 2.04004 2 6.53004 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85004C10.44 7.34004 11.93 5.96004 14.22 5.96004C15.31 5.96004 16.45 6.15004 16.45 6.15004V8.62004H15.19C13.95 8.62004 13.56 9.39004 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3856 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53004 17.5 2.04004 12 2.04004Z"
                      fill="#84766F"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                      fill="#84766F"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04 21.54C10 21.83 10.97 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.25 4.67 19.9 8.44 21.34C8.35 20.56 8.26 19.27 8.44 18.38L9.59 13.44C9.59 13.44 9.3 12.86 9.3 11.94C9.3 10.56 10.16 9.53 11.14 9.53C12 9.53 12.4 10.16 12.4 10.97C12.4 11.83 11.83 13.06 11.54 14.24C11.37 15.22 12.06 16.08 13.06 16.08C14.84 16.08 16.22 14.18 16.22 11.5C16.22 9.1 14.5 7.46 12.03 7.46C9.21 7.46 7.55 9.56 7.55 11.77C7.55 12.63 7.83 13.5 8.29 14.07C8.38 14.13 8.38 14.21 8.35 14.36L8.06 15.45C8.06 15.62 7.95 15.68 7.78 15.56C6.5 15 5.76 13.18 5.76 11.71C5.76 8.55 8 5.68 12.32 5.68C15.76 5.68 18.44 8.15 18.44 11.43C18.44 14.87 16.31 17.63 13.26 17.63C12.29 17.63 11.34 17.11 11 16.5L10.33 18.87C10.1 19.73 9.47 20.88 9.04 21.57V21.54Z"
                      fill="#84766F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}

export default Home;
