import React from "react";
import "../Home/home.css";
import Slider from "react-slick";
import withWidth from "@material-ui/core/withWidth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CircularSlider extends React.Component {
  previous = () => {
    this.slider.slickPrev();
  };
  next = () => {
    this.slider.slickNext();
  };

  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);

    var circularCategories = {
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: "10px",
          },
        },
      ],
    };

    return (
      <body>
        {!mobileView && (
          <div className="row sliderCat">
            <div
              className="col-xl-1 col-lg-1 col-md-1 circularCarouselArrows"
              onClick={this.previous}
            >
              <svg
                style={{ float: "right" }}
                width="17"
                height="33"
                viewBox="0 0 17 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 31.084L1 16.084L16 1.08398"
                  stroke="#616161"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="col-xl-10 col-lg-10 col-md-10">
              <Slider ref={(c) => (this.slider = c)} {...circularCategories}>
                <div className="">
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
                <div className="">
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
                <div className="">
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
                <div className="">
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
                <div className="">
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
                <div className="">
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

                <div className="">
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
                <div className="">
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
                <div className="">
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
                <div className="">
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
                <div className="">
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
              </Slider>
            </div>
            <div
              className="col-xl-1 col-lg-1 col-md-1 circularCarouselArrows"
              onClick={this.next}
            >
              <svg
                width="17"
                height="33"
                viewBox="0 0 17 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 31.084L16 16.084L1 1.08398"
                  stroke="#616161"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
        {mobileView && (
          <div className=" sliderCat">
            <Slider {...circularCategories}>
              <div className="">
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
              <div className="">
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
              <div className="">
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
              <div className="">
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
              <div className="">
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
              <div className="">
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
                </div>
              </div>
              <div className="">
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
              <div className="">
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
              <div className="">
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
              <div className="">
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
              <div className="">
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
            </Slider>
          </div>
        )}
      </body>
    );
  }
}

export default withWidth()(CircularSlider);
