import React from "react";
import { withWidth } from "@material-ui/core";
import "../Home/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gift = (props) => {
  const settings = {
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
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
    ],
  };
  const bigSlider = {
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
        <section class="bannerSection giftBanner mt-md-1">
          <div class="container">
            <div class="bannerContent">
              <img
                class="img-fluid d-md-none"
                src="../../assets/images/modals/modal-4.png"
                alt=""
              />
              <h3>GIFTS FOR HER</h3>
            </div>
          </div>
        </section>

        <section className="giftGuide">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 mx-auto titleGuide">
                <p>
                  “Discover and gift your loved ones a little special something
                  - for nothing speaks love like handcrafted, intrinsically
                  designed piece of jewelry
                </p>
                <h3>GIFT GUIDE - THOUGHTFUL GIFTS TO MAKE HER SMILE</h3>
              </div>
            </div>
            <div className="row jewellerySlider pb-5 d-none d-md-block  ">
              <Slider {...settings}>
                <div className=" mx-auto giftSlider">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                      alt=""
                    />
                    <p>ANNIVERSARY GIFT</p>
                  </div>
                </div>
                <div className="mx-auto giftSlider">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                      alt=""
                    />
                    <p>BIRTHDAY GIFT</p>
                  </div>
                </div>
                <div className="mx-auto giftSlider">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                      alt=""
                    />
                    <p>GIFTS FOR MUM</p>
                  </div>
                </div>
                <div className="mx-auto giftSlider">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                      alt=""
                    />
                    <p>ANNIVERSARY GIFT</p>
                  </div>
                </div>
                <div className="mx-auto giftSlider">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                      alt=""
                    />
                    <p>BIRTHDAY GIFT</p>
                  </div>
                </div>
                <div className="mx-auto giftSlider">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                      alt=""
                    />
                    <p>GIFTS FOR MUM</p>
                  </div>
                </div>
              </Slider>
            </div>

            <div className="row d-md-none">
              <div className="col-6 mx-auto mb-4">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                    alt=""
                  />
                  <p>CHRISTMAS GIFT</p>
                </div>
              </div>
              <div className="col-6 mx-auto mb-4">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                    alt=""
                  />
                  <p>FIRST DATE</p>
                </div>
              </div>
              <div className="col-6 mx-auto mb-4">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                    alt=""
                  />
                  <p>BIRTHDAY GIFT</p>
                </div>
              </div>
              <div className="col-6 mx-auto mb-4">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                    alt=""
                  />
                  <p>GIFT FOR MUM</p>
                </div>
              </div>
              <div className="col-6 mx-auto mb-4">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                    alt=""
                  />
                  <p>ANNIVERSARY GIFT</p>
                </div>
              </div>
              <div className="col-6 mx-auto mb-4">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="https://dummyimage.com/385x385/d3d3d3/fff.jpg"
                    alt=""
                  />
                  <p>MILESTONE GIFT</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lookBook sliderWrap giftBook">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="imgWrapLg mb-4 mb-lg-0">
                  <div
                    id="carouselLookHolidayIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <Slider {...bigSlider}>
                        <div className="carousel-item active">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h5>UNDER Rs. 10,000</h5>
                            <a href="#" className="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h5>UNDER Rs. 5,000</h5>
                            <a href="#" className="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h5>UNDER Rs. 10,000</h5>
                            <a href="#" className="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h5>UNDER Rs. 10,000</h5>
                            <a href="#" className="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="imgWrapLg">
                  <div
                    id="carouselLookWorkIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <Slider {...bigSlider}>
                        <div className="carousel-item active">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h5>UNDER Rs. 10,000</h5>
                            <a href="#" className="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h5>UNDER Rs. 5,000</h5>
                            <a href="#" className="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h5>UNDER Rs. 10,000</h5>
                            <a href="#" className="shopNow">
                              Shop Now
                            </a>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://dummyimage.com/450x480/d3d3d3/fff.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption">
                            <h5>UNDER Rs. 10,000</h5>
                            <a href="#" className="shopNow">
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

        <section className="gridSec giftArt">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h3 className="titleHeading">
                  LET US HELP YOU MASTER THE ART OF GIFTING
                </h3>
              </div>
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="contentWrap">
                  <h3>
                    From pocket-size luxuries to major extravagances, a gift can
                    show the most important people in your life that you’re
                    thinking of them—no matter your budget.{" "}
                  </h3>
                  <p>
                    The art of gifting the perfect gift is seldom mastered by
                    us. We spend a great deal of time thinking and analyzing
                    what would be the “perfect gift” for the important and
                    beautiful ladies in our lives, but often end up without
                    something that expresses their significance to us. With
                    amrutam by your side, let us help you shoulder the
                    responsibility of picking out the perfect gift for every
                    occasion - Mother’s day, Valentine’s day, first date,
                    anniversaries, birthdays, and all those little occasions
                    where you wish to pamper the ladies in your life. After all,
                    the best gifts aren’t wrapped in paper but in the love and
                    thoughtfulness of the giver.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="designerWrap">
                  <div className="conWrap">
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};
export default withWidth()(Gift);
