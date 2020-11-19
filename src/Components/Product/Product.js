import React, { Component, Fragment } from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import ProductList from "./ProductList";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ProductList.img3,
    };
  }

  render() {
    const { image } = this.state;
    return (
      <Fragment>
        <Container maxWidth="md">
          <br />
          <br />
          <div>
            <Grid container spacing={16}>
              <Grid xl={2} lg={2} md={2} sm={12} xs={12}>
                <Grid container spacing={16}>
                  <Grid
                    xl={12}
                    lg={12}
                    md={12}
                    sm={4}
                    xs={4}
                    style={{
                      textAlign: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Paper
                      style={{ inlineSize: "fit-content", padding: 4 }}
                      onClick={() => this.setState({ image: ProductList.img1 })}
                    >
                      <img
                        src={ProductList.img1}
                        height="100px"
                        width="100px"
                      ></img>
                    </Paper>
                  </Grid>
                  <Grid
                    xl={12}
                    lg={12}
                    md={12}
                    sm={4}
                    xs={4}
                    style={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    {" "}
                    <Paper
                      style={{ inlineSize: "fit-content", padding: 4 }}
                      onClick={() => this.setState({ image: ProductList.img2 })}
                    >
                      <img
                        src={ProductList.img2}
                        height="100px"
                        width="100px"
                      ></img>{" "}
                    </Paper>
                  </Grid>{" "}
                  <Grid
                    xl={12}
                    lg={12}
                    md={12}
                    sm={4}
                    xs={4}
                    style={{ textAlign: "center", marginBottom: "10px" }}
                  >
                    {" "}
                    <Paper
                      style={{ inlineSize: "fit-content", padding: 4 }}
                      onClick={() => this.setState({ image: ProductList.img3 })}
                    >
                      <img
                        src={ProductList.img3}
                        height="100px"
                        width="100px"
                      ></img>{" "}
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xl={5} lg={5} md={5} sm={12} xs={12}>
                <Paper style={{ inlineSize: "fit-content", padding: 4 }}>
                  <img src={image} height="340px" width="320px" />
                </Paper>{" "}
              </Grid>
              <Grid xl={5} lg={5} md={5} sm={12} xs={12}>
                <br />
                <div className="product">
                  <div style={{ float: "right" }}>
                    <FavoriteBorderIcon />
                  </div>
                  <div className="heading">{ProductList.name}</div>
                  <div>by {ProductList.madeBy}</div>
                  <p>{ProductList.desc}</p>
                  <div style={{ float: "right" }}>{ProductList.quantity}+</div>
                  <p>Quantity:</p>
                  <div style={{ float: "right" }}>{ProductList.size}</div>
                  <p>Size:</p>

                  <div style={{ float: "right", marginLeft: "20px" }}>
                    {
                      <Button variant="outlined" style={{ fontSize: "12px" }}>
                        Buy now
                      </Button>
                    }
                  </div>
                  <div style={{ float: "right" }}>
                    {
                      <Button variant="contained" style={{ fontSize: "12px" }}>
                        Add to bag
                      </Button>
                    }
                  </div>

                  <p style={{ marginTop: "20px" }}>Rs {ProductList.price}</p>
                  <br />
                  <p style={{ float: "right" }}>{ProductList.avability}</p>
                  <p>Avaliability</p>

                  <div style={{ float: "right" }}>{ProductList.time}</div>
                  <p>Shipping Time</p>
                </div>
              </Grid>{" "}
            </Grid>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Product;
