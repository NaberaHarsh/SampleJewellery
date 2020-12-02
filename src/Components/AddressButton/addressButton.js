import React from "react";
import "../Home/home.css";
import { Dialog, DialogContent } from "@material-ui/core";

class AddressButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddress: false,
    };
  }
  handleCloseAddress = () => {
    this.setState({ openAddress: false });
  };
  render() {
    return (
      <body>
        <button
          type="button"
          className="btn btnAdd"
          onClick={() =>
            this.setState({
              openAddress: true,
            })
          }
        >
          + ADD NEW ADDRESS
        </button>
        <Dialog open={this.state.openAddress} onClose={this.handleCloseAddress}>
          <DialogContent style={{ padding: "0px" }}>
            <div
              className="addNewAdd "
              id="addModal"
              tabindex="-1"
              aria-labelledby="addModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                style={{ margin: "0px" }}
              >
                <div className="modal-content px-4 py-3">
                  <div className="modal-body">
                    <div className="formWrap">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label for="firstName">FIRST NAME *</label>
                            <input
                              type="email"
                              className="form-control"
                              id="firstName"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label for="lastName">LAST NAME *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-12 mb-0">
                            <label for="firstName">PHONE NUMBER *</label>
                          </div>
                          <div className="form-group col-2">
                            <input
                              type="email"
                              className="form-control"
                              id="firstName"
                              placeholder="+91"
                            />
                          </div>
                          <div className="form-group col-10">
                            <input
                              type="text"
                              className="form-control"
                              id="lastName"
                              placeholder="Enter a valid 10 digit mobile number"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="inputAddress">ADDRESS *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder=""
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-7">
                            <label for="inputCity">CITY *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputCity"
                            />
                          </div>

                          <div className="form-group col-md-5">
                            <label for="inputZip">PIN CODE *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputZip"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="inputState">STATE *</label>
                          <select id="inputState" className="form-control">
                            <option selected value="Select state">
                              Select state
                            </option>
                            <option value="Select state">UK</option>
                            <option value="Select state">UP</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>COUNTRY:</label>
                          <span>India</span>
                        </div>
                        <div className="form-group mb-0">
                          <label>ADDRESS TYPE</label>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="home"
                              />
                              <label
                                className="custom-control-label pl-2 mb-0"
                                for="home"
                              >
                                HOME
                              </label>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="office"
                              />
                              <label
                                className="custom-control-label pl-2 mb-0"
                                for="office"
                              >
                                OFFICE
                              </label>
                            </div>
                          </div>
                          <div className="form-group col-md-4">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="other"
                              />
                              <label
                                className="custom-control-label pl-2 mb-0"
                                for="other"
                              >
                                OTHER
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group text-center mt-3 mb-0">
                          <button type="button" className="btn btnSave">
                            SAVE & DELIVER HERE
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </body>
    );
  }
}
export default AddressButton;
