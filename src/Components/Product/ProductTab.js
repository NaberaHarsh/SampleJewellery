import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Grid, Paper } from "@material-ui/core";
import Data from "./ProductTabData";
import "./Product.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="md">
      <div>
        <br />
        <br />
        <AppBar
          position="static"
          elevation={0}
          color="none"
          style={{ borderBlockEnd: "1px solid black" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="DETAILS" {...a11yProps(0)} />
            <Tab label="SHIPPING INFO" {...a11yProps(1)} />
            <Tab label="CARE INSTRUCTIONS" {...a11yProps(2)} />
            <Tab label="RETURNS AND WARRANTY" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <br />
            <Grid container spacing={16}>
              <Grid xl={5} lg={5} md={5} sm={12} xs={12}>
                <div className="product" style={{ lineHeight: "24px" }}>
                  {Data.details}{" "}
                </div>
              </Grid>
              <Grid xl={3} lg={3} md={3} sm={12} xs={12}>
                <br />
              </Grid>
              <Grid xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className="product">
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.sku}</div>
                    <p>SKU</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.color}</div>
                    <p>Colour</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.material}</div>
                    <p>Base Material</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.weight}</div>
                    <p>Weight</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.measurements}</div>
                    <p>Measurements</p>
                  </p>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <br />
            <Grid container spacing={16}>
              <Grid xl={5} lg={5} md={5} sm={12} xs={12}>
                <div className="product" style={{ lineHeight: "24px" }}>
                  {Data.details}{" "}
                </div>
              </Grid>
              <Grid xl={3} lg={3} md={3} sm={12} xs={12}>
                <br />
              </Grid>
              <Grid xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className="product">
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.sku}</div>
                    <p>SKU</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.color}</div>
                    <p>Colour</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.material}</div>
                    <p>Base Material</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.weight}</div>
                    <p>Weight</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.measurements}</div>
                    <p>Measurements</p>
                  </p>
                </div>
              </Grid>
            </Grid>{" "}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <br />
            <Grid container spacing={16}>
              <Grid xl={5} lg={5} md={5} sm={12} xs={12}>
                <div className="product" style={{ lineHeight: "24px" }}>
                  {Data.details}{" "}
                </div>
              </Grid>
              <Grid xl={3} lg={3} md={3} sm={12} xs={12}>
                <br />
              </Grid>
              <Grid xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className="product">
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.sku}</div>
                    <p>SKU</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.color}</div>
                    <p>Colour</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.material}</div>
                    <p>Base Material</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.weight}</div>
                    <p>Weight</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.measurements}</div>
                    <p>Measurements</p>
                  </p>
                </div>
              </Grid>
            </Grid>{" "}
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <br />
            <Grid container spacing={16}>
              <Grid xl={5} lg={5} md={5} sm={12} xs={12}>
                <div className="product" style={{ lineHeight: "24px" }}>
                  {Data.details}{" "}
                </div>
              </Grid>
              <Grid xl={3} lg={3} md={3} sm={12} xs={12}>
                <br />
              </Grid>
              <Grid xl={4} lg={4} md={4} sm={12} xs={12}>
                <div className="product">
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.sku}</div>
                    <p>SKU</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.color}</div>
                    <p>Colour</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.material}</div>
                    <p>Base Material</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.weight}</div>
                    <p>Weight</p>
                  </p>
                  <p style={{ borderBlockEnd: "1px solid #444745" }}>
                    <div style={{ float: "right" }}>{Data.measurements}</div>
                    <p>Measurements</p>
                  </p>
                </div>
              </Grid>
            </Grid>{" "}
          </TabPanel>
        </SwipeableViews>
      </div>
    </Container>
  );
}
