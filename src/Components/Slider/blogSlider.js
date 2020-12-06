import React from "react";
import "../Home/home.css";
import Slider from "react-slick";
import withWidth from "@material-ui/core/withWidth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class BlogSlider extends React.Component {
  previous = () => {
    this.slider.slickPrev();
  };
  next = () => {
    this.slider.slickNext();
  };
  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);

    const blogSlider = {
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: "0px",
          },
        },
      ],
    };

    return (
      <body>
        {!mobileView && (
          <div className="row">
            <div
              className="col-xl-1 col-lg-1 col-md-1 blogCarouselArrows"
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
              <Slider ref={(c) => (this.slider = c)} {...blogSlider}>
                <div className="blogCard">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/blog1.png"
                      alt=""
                    />
                  </div>
                  <em style={{ paddingLeft: "40px" }}>Publications</em>
                  <h5 style={{ paddingLeft: "40px" }}>
                    OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                  </h5>
                </div>
                <div className="blogCard">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/blog2.png"
                      alt=""
                    />
                  </div>
                  <em style={{ paddingLeft: "40px" }}>Publications</em>
                  <h5 style={{ paddingLeft: "40px" }}>
                    OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                  </h5>
                </div>{" "}
                <div className="blogCard">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/blog3.png"
                      alt=""
                    />
                  </div>
                  <em style={{ paddingLeft: "40px" }}>Publications</em>
                  <h5 style={{ paddingLeft: "40px" }}>
                    OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                  </h5>
                </div>{" "}
              </Slider>
            </div>
            <div
              className="col-xl-1 col-lg-1 col-md-1 blogCarouselArrows"
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
          <Slider {...blogSlider}>
            <div className="col-lg-4">
              <div className="blogCard">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="../../assets/images/Home/static/blog1.png"
                    alt=""
                  />
                </div>
                <em>Publications</em>
                <h5>
                  OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blogCard">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="../../assets/images/Home/static/blog2.png"
                    alt=""
                  />
                </div>
                <em>Publications</em>
                <h5>
                  OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blogCard">
                <div className="imgWrap">
                  <img
                    className="img-fluid"
                    src="../../assets/images/Home/static/blog3.png"
                    alt=""
                  />
                </div>
                <em>Publications</em>
                <h5>
                  OUR FAVOURITE BRACELETS <br /> UNDER &euro; 10,000
                </h5>
              </div>
            </div>
          </Slider>
        )}
      </body>
    );
  }
}

export default withWidth()(BlogSlider);
