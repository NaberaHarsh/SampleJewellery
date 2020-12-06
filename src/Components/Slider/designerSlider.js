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
                        src="../../assets/images/Home/static/designer1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer1product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Pearl Triple Haven Danglers</em>
                    <em>By</em>
                    <h5>SONAXHI TIBREWAL</h5>
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
                        src="../../assets/images/Home/static/designer2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer2product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Real Jadtar Stones Maangtika</em>
                    <em>By</em>
                    <h5>SHIKHA JINDAL</h5>
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
                        src="../../assets/images/Home/static/designer3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer3product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Cosmic Open Ring</em>
                    <em>By</em>
                    <h5>ARADHNA</h5>
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
                        src="../../assets/images/Home/static/designer4.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer4product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Silver Earrings</em>
                    <em>By</em>
                    <h5>SNAGITA BOOCHRA</h5>
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
                        src="../../assets/images/Home/static/designer5.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer5product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Knightbridge Hoops</em>
                    <em>By</em>
                    <h5>ASMITA KULSHRESHTHA</h5>
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
                        src="../../assets/images/Home/static/designer6.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer6product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Silver Dangler Earrings</em>
                    <em>By</em>
                    <h5>PRAGYA BOTHRA</h5>
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
                        src="../../assets/images/Home/static/designer7.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer7product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Shackle Necklace</em>
                    <em>By</em>
                    <h5>ARPAN PATEL & AYUSHI</h5>
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
                        src="../../assets/images/Home/static/designer8.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer8product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Mohini Gold And Pink Ring</em>
                    <em>By</em>
                    <h5>ANVITA AGRAWAL</h5>
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
                        src="../../assets/images/Home/static/designer9.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="designBy">
                  <div className="imgWrap">
                    <img
                      className="img-fluid"
                      src="../../assets/images/Home/static/designer9product.png"
                      alt=""
                    />
                  </div>
                  <div className="designerTitle">
                    <em>Necklace Set</em>
                    <em>By</em>
                    <h5>PINKAL BAFNA</h5>
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
                    src="../../assets/images/Home/static/designer1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer1product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Pearl Triple Haven Danglers</em>
                <em>By</em>
                <h5>SONAXHI TIBREWAL</h5>
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
                    src="../../assets/images/Home/static/designer2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer2product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Real Jadtar Stones Maangtika</em>
                <em>By</em>
                <h5>SHIKHA JINDAL</h5>
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
                    src="../../assets/images/Home/static/designer3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer3product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Cosmic Open Ring</em>
                <em>By</em>
                <h5>ARADHNA</h5>
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
                    src="../../assets/images/Home/static/designer4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer4product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Silver Earrings</em>
                <em>By</em>
                <h5>SNAGITA BOOCHRA</h5>
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
                    src="../../assets/images/Home/static/designer5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer5product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Knightbridge Hoops</em>
                <em>By</em>
                <h5>ASMITA KULSHRESHTHA</h5>
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
                    src="../../assets/images/Home/static/designer6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer6product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Silver Dangler Earrings</em>
                <em>By</em>
                <h5>PRAGYA BOTHRA</h5>
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
                    src="../../assets/images/Home/static/designer7.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer7product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Shackle Necklace</em>
                <em>By</em>
                <h5>ARPAN PATEL & AYUSHI</h5>
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
                    src="../../assets/images/Home/static/designer8.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer8product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Mohini Gold And Pink Ring</em>
                <em>By</em>
                <h5>ANVITA AGRAWAL</h5>
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
                    src="../../assets/images/Home/static/designer9.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="designBy">
              <div className="imgWrap">
                <img
                  className="img-fluid"
                  src="../../assets/images/Home/static/designer9product.png"
                  alt=""
                />
              </div>
              <div className="designerTitle">
                <em>Necklace Set</em>
                <em>By</em>
                <h5>PINKAL BAFNA</h5>
              </div>
            </div>
          </Slider>
        )}
      </body>
    );
  }
}

export default withWidth()(DesignerSlider);
