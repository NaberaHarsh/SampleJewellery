import React from "react";
import "../Home/home.css";

const ReferFriend = () => {
  return (
    <body>
      <main>
        <section class="thankYou referFriend py-2">
          <div class="row no-gutters">
            <div class="col-md-6 order-md-1">
              <div class="imgWrap text-center">
                <img
                  class="img-fluid d-md-none"
                  src="https://dummyimage.com/380x220/d3d3d3/fff.jpg"
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
                    <h4>Love from Amrutam</h4>
                    <h3>Give Rs. 250, Get Rs. 250</h3>
                    <p>
                      Give your friends Rs. 250 off their first order of <br />
                      Rs. 2000 and get Rs.250 off on you next order for <br />
                      each successful referral. T&C apply.
                    </p>

                    <div class="form-group">
                      <label>Enter your E-mail address</label>
                      <input type="email" class="form-control" />
                    </div>

                    <a href="#" class="btn btnContinue">
                      CONTINUE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>{" "}
    </body>
  );
};

export default ReferFriend;
