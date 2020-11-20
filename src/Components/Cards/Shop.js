import React, { Component, Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import "./cards.css";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <br />
        <div className={classes.sectionDesktop}>
          <Grid container spacing={16} style={{ textAlign: "center" }}>
            <Grid xl={4} lg={4} md={4} style={{ textAlign: "center" }}>
              <div
                className="contentWrap"
                style={{ height: 400, marginRight: "30px" }}
              >
                <h3>SHOP THE COLLECTION</h3>
                <p>
                  At Amrutam, discover unusual luxury pieces that we have
                  scoured the world to find.{" "}
                </p>
                <a
                  href="#"
                  className="shopNow"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span>SHOP NOW</span>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: 10 }}
                  >
                    <path
                      d="M0 10.58L4.1244 6L0 1.41L1.26974 0L6.67288 6L1.26974 12L0 10.58Z"
                      fill="#616161"
                    />
                  </svg>
                </a>
              </div>
            </Grid>
            <Grid xl={8} lg={8} md={8} style={{ textAlign: "center" }}>
              <div>
                <img
                  class="img-fluid"
                  src="https://dummyimage.com/874x425/d3d3d3/fff.jpg"
                  alt=""
                  height="400"
                  width="100%"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.sectionMobile}>
          <Grid container spacing={16} style={{ textAlign: "center" }}>
            <Grid sm={12} xs={12} style={{ textAlign: "center" }}>
              <div
                className="contentWrap"
                style={{ height: 360, width: "fit-content" }}
              >
                <h3>SHOP THE COLLECTION</h3>
                <p>
                  At Amrutam, discover unusual luxury pieces that we have
                  scoured the world to find.{" "}
                </p>
                <a
                  href="#"
                  className="shopNow"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span>SHOP NOW</span>
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: 10 }}
                  >
                    <path
                      d="M0 10.58L4.1244 6L0 1.41L1.26974 0L6.67288 6L1.26974 12L0 10.58Z"
                      fill="#616161"
                    />
                  </svg>
                </a>
              </div>
            </Grid>
            <Grid sm={12} xs={12} style={{ textAlign: "center" }}>
              {/* <div style={{ width: "fit-content" }}> */}
              <img
                src="https://dummyimage.com/874x425/d3d3d3/fff.jpg"
                alt=""
                height="180px"
                width="fit-content"
              />
              {/* </div> */}
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
export default withStyles(styles)(Shop);
