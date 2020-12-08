import React from "react";
import "../Home/home.css";

const Contact = () => {
  return (
    <body>
      <main>
        <section class="contactWrap">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h3 class="titleHeading">CONTACT US</h3>
              </div>
              <div class="col-md-6 mb-4 mb-md-0">
                <div class="conForm">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="firstName">FIRST NAME *</label>
                        <input
                          type="email"
                          class="form-control"
                          id="firstName"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="lastName">LAST NAME *</label>
                        <input type="text" class="form-control" id="lastName" />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputEmail">E-MAIL *</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail"
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12 mb-0">
                        <label for="firstName">PHONE NUMBER *</label>
                      </div>
                      <div class="form-group col-2">
                        <input
                          type="email"
                          class="form-control"
                          id="firstName"
                          placeholder="+91"
                        />
                      </div>
                      <div class="form-group col-10">
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          placeholder="Enter a valid 10 digit mobile number"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputSubject">SUBJECT *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputSubject"
                        placeholder=""
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputMessage">MESSAGE *</label>
                      <textarea class="form-control" rows="10"></textarea>
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="btn btnSend">
                        SEND
                      </button>
                    </div>
                  </form>
                </div>

                {/*  After Message Sent content Start  */}
                <div class="thankWrap d-none">
                  <div class="thankContent">
                    <h3>
                      Your message has been successfully <br /> submitted!
                    </h3>
                    <p>
                      TICKET ID. <strong>51968031690</strong>
                    </p>
                    <p>
                      Our Customer care team will get in touch with you at the
                      given <br /> email/contact number.
                    </p>
                  </div>
                </div>
                {/* <!-- End --> */}
              </div>
              <div class="col-md-6">
                <div class="infoWrap">
                  <div class="contentWrap">
                    <h3>General Enquiries</h3>
                    <p>
                      EMAIL:{" "}
                      <a href="mailto:info@amrutamjewelry.com">
                        INFO@AMRUTAMJEWELRY.COM
                      </a>
                    </p>
                    <p>
                      PHONE: <a href="tel:+91-9871024847">+91-9871024847</a>
                    </p>
                    <p>Monday to Saturday 10:00am to 6:00pm</p>
                  </div>
                  <div class="contentWrap">
                    <h3>PR & Media Enquiries</h3>
                    <p>
                      EMAIL:{" "}
                      <a href="mailto:info@amrutamjewelry.com">
                        INFO@AMRUTAMJEWELRY.COM
                      </a>
                    </p>
                  </div>
                  <div class="contentWrap">
                    <h3>Designers who want to join the community</h3>
                    <p>
                      EMAIL:{" "}
                      <a href="mailto:info@amrutamjewelry.com">
                        INFO@AMRUTAMJEWELRY.COM
                      </a>
                    </p>
                    <p>
                      PHONE: <a href="tel:+91-9871024847">+91-9871024847</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Contact;
