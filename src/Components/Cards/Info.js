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
class Info extends Component {
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
            <Grid
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <img
                src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                height="380"
              ></img>
            </Grid>
            <Grid
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <div className="designerWrap" style={{ height: 380 }}>
                <h3>MEET THE DESIGNER</h3>
                <p>
                  At Amrutam, discover unusual luxury pieces that we have
                  scoured the world to find. We specialise in unique, designer
                  fine jewellery, dreamt up by artists and brought to life by
                  skilled craftspeople in under-the-radar ateliers and workshops
                  scattered across the globe.{" "}
                </p>
                <a
                  href="#"
                  class="discoverMore"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span>DISCOVER MORE</span>{" "}
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
                </a>{" "}
              </div>
            </Grid>
            <Grid
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <img
                src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                height="380"
              ></img>
            </Grid>
          </Grid>
        </div>

        <div className={classes.sectionMobile}>
          <Grid container spacing={16} style={{ textAlign: "center" }}>
            <Grid
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <img
                src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                height="320"
              ></img>
            </Grid>
            <Grid
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <div
                className="designerWrap"
                style={{
                  height: 320,
                  width: "fit-content",
                }}
              >
                <h3>MEET THE DESIGNER</h3>
                <p>
                  At Amrutam, discover unusual luxury pieces that we have
                  scoured the world to find. We specialise in unique, designer
                  fine jewellery, dreamt up by artists and brought to life by
                  skilled craftspeople in under-the-radar ateliers and workshops
                  scattered across the globe.{" "}
                </p>
                <a
                  href="#"
                  class="discoverMore"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span>DISCOVER MORE</span>{" "}
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
                </a>{" "}
              </div>
            </Grid>
            <Grid
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              style={{ textAlign: "center" }}
            >
              <img
                src="https://dummyimage.com/465x410/d3d3d3/fff.jpg"
                height="320"
              ></img>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
export default withStyles(styles)(Info);
