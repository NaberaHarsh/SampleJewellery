import React, { Component } from "react";
import "./checkout.css";

class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>
        <main>
          <section className="checkoutPage">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3 className="titleHeading">CHECKOUT</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="checkoutCollapse">
                    <div className="accordion" id="accordionCheckout">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span>1. LOGIN</span>
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ marginLeft: "6px" }}
                              >
                                <path
                                  d="M0 10.58L4.1244 6L0 1.41L1.26974 0L6.67288 6L1.26974 12L0 10.58Z"
                                  fill="#616161"
                                />
                              </svg>
                            </button>
                          </h2>
                        </div>

                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionCheckout"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Collapsible Group Item #2
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionCheckout"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link btn-block text-left collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Collapsible Group Item #3
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionCheckout"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="productDetails"
                    style={{ marginBottom: "2px" }}
                  >
                    <div className="productItem">
                      <div className="itemDetails">
                        <div className="imgWrap">
                          <img
                            className="img-fluid"
                            src="https://dummyimage.com/100x100/d3d3d3/fff.jpg"
                            alt=""
                          />
                        </div>
                        <div className="itemWrap">
                          <h5>Artisan Square Necklace 18ct Gold Plate</h5>
                          <div className="qty">
                            <span>
                              <input
                                type="hidden"
                                className="form-control"
                                placeholder="1"
                              />
                            </span>
                          </div>
                          <div className="priceBar">
                            <span className="offerPrice">
                              ₹<span>474</span>
                            </span>
                            <span
                              className="prePrice"
                              style={{ padding: "0 4px 0 4px" }}
                            >
                              ₹<span>474</span>
                            </span>
                            <span className="discount">50% off</span>
                          </div>
                        </div>
                      </div>
                      <div className="priceDetails">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th colspan="2">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="gift"
                                    />
                                    <label
                                      className="custom-control-label pl-2 mb-0"
                                      for="gift"
                                    >
                                      This is a gift
                                    </label>
                                  </div>
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>SUBTOTAL</td>
                                <td className="fontEb">Rs 10,000</td>
                              </tr>
                              <tr>
                                <td>
                                  COUPON <span className="code">YAK200</span>
                                </td>
                                <td className="fontEb">Rs 200</td>
                              </tr>
                              <tr>
                                <td>SHIPPING</td>
                                <td className="fontEb">Rs 0</td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td>GRAND TOTAL</td>
                                <td className="fontEb">Rs. 9800</td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="couponCode"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    );
  }
}

export default Checkout;
