import React, { Component, Fragment } from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import Data from "./PairData";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./cards.css";

class LikedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Container maxWidth="md">
          <br />
          <h3 style={{ textAlign: "center" }} className="heading">
            YOU MAY ALSO LIKE{" "}
          </h3>
          <br />
          <Grid container spacing={16} style={{ textAlign: "center" }}>
            {Data.length > 0 &&
              Data.map((e, i) => (
                <Grid
                  xl={3}
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  key={i}
                  style={{ textAlign: "center" }}
                >
                  <Paper elevation={0}>
                    <img src={e.img} height="200"></img>
                  </Paper>
                  <div className="text">{e.name}</div>
                  <p className="text">Rs. {e.price}</p>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}
export default LikedProduct;
