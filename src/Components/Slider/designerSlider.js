import React from "react";
import "../Home/home.css";
import Slider from "react-slick";
import withWidth from "@material-ui/core/withWidth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class DesignerSlider extends React.Component {
  previous = () => {
    this.slider.slickPrev();
  };
  next = () => {
    this.slider.slickNext();
  };

  render() {
    const { width, classes } = this.props;

    let mobileView = ["sm", "xs"].includes(width);

    const designerSettings = {
      arrows: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
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
        {!mobileView && (
          <div className="row">
            <div
              className="col-xl-1 col-lg-1 col-md-1 designerCarouselArrows"
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
              <Slider ref={(c) => (this.slider = c)} {...designerSettings}>
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
            </div>
            <div
              className="col-xl-1 col-lg-1 col-md-1 designerCarouselArrows"
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
        )}
      </body>
    );
  }
}

export default withWidth()(DesignerSlider);
