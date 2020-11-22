import React, { Component, Fragment } from "react";
import "./Product.css";
import ProductTab from "./ProductTab";
import CarouselItem from "./CarouselItem";

class ProductPage extends Component {
  render() {
    return (
      <Fragment>
        <body>
          <header className="py-3"></header>
          <main>
            <section className="ProductSummary">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <div className="d-flex justify-content-between align-items-center align-items-md-end flex-md-column">
                      <div className="imgWrap text-right">
                        <img
                          className="img-fluid"
                          src="https://dummyimage.com/80x80/d3d3d3/fff.jpg"
                          alt=""
                        />
                      </div>
                      <div className="imgWrap text-right my-4">
                        <img
                          className="img-fluid"
                          src="https://dummyimage.com/80x80/d3d3d3/fff.jpg"
                          alt=""
                        />
                      </div>
                      <div className="imgWrap text-right">
                        <img
                          className="img-fluid"
                          src="https://dummyimage.com/80x80/d3d3d3/fff.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 mb-4 mb-md-0">
                    <div className="largeImg text-center text-md-left">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/440x440/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="productDetails">
                      <div className="d-flex justify-content-between mb-3">
                        <div className="headingWrap">
                          <h3>White daimond chain necklace</h3>
                          <span>by Dhwani Bansal</span>
                        </div>
                        <a href="#" className="iconHeart">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z"
                              fill="#616161"
                            />
                          </svg>
                        </a>
                      </div>
                      <p>
                        Necklace with 18 kt rose gold chain and 18 kt rose gold
                        pendant set with a diamond
                      </p>

                      <div className="detailWrap">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className="fw-300">Quantity</span>
                          <span>1 +</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className="fw-300">Size</span>
                          <span>7.5</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4 addBag">
                          <span>Rs 2,200</span>
                          <div>
                            <a href="#" className="btn addToBag">
                              Add to Bag
                            </a>
                            <a href="#" className="btn buyNow">
                              Buy Now
                            </a>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className="fw-300">Availability</span>
                          <span className="fs-12">Mode to order</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className="fw-300">Shipping Time</span>
                          <span className="fs-12">5-7 Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ProductTab />

            <CarouselItem data={"PAIR IT WITH"} />

            <section className="meetDesigner">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="bgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="designerWrap">
                      <h3>MEET THE DESIGNER</h3>
                      <p>
                        At Amrutam, discover unusual luxury pieces that we have
                        scoured the world to find. We specialise in unique,
                        designer fine jewellery, dreamt up by artists and
                        brought to life by skilled craftspeople in
                        under-the-radar ateliers and workshops scattered across
                        the globe.{" "}
                      </p>

                      <a href="#" className="discoverMore">
                        <span>DISCOVER MORE</span>{" "}
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
                  <div className="col-lg-4">
                    <div className="bgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="youLike sliderWrap">
              <div className="container">
                <CarouselItem data={"YOU MAY ALSO LIKE"} />
              </div>
            </section>

            <section className="discoverCollection sliderWrap">
              <div className="container">
                <CarouselItem data={"DISCOVER THE COLLECTION"} />
              </div>
            </section>

            <section className="ShopCollection">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="contentWrap">
                      <h3>SHOP THE COLLECTION</h3>
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
                  <div className="col-lg-8">
                    <div className="bgWrap">
                      <img
                        className="img-fluid"
                        src="https://dummyimage.com/874x425/d3d3d3/fff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="py-3"></footer>
        </body>
      </Fragment>
    );
  }
}

export default ProductPage;
