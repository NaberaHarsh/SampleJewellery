import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "inherit",
    },
  },
  sectionMobile: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  indicator: {
    "&:active": {
      outline: "none",
    },
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      outline: "none",
    },
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
    <body>
      <section class="detailInfo">
        <div class="container">
          <AppBar
            position="static"
            elevation={0}
            color="none"
            style={{ borderBlockEnd: "1px solid black" }}
          >
            <div className={classes.sectionDesktop}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab
                  label="DETAILS"
                  {...a11yProps(0)}
                  className={classes.indicator}
                />
                <Tab
                  label="SHIPPING INFO"
                  {...a11yProps(1)}
                  className={classes.indicator}
                />
                <Tab
                  label="CARE INSTRUCTIONS"
                  {...a11yProps(2)}
                  className={classes.indicator}
                />
                <Tab
                  label="RETURNS AND WARRANTY"
                  {...a11yProps(3)}
                  className={classes.indicator}
                />
              </Tabs>
            </div>
            <div className={classes.sectionMobile}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="none"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab
                  label="DETAILS"
                  {...a11yProps(0)}
                  className={classes.indicator}
                />
                <Tab
                  label="SHIPPING INFO"
                  {...a11yProps(1)}
                  className={classes.indicator}
                />
                <Tab
                  label="CARE INSTRUCTIONS"
                  {...a11yProps(2)}
                  className={classes.indicator}
                />
                <Tab
                  label="RETURNS AND WARRANTY"
                  {...a11yProps(3)}
                  className={classes.indicator}
                />
              </Tabs>
            </div>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <div class="row">
                    <div class="col-lg-6">
                      <p>
                        At Amrutam, discover unusual luxury pieces that we have
                        scoured the world to find. We specialise in unique,
                        designer fine jewellery, dreamt up by artists and
                        brought to life by skilled craftspeople in
                        under-the-radar ateliers and workshops scattered across
                        the globe.
                      </p>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td class="border-top-0">SKU</td>
                              <td class="text-right border-top-0">
                                AM00400159
                              </td>
                            </tr>
                            <tr>
                              <td>Colour</td>
                              <td class="text-right">Sliver</td>
                            </tr>
                            <tr>
                              <td>Base material</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                            <tr>
                              <td>Measurements</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <div class="row">
                    <div class="col-lg-6">
                      <p>
                        At Amrutam, discover unusual luxury pieces that we have
                        scoured the world to find. We specialise in unique,
                        designer fine jewellery, dreamt up by artists and
                        brought to life by skilled craftspeople in
                        under-the-radar ateliers and workshops scattered across
                        the globe.
                      </p>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td class="border-top-0">SKU</td>
                              <td class="text-right border-top-0">
                                AM00400159
                              </td>
                            </tr>
                            <tr>
                              <td>Colour</td>
                              <td class="text-right">Sliver</td>
                            </tr>
                            <tr>
                              <td>Base material</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                            <tr>
                              <td>Measurements</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <div class="row">
                    <div class="col-lg-6">
                      <p>
                        At Amrutam, discover unusual luxury pieces that we have
                        scoured the world to find. We specialise in unique,
                        designer fine jewellery, dreamt up by artists and
                        brought to life by skilled craftspeople in
                        under-the-radar ateliers and workshops scattered across
                        the globe.
                      </p>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td class="border-top-0">SKU</td>
                              <td class="text-right border-top-0">
                                AM00400159
                              </td>
                            </tr>
                            <tr>
                              <td>Colour</td>
                              <td class="text-right">Sliver</td>
                            </tr>
                            <tr>
                              <td>Base material</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                            <tr>
                              <td>Measurements</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <div class="row">
                    <div class="col-lg-6">
                      <p>
                        At Amrutam, discover unusual luxury pieces that we have
                        scoured the world to find. We specialise in unique,
                        designer fine jewellery, dreamt up by artists and
                        brought to life by skilled craftspeople in
                        under-the-radar ateliers and workshops scattered across
                        the globe.
                      </p>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td class="border-top-0">SKU</td>
                              <td class="text-right border-top-0">
                                AM00400159
                              </td>
                            </tr>
                            <tr>
                              <td>Colour</td>
                              <td class="text-right">Sliver</td>
                            </tr>
                            <tr>
                              <td>Base material</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                            <tr>
                              <td>Weight</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                            <tr>
                              <td>Measurements</td>
                              <td class="text-right">Stainless steel(316L)</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      </section>
    </body>
  );
}
