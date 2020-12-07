import React from "react";
import "../Home/home.css";
import { Link } from "react-router-dom";

class Thankyou extends React.Component {
  render() {
    return (
      <div>
        <main>
          <section className="thankYou">
            <div className="row no-gutters">
              <div className="col-md-6 order-md-1">
                <div className="imgWrap">
                  <img
                    className="img-fluid d-md-none"
                    src="https://dummyimage.com/767x220/d3d3d3/fff.jpg"
                    alt=""
                  />
                  <img
                    className="img-fluid d-none d-md-block"
                    src="https://dummyimage.com/720x690/d3d3d3/fff.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="container h-100">
                  <div className="thankWrap">
                    <div className="thankContent">
                      <h3>Thank You for your Purchase!</h3>
                      <p>
                        ORDER NO. <strong>51968031690</strong>
                      </p>
                      <p>
                        We have sent you an order confirmation email <br /> if
                        you wish to manage your order,
                        <a href="#" className="">
                          click here.
                        </a>
                      </p>

                      <h4>Love from Amrutam</h4>
                      <Link to="/home" className="btn btnContinue">
                        CONTINUE SHOPPING
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Thankyou;
