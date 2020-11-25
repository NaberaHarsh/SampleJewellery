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
                        className="d-none d-lg-block w-100"
                        alt="..."
                      />
                      <img
                        src="https://dummyimage.com/340x470/d3d3d3/fff.jpg"
                        className="d-lg-none w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://dummyimage.com/1290x470/d3d3d3/fff.jpg"
                        className="d-none d-lg-block w-100"
                        alt="..."
                      />
                      <img
                        src="https://dummyimage.com/340x470/d3d3d3/fff.jpg"
                        className="d-lg-none w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://dummyimage.com/1290x470/d3d3d3/fff.jpg"
                        className="d-none d-lg-block w-100"
                        alt="..."
                      />
                      <img
                        src="https://dummyimage.com/340x470/d3d3d3/fff.jpg"
                        className="d-lg-none w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  {/* <!-- <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-slide="prev">
                            <svg width="17" height="33" viewBox="0 0 17 33" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 31.084L1 16.084L16 1.08398" stroke="#fff" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-slide="next">
                            <svg width="17" height="33" viewBox="0 0 17 33" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 31.084L16 16.084L1 1.08398" stroke="#fff" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="sr-only">Next</span>
                        </a> --> */}
                </div>
              </div>
            </div>
          </section>

          <section className="cateSlider pt-3">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h3 className="titleHeading mb-3">CATEGORIES</h3>
                </div>
              </div>
              <div className="row sliderCat">
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>EARRING</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>NECKPIECE</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>RING</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>
                      BANGLE <br /> & BRACELET
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>
                      HEAD <br /> ACCESSORIES
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>COSMIC OPEN RING</p>
                  </div>
                </div>
                <div className="col-2">
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
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>EARRING</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>NECKPIECE</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>RING</p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>
                      BANGLE <br /> & BRACELET
                    </p>
                  </div>
                </div>
                <div className="col-2">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/130x130/d3d3d3/fff.jpg"
                      alt=""
                    />
                  </div>
                  <div className="priceCaption">
                    <p>
                      HEAD <br /> ACCESSORIES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="disOcc">
            <div className="container">
              <div className="row position-relative">
                <div className="disHeading mb-5 mb-lg-0 text-center">
                  <h3 className="titleHeading">
                    DISCOVER BY <span>OCCASION</span>
                  </h3>
                </div>
                <div className="col-6 col-lg-4 mb-4">
                  <div className="disItem">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 className="disCaption">HOLIDAY</h5>
                  </div>
                </div>
                <div className="col-6 col-lg-4 mb-4">
                  <div className="disItem secItem">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 className="disCaption">FESTIVE</h5>
                  </div>
                </div>
                <div className="col-6 col-lg-4 mb-4">
                  <div className="disItem">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 className="disCaption">COCKTAIL</h5>
                  </div>
                </div>
                <div className="col-6 col-lg-4 mb-4">
                  <div className="disItem">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 className="disCaption">CASUAL</h5>
                  </div>
                </div>
                <div className="col-6 col-lg-4 mb-4">
                  <div className="disItem fifItem">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 className="disCaption">WEDDING</h5>
                  </div>
                </div>
                <div className="col-6 col-lg-4 mb-4">
                  <div className="disItem">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/310x310/d3d3d3/fff.jpg"
                      />
                    </div>
                    <h5 className="disCaption">WORK-WEAR</h5>
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

          <section className="designersMeet">
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
                    {/* <!-- <img className="img-fluid d-md-none" src="https://dummyimage.com/450x650/d3d3d3/fff.jpg"
                                alt="" /> --> */}
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
                            src="https://dummyimage.com/450x650/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://dummyimage.com/450x650/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://dummyimage.com/450x650/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 mt-3 mt-md-0">
                  <div className="sliderContent mb-4 mb-md-0">
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
                  <div className="bgWrap">
                    {/* <!-- <img className="img-fluid d-lg-none" src="https://dummyimage.com/991x425/d3d3d3/fff.jpg" alt="" /> --> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contentWrap">
                    <h3>ABOUT</h3>
                    <h4>Amrutam</h4>
                    <p>
                      At Amrutam, discover unusual luxury pieces that we have
                      scoured the world to find.{" "}
                    </p>
                    <a href="#" className="shopNow">
                      <span>READ MORE</span>
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

          <section className="blogPost">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="titleHeading mb-4">ALL BLOG POSTS</h3>
                </div>
              </div>
              <div className="row blogSlider">
                <div className="col-6 col-lg-4">
                  <div className="blogCard">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
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
                <div className="col-6 col-lg-4">
                  <div className="blogCard">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
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
                <div className="col-6 col-lg-4">
                  <div className="blogCard">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
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
                <div className="col-6 col-lg-4">
                  <div className="blogCard">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
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
                <div className="col-6 col-lg-4">
                  <div className="blogCard">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
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
                <div className="col-6 col-lg-4">
                  <div className="blogCard">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
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
                  <div className="bgWrap">
                    {/* <!-- <img className="img-fluid d-lg-none" src="https://dummyimage.com/340x300/d3d3d3/fff.jpg" alt="" /> --> */}
                  </div>
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
      </body>
    );
  }
}

export default Home;
