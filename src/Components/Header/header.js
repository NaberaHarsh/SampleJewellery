import React, { Component, Fragment } from "react";
import "../Home/home.css";

class Header extends Component {
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
      </body>
    );
  }
}
export default Header;
