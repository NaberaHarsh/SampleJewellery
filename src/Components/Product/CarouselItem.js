import React, { Component, Fragment } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import "./Product.css";
import Carousel, { consts } from "react-elastic-carousel";
import Data from "./CarouselData";
import Item from "./Item";

class CarouselItem extends Component {
  render() {
    const { classNamees } = this.props;
    return (
      <section className="pairWith sliderWrap">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3>{this.props.data}</h3>
            </div>
          </div>
          <div className="row slickSlider">
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
            <div className="col-lg-3">
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
          </div>
        </div>
      </section>
    );
  }
}

export default CarouselItem;
