import React, { Component, Fragment } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./Product.css";
import Carousel, { consts } from "react-elastic-carousel";
import Data from "./CarouselData";
import Item from "./Item";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
});

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
];

class CarouselItem extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Carousel
          breakPoints={breakPoints}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div
                key={pages}
                onClick={() => onClick(pages)}
                style={{ display: "none" }}
              />
            );
          }}
        >
          {Data.length > 0 &&
            Data.map((e, i) => (
              <Item>
                <div className=" slickSlider">
                  <div className="imgWrap">
                    <img className="img-fluid" src={e.img} alt="" />
                  </div>
                  <div className="priceCaption">
                    <p
                      style={{
                        marginTop: 10,
                        fontFamily: "EB Garamond, serif",
                        color: "#616161",
                        marginBottom: 2,
                      }}
                    >
                      {e.name}
                    </p>
                    <p
                      className="fw-500"
                      style={{
                        fontFamily: "EB Garamond, serif",
                        color: "#616161",
                      }}
                    >
                      Rs. {e.price}
                    </p>
                  </div>
                </div>
              </Item>
            ))}
        </Carousel>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CarouselItem);
