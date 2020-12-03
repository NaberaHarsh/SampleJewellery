import React from "react";
import "../Home/home.css";
import Slider from "react-slick";
import withWidth from "@material-ui/core/withWidth";

class Designer extends React.Component {
  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);
    const fourshow = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: "20px",

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            centerPadding: "40px",

            slidesToScroll: 1,
            infinite: true,
            // dots: true
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerPadding: "40px",

            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            centerPadding: "40px",

            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };

    const lookSlider = {
      prevArrow: false,
      nextArrow: false,
      infinite: true,
      speed: 300,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "50px",
          },
        },
      ],
    };

    const designerSettings = {
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <body>
        <main>
          <section className="bannerSection designerBanner">
            <div className="container">
              <div className="bannerContent">
                <h3>ASHNA D.</h3>
                <p>
                  <q>
                    Discover distinctive luxury pieces that we have scoured the
                    world to find especially for you. We specialize in unique,
                    designer fine jewellery, dreamt up by artists and brought to
                    life by skilled craftspeople in under-the-radar ateliers and
                    workshops, scattered across the globe…
                  </q>
                </p>
              </div>
            </div>
          </section>

          <section className="essenceCollect sliderWrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 mx-auto text-center">
                  <h3 className="titleHeading">
                    The Essence of the Collection
                  </h3>
                  <p>
                    <q>
                      Discover distinctive luxury pieces that we have scoured
                      the world to find especially for you. We specialize in
                      unique, designer fine jewellery, dreamt up by artists and
                      brought to life by skilled craftspeople in under-the-radar
                      ateliers and workshops, scattered across the globe…
                    </q>
                  </p>
                </div>
              </div>

              {!mobileView && (
                <Slider {...fourshow}>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p className="fw-500">Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p className="fw-500">Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                </Slider>
              )}
              {mobileView && (
                <Slider {...fourshow}>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p className="fw-500">Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p className="fw-500">Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                </Slider>
              )}
              <div className="row d-lg-none">
                <div className="col">
                  <a href="#" className="viewAll">
                    <span>view all</span>
                    <svg
                      width="7"
                      height="8"
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
          </section>

          <section className="meetDesigner inspiration">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <div className="bgWrap">
                    {/* <!-- <img className="img-fluid" src="https://dummyimage.com/465x410/d3d3d3/fff.jpg" alt="" /> --> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="designerWrap">
                    <h3 className="titleHeading">INSPIRATION</h3>
                    <p>
                      At Amrutam, discover unusual luxury pieces that we have
                      scoured the world to find. We specialise in unique,
                      designer fine jewellery, dreamt up by artists and brought
                      to life by skilled craftspeople in under-the-radar
                      ateliers and workshops scattered across the globe.{" "}
                    </p>

                    <a href="#" className="discoverMore">
                      <span>View All Collections</span>{" "}
                      <svg
                        width="7"
                        height="10"
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

          <section className="alsoLike sliderWrap">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h3 className="titleHeading">YOU MAY ALSO LIKE</h3>
                </div>
              </div>

              {!mobileView && (
                <Slider {...fourshow}>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p className="fw-500">Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p className="fw-500">Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                </Slider>
              )}
              {mobileView && (
                <Slider {...fourshow}>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p className="fw-500">Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p className="fw-500">Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                  <div className="col-lg-3" style={{ padding: "0px" }}>
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/230x230/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                    <div className="priceCaption">
                      <p>COSMIC OPEN RING</p>
                      <p>Rs. 6,850</p>
                    </div>
                  </div>
                </Slider>
              )}
            </div>
          </section>

          <section className="clientDiaries">
            <div className="container">
              <div className="row mb-3">
                <div className="col">
                  <h3 className="titleHeading">CLIENT DIARIES</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div
                    id="clientDiariesCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="imgWrap">
                          <img
                            src="https://dummyimage.com/200x180/d3d3d3/d3d3d3.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-caption">
                          <p>
                            <q>
                              Your loved ones deserve nothing less than perfect,
                              which is why it has to be jewellery from Amrutam.
                            </q>
                          </p>
                          <h5>-Aanchal Kalra</h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="imgWrap">
                          <img
                            src="https://dummyimage.com/200x180/d3d3d3/d3d3d3.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-caption">
                          <p>
                            <q>
                              Your friend deserve nothing less than perfect,
                              which is why it has to be jewellery from Amrutam.
                            </q>
                          </p>
                          <h5>-Rahul Panwar</h5>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="imgWrap">
                          <img
                            src="https://dummyimage.com/200x180/d3d3d3/d3d3d3.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-caption">
                          <p>
                            <q>
                              Your family deserve nothing less than perfect,
                              which is why it has to be jewellery from Amrutam.
                            </q>
                          </p>
                          <h5>-Aanchal Kalra</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="lookBook ">
            <div className="container">
              <div className="row mb-4">
                <div className="col">
                  <h3 className="titleHeading">LOOK BOOK</h3>
                </div>
              </div>
            </div>

            <div className="row sliderLook slick-initialized slick-slider">
              {mobileView && (
                <Slider {...lookSlider}>
                  <div className="col-lg-4 slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </Slider>
              )}
              {!mobileView && (
                <Slider {...lookSlider}>
                  <div className=" slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" slick-slide slick-current slick-active slick-center">
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </Slider>
              )}
            </div>
          </section>

          <section className="designersMeet pt-0 pt-lg-4">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="titleHeading">SIMILAR DESIGNERS</h3>
                </div>
              </div>
              {/* <div className="row designerSlider"> */}
              <Slider {...designerSettings}>
                <div style={{ padding: "30px" }}>
                  <div
                    className="designersCard"
                    style={{ padding: "100px !important" }}
                  >
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
                <div style={{ padding: "30px" }}>
                  <div
                    className="designersCard"
                    style={{ padding: "100px !important" }}
                  >
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
                </div>{" "}
                <div style={{ padding: "30px" }}>
                  <div
                    className="designersCard"
                    style={{ padding: "100px !important" }}
                  >
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
                </div>{" "}
                <div style={{ padding: "30px" }}>
                  <div
                    className="designersCard"
                    style={{ padding: "100px !important" }}
                  >
                    <div className="imgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/170x220/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
              </Slider>
              {/* </div> */}
            </div>
          </section>
        </main>
      </body>
    );
  }
}
export default withWidth()(Designer);
