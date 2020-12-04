import React from "react";
import "../Home/home.css";
import Slider from "react-slick";
import withWidth from "@material-ui/core/withWidth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogSlider from "../Slider/blogSlider";

const Discover = () => {
  const lookSlider = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <body>
      <main>
        <section class="bannerSection discoverBanner">
          <div class="container">
            <div class="bannerContent"></div>
          </div>
        </section>

        <section class="blogPost jewelleryTrend">
          <div class="sliderContainer">
            <div class="row ">
              <div class="col-lg-10 mx-auto mb-4">
                <h3 class="titleHeading mb-3 pt-lg-5">
                  DESIGNER JEWELLRY TRENDS - MUST FOLLOW
                </h3>
                <p>
                  Get to know the newest deisgner in the block, our current
                  obsessions , the perfect collection for that next holiday and
                  much more...
                </p>
              </div>
            </div>
            <BlogSlider />
          </div>
        </section>

        <section class="lookBook sliderWrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <h3 class="titleHeading">
                  LOOKBOOK <br /> HOLIDAY
                </h3>
                <div class="imgWrapLg">
                  <div
                    id="carouselLookHolidayIndicators"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    {/* <ol class="carousel-indicators">
                      <li
                        data-target="#carouselLookHolidayIndicators"
                        data-slide-to="0"
                        class="active"
                      ></li>
                      <li
                        data-target="#carouselLookHolidayIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselLookHolidayIndicators"
                        data-slide-to="2"
                      ></li>
                      <li
                        data-target="#carouselLookHolidayIndicators"
                        data-slide-to="3"
                      ></li>
                    </ol> */}
                    <div class="carousel-inner">
                      <Slider {...lookSlider}>
                        <div class="carousel-item active">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>DESIGNER SAKSHI</h5>
                            <a href="#" class="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>DESIGNER PINKAL & RINKAL</h5>
                            <a href="#" class="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>DESIGNER SAKSHI</h5>
                            <a href="#" class="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>DESIGNER PINKAL & RINKAL</h5>
                            <a href="#" class="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <h3 class="titleHeading">
                  LOOKBOOK <br /> WORK-WEAR
                </h3>
                <div class="imgWrapLg">
                  <div
                    id="carouselLookWorkIndicators"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    {/* <ol class="carousel-indicators">
                      <li
                        data-target="#carouselLookWorkIndicators"
                        data-slide-to="0"
                        class="active"
                      ></li>
                      <li
                        data-target="#carouselLookWorkIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselLookWorkIndicators"
                        data-slide-to="2"
                      ></li>
                      <li
                        data-target="#carouselLookWorkIndicators"
                        data-slide-to="3"
                      ></li>
                    </ol> */}
                    <div class="carousel-inner">
                      <Slider {...lookSlider}>
                        <div class="carousel-item active">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>DESIGNER SAKSHI</h5>
                            <a href="#" class="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>DESIGNER PINKAL & RINKAL</h5>
                            <a href="#" class="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>DESIGNER SAKSHI</h5>
                            <a href="#" class="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>DESIGNER PINKAL & RINKAL</h5>
                            <a href="#" class="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="blogPost styleTips">
          <div class="sliderContainer">
            <div class="row ">
              <div class="col-md-10 mx-auto text-center mb-4">
                <h3 class="titleHeading mb-2 pt-lg-4">
                  STYLE TIPS BY OUR DESIGNERS
                </h3>
                <p>
                  get inspired and amp up your styling with the wonderful tips
                  from our community of designers
                </p>
              </div>
            </div>
            <BlogSlider />
          </div>
        </section>

        <section class="blogPost celebSpotted">
          <div class="sliderContainer pt-lg-4">
            <div class="row ">
              <div class="col-md-12">
                <h3 class="titleHeading mb-4">
                  CELEBRITIES SPOTTED IN DESIGNER JEWELRY
                </h3>
              </div>
            </div>
            <BlogSlider />{" "}
          </div>
        </section>
      </main>
    </body>
  );
};
export default withWidth()(Discover);
