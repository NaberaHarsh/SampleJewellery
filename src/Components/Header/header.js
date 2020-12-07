import React, { Component, Fragment } from "react";
import "../Home/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddressButton from "../AddressButton/addressButton";
import { withWidth } from "@material-ui/core";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      cartOpen: false,
      shop: false,
      designer: false,
      occassion: false,
      openMenu: false,
      wishlist: false,
    };
  }

  handleMenu = (e) => {
    this.setState({ openMenu: e.target });
  };

  handleCloseDropdown = () => {
    this.setState({
      shop: false,
      designer: false,
      occassion: false,
      showFilter: false,
    });
  };

  handleFilter = () => {
    this.setState(
      {
        showFilter: !this.state.showFilter,
        cartOpen: false,
        shop: false,
        designer: false,
        occassion: false,
        wishlist: false,
      },
      () => console.log(this.state.showFilter)
    );
  };
  handleCartOpen = () => {
    this.setState(
      {
        cartOpen: !this.state.cartOpen,
        showFilter: false,
        shop: false,
        designer: false,
        occassion: false,
        wishlist: false,
      },
      () => console.log(this.state.cartOpen)
    );
  };

  handleShop = () => {
    this.setState(
      {
        shop: !this.state.shop,
        cartOpen: false,
        designer: false,
        occassion: false,
        wishlist: false,
      },
      () => console.log(this.state.shop)
    );
  };
  handleDesigner = () => {
    this.setState({
      designer: !this.state.designer,
      cartOpen: false,
      shop: false,
      occassion: false,
      wishlist: false,
    });
  };
  handleOccassion = () => {
    this.setState({
      occassion: !this.state.occassion,
      cartOpen: false,
      shop: false,
      designer: false,
      wishlist: false,
    });
  };
  handleWishlist = () => {
    this.setState({
      designer: false,
      cartOpen: false,
      shop: false,
      occassion: false,
      wishlist: !this.state.wishlist,
    });
  };

  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);

    const settings = {
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <body>
        <header className="headerAmrutam ">
          <div className="topHeader row ">
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
              <Link to="/home">
                <a href="#" className="brandLg">
                  <img
                    className="img-fluid"
                    src="https://photos.angel.co/startups/i/7310596-61638d95a6e4ae3eefe9454badaa4ea5-medium_jpg.jpg?buster=1573556992"
                    alt="Brand Logo"
                    height="46"
                    width="46"
                  />
                </a>
              </Link>
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
            <div className="searchBar" style={{ position: "relative" }}>
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
              <a onClick={this.handleMenu}>
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
              <a
                href="#"
                className="mx-4"
                onClick={() => this.handleCartOpen()}
              >
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
              <Link to="/account" style={{ textDecoration: "none" }}>
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
              </Link>
            </div>
          </div>

          <nav
            className="navbar navbar-expand-lg navbar-light py-0"
            style={{ padding: "14px", marginTop: "4px", marginBottom: "4px" }}
          >
            <div className="container-fluid">
              <div className="mobNavWrap">
                <button
                  className="navbar-toggler show"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => this.handleFilter()}
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
                <Link to="/home">
                  {" "}
                  <a className="avbar-brand d-lg-none mr-0 ml-3" href="#">
                    <img
                      className="img-fluid"
                      style={{ marginLeft: "30px" }}
                      src="https://photos.angel.co/startups/i/7310596-61638d95a6e4ae3eefe9454badaa4ea5-medium_jpg.jpg?buster=1573556992"
                      alt="Brand Logo"
                      height="46"
                      width="46"
                    />
                  </a>
                </Link>
                <div className="buttonWrap d-lg-none">
                  <a
                    className=""
                    href="#"
                    role="button"
                    id="dropdownMenuUser"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    // onClick={this.handleMenu}
                  >
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
                  <div class="buttonWrap">
                    <div class="dropdown">
                      <Menu
                        style={{ borderRadius: "none" }}
                        open={Boolean(this.state.openMenu)}
                        anchorEl={this.state.openMenu}
                        onClose={() => this.setState({ openMenu: null })}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <Link to="/account" style={{ textDecoration: "none" }}>
                          {" "}
                          <MenuItem
                            style={{
                              fontfamily: "Avenir",
                              fontWeight: 500,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#616161",
                              padding: "8px 10px 8px 10px",
                            }}
                            onClick={() => this.setState({ openMenu: null })}
                          >
                            {" "}
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
                            <span style={{ padding: "4px 30px 4px 30px" }}>
                              Hi, Aanchal
                            </span>
                          </MenuItem>
                        </Link>
                        <Link to="/account" style={{ textDecoration: "none" }}>
                          <MenuItem
                            style={{
                              fontfamily: "Avenir",
                              fontWeight: 500,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#616161",
                              padding: "8px 10px 8px 10px",
                            }}
                            onClick={() => this.setState({ openMenu: null })}
                          >
                            {" "}
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="16" height="15" fill="white" />
                              <path
                                d="M11.6 0C10.208 0 8.872 0.662125 8 1.70027C7.128 0.662125 5.792 0 4.4 0C1.936 0 0 1.97003 0 4.49591C0 7.57766 2.72 10.1035 6.84 13.921L8 15L9.16 13.921C13.28 10.1035 16 7.57766 16 4.49591C16 1.97003 14.064 0 11.6 0Z"
                                fill="#84766F"
                              />
                            </svg>
                            <span style={{ padding: "4px 30px 4px 28px" }}>
                              My Wishlist
                            </span>
                          </MenuItem>
                        </Link>
                        <Link to="/account" style={{ textDecoration: "none" }}>
                          <MenuItem
                            style={{
                              fontfamily: "Avenir",
                              fontWeight: 500,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#616161",
                              padding: "8px 10px 8px 10px",
                            }}
                            onClick={() => this.setState({ openMenu: null })}
                          >
                            {" "}
                            <svg
                              width="15"
                              height="17"
                              viewBox="0 0 15 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.16667 1L1 3.91788V14.1304C1 14.5174 1.15218 14.8885 1.42307 15.1621C1.69395 15.4357 2.06135 15.5894 2.44444 15.5894H12.5556C12.9386 15.5894 13.306 15.4357 13.5769 15.1621C13.8478 14.8885 14 14.5174 14 14.1304V3.91788L11.8333 1H3.16667Z"
                                stroke="#84766F"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M1 3.91797H14"
                                stroke="#84766F"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.3891 6.83569C10.3891 7.60956 10.0847 8.35173 9.54297 8.89894C9.0012 9.44615 8.2664 9.75357 7.50022 9.75357C6.73404 9.75357 5.99924 9.44615 5.45746 8.89894C4.91569 8.35173 4.61133 7.60956 4.61133 6.83569"
                                stroke="#84766F"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span style={{ padding: "4px 30px 4px 28px" }}>
                              My Orders
                            </span>
                          </MenuItem>
                        </Link>
                        <Link to="/account" style={{ textDecoration: "none" }}>
                          <MenuItem
                            style={{
                              fontfamily: "Avenir",
                              fontWeight: 500,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#616161",
                              padding: "8px 10px 8px 10px",
                            }}
                            onClick={() => this.setState({ openMenu: null })}
                          >
                            {" "}
                            <svg
                              style={{ marginLeft: "-4px" }}
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                                fill="#84766F"
                              />
                            </svg>
                            <span style={{ padding: "4px 30px 4px 24px" }}>
                              My Addresses
                            </span>
                          </MenuItem>
                        </Link>
                        <MenuItem
                          style={{
                            fontfamily: "Avenir",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "#616161",
                            padding: "8px 10px 8px 10px",
                          }}
                          onClick={() => this.setState({ openMenu: null })}
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.6667 15.5833V12.8333H8.25V9.16659H14.6667V6.41659L19.25 10.9999L14.6667 15.5833ZM12.8333 1.83325C13.3196 1.83325 13.7859 2.02641 14.1297 2.37022C14.4735 2.71404 14.6667 3.18036 14.6667 3.66659V5.49992H12.8333V3.66659H4.58333V18.3333H12.8333V16.4999H14.6667V18.3333C14.6667 18.8195 14.4735 19.2858 14.1297 19.6296C13.7859 19.9734 13.3196 20.1666 12.8333 20.1666H4.58333C4.0971 20.1666 3.63079 19.9734 3.28697 19.6296C2.94315 19.2858 2.75 18.8195 2.75 18.3333V3.66659C2.75 3.18036 2.94315 2.71404 3.28697 2.37022C3.63079 2.02641 4.0971 1.83325 4.58333 1.83325H12.8333Z"
                              fill="#84766F"
                            />
                          </svg>
                          <span style={{ padding: "4px 30px 4px 24px" }}>
                            Logout
                          </span>
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="mx-2"
                    onClick={() => this.handleCartOpen()}
                  >
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
                  <Link to="/account" style={{ textDecoration: "none" }}>
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
                  </Link>
                </div>
              </div>

              <div
                className={
                  this.state.showFilter
                    ? " navbar-collapse d-md-block"
                    : " navbar-collapse d-none d-md-block"
                }
                id="navbarNavDropdown"
                style={{ zIndex: 999 }}
              >
                <div className="d-lg-none">
                  <div className="menuClose">
                    <span>Menu</span>
                    <a
                      href="#"
                      className="closeBtn"
                      id="btnClose"
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
                  <div className="genType">
                    <span className="active">Women</span>
                    <span>Men</span>
                  </div>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className="nav-link"
                      onClick={() => this.handleCloseDropdown()}
                    >
                      About <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown d-lg-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={this.handleWishlist}
                    >
                      My Account
                    </a>
                    <div
                      className={
                        this.state.wishlist
                          ? "dropdown-menu megaMenu d-block "
                          : "dropdown-menu megaMenu d-none"
                      }
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-12 d-lg-none">
                            <div className="menuClose">
                              <span onClick={this.handleWishlist}>Back</span>
                              <a
                                href="#"
                                className="closeBtn"
                                id="btnClose"
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
                            <div className="col-lg-5">
                              <div className="row">
                                <div className="col-12">
                                  <h4>My Account</h4>
                                </div>
                                <div
                                  className="account"
                                  style={{
                                    padding: "20px",
                                    marginTop: "-40px",
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-md-9 col-lg-7 mr-auto">
                                      <div
                                        className="tab-content"
                                        id="v-pills-tabContent"
                                      >
                                        <div
                                          className="tab-pane fade show active"
                                          id="v-pills-profile"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-profile-tab"
                                        >
                                          <div className="col-sm-12">
                                            <div className="row">
                                              <div className="col-12">
                                                <ul className="list-unstyled">
                                                  <li
                                                    onClick={() =>
                                                      this.handleCloseDropdown()
                                                    }
                                                  >
                                                    <Link
                                                      to="/account"
                                                      style={{
                                                        textTransform: "none",
                                                        textDecoration: "none",
                                                      }}
                                                    >
                                                      My Profile
                                                    </Link>
                                                  </li>
                                                  <li
                                                    onClick={() =>
                                                      this.handleCloseDropdown()
                                                    }
                                                  >
                                                    <Link
                                                      to="/account"
                                                      style={{
                                                        textTransform: "none",
                                                        textDecoration: "none",
                                                      }}
                                                    >
                                                      My Orders
                                                    </Link>
                                                  </li>
                                                  <li
                                                    onClick={() =>
                                                      this.handleCloseDropdown()
                                                    }
                                                  >
                                                    <Link
                                                      to="/account"
                                                      style={{
                                                        textTransform: "none",
                                                        textDecoration: "none",
                                                      }}
                                                    >
                                                      My Addresses
                                                    </Link>
                                                  </li>
                                                  <li
                                                    onClick={() =>
                                                      this.handleCloseDropdown()
                                                    }
                                                  >
                                                    <Link
                                                      to="/account"
                                                      style={{
                                                        textTransform: "none",
                                                        textDecoration: "none",
                                                      }}
                                                    >
                                                      My Wishlist
                                                    </Link>
                                                  </li>
                                                  <li></li>
                                                </ul>
                                              </div>
                                              <div className="col-6"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
                      onClick={this.handleShop}
                    >
                      Shop
                    </a>
                    <div
                      className={
                        this.state.shop
                          ? "dropdown-menu megaMenu d-block "
                          : "dropdown-menu megaMenu d-none"
                      }
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-12 d-lg-none">
                            <div className="menuClose">
                              <span onClick={this.handleShop}>Back</span>
                              <a
                                href="#"
                                className="closeBtn"
                                id="btnClose"
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
                            <div className="subMenu">SHOP</div>
                          </div>
                          <div className="col-lg-5">
                            <Link to="/shop">
                              <div
                                className="row"
                                onClick={() => this.handleCloseDropdown()}
                              >
                                <div className="col-12">
                                  <h4>FEATURED</h4>
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
                            </Link>{" "}
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
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={this.handleDesigner}
                    >
                      Designers
                    </a>
                    <div
                      className={
                        this.state.designer
                          ? "dropdown-menu megaMenu d-block"
                          : "dropdown-menu megaMenu d-none"
                      }
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="container">
                        <div className="row w-100">
                          <div className="col-12 d-lg-none">
                            <div className="menuClose">
                              <span onClick={this.handleDesigner}>Back</span>
                              <a
                                href="#"
                                className="closeBtn"
                                id="btnClose"
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
                            <div className="subMenu">SHOP</div>
                          </div>
                          <div className="col-lg-9">
                            <Link to="/shop">
                              <div
                                className="row"
                                onClick={() => this.handleCloseDropdown()}
                              >
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
                            </Link>{" "}
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
                      onClick={this.handleOccassion}
                    >
                      Occasion
                    </a>
                    <div
                      className={
                        this.state.occassion
                          ? "dropdown-menu megaMenu d-block"
                          : "dropdown-menu megaMenu d-none"
                      }
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="container">
                        <div className="row w-100">
                          <div className="col-12 d-lg-none">
                            <div className="menuClose">
                              <span onClick={this.handleOccassion}>Back</span>
                              <a
                                href="#"
                                className="closeBtn"
                                id="btnClose"
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
                            <div className="subMenu">SHOP</div>
                          </div>
                          <div className="col-lg-5">
                            <Link to="/shop">
                              <div
                                className="row"
                                onClick={() => this.handleCloseDropdown()}
                              >
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
                            </Link>{" "}
                          </div>{" "}
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
                    <Link
                      to="/discover"
                      className="nav-link"
                      onClick={() => this.handleCloseDropdown()}
                    >
                      Discover
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/gift"
                      className="nav-link"
                      onClick={() => this.handleCloseDropdown()}
                    >
                      Gifts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/shop"
                      className="nav-link"
                      onClick={() => this.handleCloseDropdown()}
                    >
                      Sale
                    </Link>
                  </li>

                  <li className="nav-item d-lg-none">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item d-lg-none">
                    <a className="nav-link" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="mobileSearch d-lg-none">
            <div className="container">
              <div className="searchWrap">
                <svg
                  width="14"
                  height="14"
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
          </div>

          {mobileView && (
            <div className="barSlider" style={{ textAlign: "center" }}>
              <div className="container" style={{ textAlign: "center" }}>
                <Slider {...settings}>
                  <div
                    style={{ textAlign: "center" }}
                    className="checkoutSlider"
                  >
                    {" "}
                    <svg
                      width="22"
                      height="17"
                      viewBox="0 0 22 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "6px" }}
                    >
                      <path
                        d="M21.0699 8.4107C20.8599 7.4108 20.0299 6.81086 19.2299 7.08583L13.9199 8.86065L6.99986 0.823975L5.08986 1.46141L9.22987 10.423L4.25985 12.0853L2.28985 10.1605L0.839844 10.648L2.65985 14.5976L3.42985 16.2599L5.02986 15.7349L10.3399 13.9476L14.6899 12.4978L19.9999 10.7355C20.8099 10.4355 21.2799 9.41059 21.0699 8.4107Z"
                        fill="black"
                        fill-opacity="0.47"
                      />
                    </svg>
                    <span>FREE SHIPPING ON ALL PREPAID ORDERS</span>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="checkoutSlider"
                  >
                    {" "}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "6px" }}
                    >
                      <path
                        d="M11 11.9167C9.78442 11.9167 8.61864 11.4339 7.75909 10.5743C6.89955 9.71478 6.41667 8.54899 6.41667 7.33341H8.25C8.25 8.06276 8.53973 8.76223 9.05546 9.27796C9.57118 9.79368 10.2707 10.0834 11 10.0834C11.7293 10.0834 12.4288 9.79368 12.9445 9.27796C13.4603 8.76223 13.75 8.06276 13.75 7.33341H15.5833C15.5833 8.54899 15.1004 9.71478 14.2409 10.5743C13.3814 11.4339 12.2156 11.9167 11 11.9167ZM11 2.75008C11.7293 2.75008 12.4288 3.03981 12.9445 3.55554C13.4603 4.07126 13.75 4.77074 13.75 5.50008H8.25C8.25 4.77074 8.53973 4.07126 9.05546 3.55554C9.57118 3.03981 10.2707 2.75008 11 2.75008ZM17.4167 5.50008H15.5833C15.5833 4.89819 15.4648 4.30219 15.2344 3.74611C15.0041 3.19004 14.6665 2.68478 14.2409 2.25918C13.8153 1.83357 13.31 1.49597 12.754 1.26563C12.1979 1.0353 11.6019 0.916748 11 0.916748C9.78442 0.916748 8.61864 1.39963 7.75909 2.25918C6.89955 3.11872 6.41667 4.28451 6.41667 5.50008H4.58333C3.56583 5.50008 2.75 6.31591 2.75 7.33341V18.3334C2.75 18.8196 2.94315 19.286 3.28697 19.6298C3.63079 19.9736 4.0971 20.1667 4.58333 20.1667H17.4167C17.9029 20.1667 18.3692 19.9736 18.713 19.6298C19.0568 19.286 19.25 18.8196 19.25 18.3334V7.33341C19.25 6.31591 18.425 5.50008 17.4167 5.50008Z"
                        fill="#81807F"
                      />
                    </svg>
                    <span>COD AVAILABLE</span>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="checkoutSlider"
                  >
                    {" "}
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "6px" }}
                    >
                      <path
                        d="M18.9 4H2.1V2H18.9V4ZM18.9 14H2.1V8H18.9V14ZM18.9 0H2.1C0.9345 0 0 0.89 0 2V14C0 14.5304 0.221249 15.0391 0.615076 15.4142C1.0089 15.7893 1.54305 16 2.1 16H18.9C19.457 16 19.9911 15.7893 20.3849 15.4142C20.7787 15.0391 21 14.5304 21 14V2C21 0.89 20.055 0 18.9 0Z"
                        fill="black"
                        fill-opacity="0.47"
                      />
                    </svg>
                    <span>EASY EMI</span>
                  </div>
                </Slider>
              </div>
            </div>
          )}

          <div
            className={this.state.cartOpen ? "cartWrap " : "cartWrap d-none "}
            id="shoppingCart"
          >
            <div className="myBag">
              <div className="cartHead">
                <span>My Bag</span>
                <a
                  href="#"
                  className="closeBtn"
                  onClick={() => this.handleCartOpen()}
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
              <div className="cartBody">
                <div className="cartItem ">
                  <div className="d-flex justify-content-between px-2 py-3">
                    <div className="imgWrap flex-shrink-0">
                      <img
                        className="img-fluid"
                        src="../../assets/images/necklace.png"
                        alt=""
                      />
                    </div>
                    <div className="itemDetails">
                      <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                      <div className="itemPrice d-flex flex-column">
                        <span className="prePrice">Rs. 6,850</span>
                        <span className="disPrice">Rs. 5,850</span>
                      </div>
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
                    <a href="#" className="deleteButton">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 14.25C4.5 14.6478 4.65804 15.0294 4.93934 15.3107C5.22064 15.592 5.60218 15.75 6 15.75H12C12.3978 15.75 12.7794 15.592 13.0607 15.3107C13.342 15.0294 13.5 14.6478 13.5 14.25V5.25H4.5V14.25ZM6 6.75H12V14.25H6V6.75ZM11.625 3L10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3H11.625Z"
                          fill="#A7A7A7"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="totalCheckout">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checkoutGift"
                      />
                      <label
                        className="custom-control-label pl-2 mb-0"
                        for="checkoutGift"
                      >
                        This is a gift
                      </label>
                    </div>
                    <div className="subTotal">
                      <h4>SUBTOTAL</h4>
                      <span>Rs. 10,000</span>
                    </div>
                    <div className="goCheck">
                      <Link
                        to="/checkout"
                        className="btn"
                        onClick={() => this.setState({ cartOpen: false })}
                      >
                        GO TO CHECKOUT
                      </Link>
                      <p>FREE SHIPPING ON ALL ORDERS</p>
                    </div>
                  </div>
                </div>
                <div className="emptyCart">
                  <h4>Your Bag</h4>
                  <p>Your bag is currently empty.</p>
                  <Link
                    to="/home"
                    className="btn"
                    onClick={() => this.setState({ cartOpen: false })}
                  >
                    CONTINUE SHOPPING
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </body>
    );
  }
}
export default withWidth()(Header);
