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
      <section className="detailInfo">
        <div className="container">
          <nav className="detailNav">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                className="nav-link active"
                id="nav-details-tab"
                data-toggle="tab"
                href="#nav-details"
                role="tab"
                aria-controls="nav-details"
                aria-selected="true"
              >
                DETAILS
              </a>
              <a
                className="nav-link"
                id="nav-shipping-tab"
                data-toggle="tab"
                href="#nav-shipping"
                role="tab"
                aria-controls="nav-shipping"
                aria-selected="false"
              >
                SHIPPING INFO
              </a>
              <a
                className="nav-link"
                id="nav-instruction-tab"
                data-toggle="tab"
                href="#nav-instruction"
                role="tab"
                aria-controls="nav-instruction"
                aria-selected="false"
              >
                CARE INSTRUCTIONS
              </a>
              <a
                className="nav-link"
                id="nav-warrenty-tab"
                data-toggle="tab"
                href="#nav-warrenty"
                role="tab"
                aria-controls="nav-warrenty"
                aria-selected="false"
              >
                RETURNS AND WARRANTY
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-details"
              role="tabpanel"
              aria-labelledby="nav-details-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    At Amrutam, discover unusual luxury pieces that we have
                    scoured the world to find. We specialise in unique, designer
                    fine jewellery, dreamt up by artists and brought to life by
                    skilled craftspeople in under-the-radar ateliers and
                    workshops scattered across the globe.
                  </p>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="border-top-0">SKU</td>
                          <td className="text-right border-top-0">
                            AM00400159
                          </td>
                        </tr>
                        <tr>
                          <td>Colour</td>
                          <td className="text-right">Sliver</td>
                        </tr>
                        <tr>
                          <td>Base material</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                        <tr>
                          <td>Measurements</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-shipping"
              role="tabpanel"
              aria-labelledby="nav-shipping-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    At Amrutam, discover unusual luxury pieces that we have
                    scoured the world to find. We specialise in unique, designer
                    fine jewellery, dreamt up by artists and brought to life by
                    skilled craftspeople in under-the-radar ateliers and
                    workshops scattered across the globe.
                  </p>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="border-top-0">SKU</td>
                          <td className="text-right border-top-0">
                            AM00400159
                          </td>
                        </tr>
                        <tr>
                          <td>Colour</td>
                          <td className="text-right">Sliver</td>
                        </tr>
                        <tr>
                          <td>Base material</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                        <tr>
                          <td>Measurements</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-instruction"
              role="tabpanel"
              aria-labelledby="nav-instruction-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    At Amrutam, discover unusual luxury pieces that we have
                    scoured the world to find. We specialise in unique, designer
                    fine jewellery, dreamt up by artists and brought to life by
                    skilled craftspeople in under-the-radar ateliers and
                    workshops scattered across the globe.
                  </p>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="border-top-0">SKU</td>
                          <td className="text-right border-top-0">
                            AM00400159
                          </td>
                        </tr>
                        <tr>
                          <td>Colour</td>
                          <td className="text-right">Sliver</td>
                        </tr>
                        <tr>
                          <td>Base material</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                        <tr>
                          <td>Measurements</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-warrenty"
              role="tabpanel"
              aria-labelledby="nav-warrenty-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    At Amrutam, discover unusual luxury pieces that we have
                    scoured the world to find. We specialise in unique, designer
                    fine jewellery, dreamt up by artists and brought to life by
                    skilled craftspeople in under-the-radar ateliers and
                    workshops scattered across the globe.
                  </p>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="border-top-0">SKU</td>
                          <td className="text-right border-top-0">
                            AM00400159
                          </td>
                        </tr>
                        <tr>
                          <td>Colour</td>
                          <td className="text-right">Sliver</td>
                        </tr>
                        <tr>
                          <td>Base material</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                        <tr>
                          <td>Weight</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                        <tr>
                          <td>Measurements</td>
                          <td className="text-right">Stainless steel(316L)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
