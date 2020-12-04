import React from "react";
import "../Home/home.css";
import Slider from "react-slick";
import withWidth from "@material-ui/core/withWidth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SquareSlider from "../Slider/squareSlider";
import DesignerSlider from "../Slider/designerSlider";

class Designer extends React.Component {
  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);

    const lookSlider = {
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
            <div className="sliderContainer" style={{ textAlign: "center" }}>
              <div className="row ">
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

              <SquareSlider />
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
            <div className="sliderContainer">
              <div className="row ">
                <div className="col text-center">
                  <h3 className="titleHeading">YOU MAY ALSO LIKE</h3>
                </div>
              </div>

              <SquareSlider />
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
            <div className="sliderContainer">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="titleHeading">SIMILAR DESIGNERS</h3>
                </div>
              </div>
              <DesignerSlider />
            </div>
          </section>
        </main>
      </body>
    );
  }
}
export default withWidth()(Designer);
