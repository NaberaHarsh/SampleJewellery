import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withWidth from "@material-ui/core/withWidth";

class SquareSlider extends React.Component {
  previous = () => {
    this.slider.slickPrev();
  };
  next = () => {
    this.slider.slickNext();
  };

  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);

    const fourshow = {
      arrows: false,
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

    const fourshowMobile = {
      arrows: false,
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

    return (
      <body>
        {!mobileView && (
          <div className="row">
            <div
              className="col-xl-1 col-lg-1 col-md-1 carouselArrows"
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
              <Slider ref={(c) => (this.slider = c)} {...fourshow}>
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
            </div>
            <div
              className="col-xl-1 col-lg-1 col-md-1 carouselArrows"
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
          <Slider {...fourshowMobile}>
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
      </body>
    );
  }
}

export default withWidth()(SquareSlider);
