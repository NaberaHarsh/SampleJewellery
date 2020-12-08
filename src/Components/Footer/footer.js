import React, { Component } from "react";
import "../Home/home.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>
        <footer class="amrutamFooter">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 mb-5 order-lg-2 text-center text-md-left">
                <h5>Sign up for our news letters</h5>
                <p>
                  Be the first to know about new designer launches, exclusive
                  collections, latest trends, stories and more.
                </p>
                <div class="inputWrap">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your e-mail address"
                  />
                </div>
                <button class="btn btn-outline-dark">SUBMIT</button>
              </div>

              <div class="col-md-6 col-lg-4 mb-4">
                <div class="row">
                  <div class="col-6">
                    <h5 class="pl-3">Information</h5>
                    <ul class="list-unstyled pl-3">
                      <li>
                        <a href="#">Returns & Exchanges</a>
                      </li>
                      <li>
                        <a href="#">Shipping Information</a>
                      </li>
                      <li>
                        <a href="#" class="text-nowrap">
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#">Privacy & Cookies</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-6">
                    <h5 class="pl-3">Amrutam</h5>
                    <ul class="list-unstyled pl-3">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/designer">Discover Designers</Link>
                      </li>
                      <li>
                        <a href="#">Journal</a>
                      </li>
                      <li>
                        <Link to="/refer">Refer a friend</Link>
                      </li>
                      <li>
                        <Link to="/gift">Gift</Link>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 mb-3 mb-lg-4 text-center text-md-left">
                <h5>Services</h5>
                <ul class="list-unstyled">
                  <li>
                    <a href="tel:+91-9871024847">Need help? +91-9871024847</a>
                  </li>
                  <li>
                    <a href="mailto:info@amrutamjewelry.com">
                      Available from Mon-Sat from 10am-8pm IST or 24/7 at
                      <br /> info@amrutamjewelry.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@amrutamjewelry.com">
                      For designers info@amrutamjewelry.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row subFooter">
              <div class="col text-center">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.04004C6.5 2.04004 2 6.53004 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85004C10.44 7.34004 11.93 5.96004 14.22 5.96004C15.31 5.96004 16.45 6.15004 16.45 6.15004V8.62004H15.19C13.95 8.62004 13.56 9.39004 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3856 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53004 17.5 2.04004 12 2.04004Z"
                      fill="#84766F"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                      fill="#84766F"
                    />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04 21.54C10 21.83 10.97 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.25 4.67 19.9 8.44 21.34C8.35 20.56 8.26 19.27 8.44 18.38L9.59 13.44C9.59 13.44 9.3 12.86 9.3 11.94C9.3 10.56 10.16 9.53 11.14 9.53C12 9.53 12.4 10.16 12.4 10.97C12.4 11.83 11.83 13.06 11.54 14.24C11.37 15.22 12.06 16.08 13.06 16.08C14.84 16.08 16.22 14.18 16.22 11.5C16.22 9.1 14.5 7.46 12.03 7.46C9.21 7.46 7.55 9.56 7.55 11.77C7.55 12.63 7.83 13.5 8.29 14.07C8.38 14.13 8.38 14.21 8.35 14.36L8.06 15.45C8.06 15.62 7.95 15.68 7.78 15.56C6.5 15 5.76 13.18 5.76 11.71C5.76 8.55 8 5.68 12.32 5.68C15.76 5.68 18.44 8.15 18.44 11.43C18.44 14.87 16.31 17.63 13.26 17.63C12.29 17.63 11.34 17.11 11 16.5L10.33 18.87C10.1 19.73 9.47 20.88 9.04 21.57V21.54Z"
                      fill="#84766F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}
export default Footer;
