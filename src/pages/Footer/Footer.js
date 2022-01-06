import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>E Farma</h3>
                <ul>
                  <li>
                    <a href="#">Address</a>
                  </li>
                  <li>
                    <a href="#">Gmail</a>
                  </li>
                  <li>
                    <a href="#">ssddd</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>E Menu</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <img className="w-50"
                  src="https://i.ibb.co/FHjk04S/logo2.png"
                  alt=""
                />
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>

              {/* <div className="col social-media  mt-3">
                <a href="#" target="_blank">
                  <i className=" fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </div> */}
            </div>
            <p className="copyright">Copyright BY Team 127 © 2022</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
