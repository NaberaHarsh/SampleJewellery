import React from "react";
import "./thankyou.css";
class Thankyou extends React.Component {
  render() {
    return (
      <div>
        <main>
          <section class="thankYou">
            <div class="row no-gutters">
              <div class="col-md-6 order-md-1">
                <div class="imgWrap">
                  <img
                    class="img-fluid d-md-none"
                    src="https://dummyimage.com/767x220/d3d3d3/fff.jpg"
                    alt=""
                  />
                  <img
                    class="img-fluid d-none d-md-block"
                    src="https://dummyimage.com/720x690/d3d3d3/fff.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="container h-100">
                  <div class="thankWrap">
                    <div class="thankContent">
                      <h3>Thank You for your Purchase!</h3>
                      <p>
                        ORDER NO. <strong>51968031690</strong>
                      </p>
                      <p>
                        We have sent you an order confirmation email <br /> if
                        you wish to manage your order,
                        <a href="#" class="">
                          click here.
                        </a>
                      </p>

                      <h4>Love from Amrutam</h4>
                      <a href="#" class="btn btnContinue">
                        CONTINUE SHOPPING
                      </a>
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
