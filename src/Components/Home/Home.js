import React, { Component, Fragment } from "react";
import BlogSlider from "../Slider/blogSlider";
import CircularSlider from "../Slider/circularSlider";
import DesignerSlider from "../Slider/designerSlider";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withWidth } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);

    var settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      infinite: true,
    };

    var jewels = {
      arrows: false,
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 340,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    };

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
                  <div className="carousel-inner">
                    <Slider {...settings}>
                      <div className="carousel-item active">
                        <img
                          src="../../assets/images/Home/static/banner1web.png"
                          className="d-none d-lg-block w-100"
                          alt="..."
                        />
                        <img
                          src="../../assets/images/Home/static/banner1mobile.png"
                          className="d-lg-none w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="../../assets/images/Home/static/banner2web.png"
                          className="d-none d-lg-block w-100"
                          alt="..."
                        />
                        <img
                          src="../../assets/images/Home/static/banner2mobile.png"
                          className="d-lg-none w-100"
                          alt="..."
                        />
                      </div>
                    </Slider>
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
            <div className="sliderContainer">
              <div className="row">
                <div className="col text-center">
                  <h3 className="titleHeading mb-3">CATEGORIES</h3>
                </div>
              </div>
              <CircularSlider />
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
                        src="../../assets/images/Home/static/occassion-holiday.png"
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
                        src="../../assets/images/Home/static/ocassion-festive.png"
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
                        src="../../assets/images/Home/static/occassion-cocktail.png"
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
                        src="../../assets/images/Home/static/occassion-casual.png"
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
                        src="../../assets/images/Home/static/occassion-wedding.png"
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
                        src="../../assets/images/Home/static/occassion-workwear.png"
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
                    {!mobileView && (
                      <img
                        className="img-fluid"
                        src="../../assets/images/Home/static/image.png"
                        alt=""
                        style={{ width: "-webkit-fill-available" }}
                      />
                    )}

                    {mobileView && (
                      <img
                        className="img-fluid"
                        src="../../assets/images/Home/static/image.png"
                        alt=""
                      />
                    )}
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
            <div className="sliderContainer">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="titleHeading">MEET THE DESIGNER</h3>
                </div>
              </div>
              <DesignerSlider />
            </div>
          </section>

          <section className="shopLook">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h3 className="titleHeading">SHOP HOLIDAY LOOKS</h3>
                  <em className="titleCaption">be the show-stopper</em>
                  <div className="imgWrapLg">
                    {/* <!-- <img className="img-fluid d-md-none" src="https://dummyimage.com/450x650/d3d3d3/fff.jpg"
                                alt="" /> --> */}
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <Slider {...settings}>
                          <div className="carousel-item active">
                            <img
                              src="../../assets/images/Home/static/shopthelook1.png"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../../assets/images/Home/static/shopthelook2.png"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="../../assets/images/Home/static/shopthelook4.png"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 mt-3 mt-md-0">
                  <div className="sliderContent mb-4 mb-md-0">
                    <h3 className="titleHeading">GOLD JEWELLERY</h3>
                    <em className="titleCaption">Find your unique piece</em>
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
                      <Slider {...jewels}>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>

                  <div className="sliderContent">
                    <h3 className="titleHeading">SLIVER JEWELLERY</h3>
                    <em className="titleCaption">Design thar speaks for you</em>
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
                      <Slider {...jewels}>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="mx-auto">
                          <div className="imgWrap">
                            <img
                              className="img-fluid"
                              src="https://dummyimage.com/200x200/d3d3d3/fff.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </Slider>
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
            <div className="sliderContainer">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="titleHeading mb-4">ALL BLOG POSTS</h3>
                </div>
              </div>
              <BlogSlider />
            </div>
          </section>

          <section className="findGift meetDesigner">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <div className="bgWrap">
                    <img
                      className="img-fluid "
                      src="../../assets/images/Home/static/gift1.png"
                      alt=""
                    />
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
                  <div className="bgWrap  d-lg-block">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/gift2.png"
                      alt=""
                    />
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

export default withWidth()(Home);
