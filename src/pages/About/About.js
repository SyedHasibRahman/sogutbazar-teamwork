import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
 
import "./About.css";

// https://medsy-modern.vercel.app/_next/static/images/fast-delivery-d1a2ae4a96283c574f087b65dea16637.png

// https://medsy-modern.vercel.app/_next/static/images/fast-delivery-d1a2ae4a96283c574f087b65dea16637.png

// https://medsy-modern.vercel.app/_next/static/images/custom-order-425fa4b0a9ae0d3bd06b812e162a0374.png

// https://medsy-modern.vercel.app/_next/static/images/female-care-087fe8665fae569c7a754591918f6878.png

const About = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="about-bg d-flex justify-content-center align-items-center ">
        <h2 className="text-center explore-head">
          {" "}
          <Link className="item" to="/home">
            Home
          </Link>{" "}
          || About Us
        </h2>
      </div>

      <div className="all-services">
        <div>
          <p> --- OUR ALL---</p>
          <h2>Provided Sevices</h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="d-flex justify-content-center d-flex align-items-center">
              <img
                className="img-fluid mt-2"
                src="https://medsy-modern.vercel.app/_next/static/images/fast-delivery-d1a2ae4a96283c574f087b65dea16637.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center d-flex align-items-center">
              <img
                className="img-fluid mt-2"
                src="https://medsy-modern.vercel.app/_next/static/images/coupon-card-68da624ba5ebdebb76e9ac50edc3a238.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center d-flex align-items-center">
              <img
                className="img-fluid mt-2"
                src="https://medsy-modern.vercel.app/_next/static/images/custom-order-425fa4b0a9ae0d3bd06b812e162a0374.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex justify-content-center d-flex align-items-center">
              <img
                className="img-fluid mt-2"
                src="https://medsy-modern.vercel.app/_next/static/images/female-care-087fe8665fae569c7a754591918f6878.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid w-75"
              src="https://demo.moxcreative.com/medipharma/wp-content/uploads/sites/74/2021/10/pretty-blond-female-pharmacist-and-her-senior-colleague-in-whitecoats-768x512.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h1>With us, expect more than just a pharmacy.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="row ">
              <div className="col-md-6 mt-3">
                <img
                  className="img-fluid about-des-img"
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ940YuOLlaT0sK2sVBe1NBFtRMe24C_1VyO1iRbEamyii4wXR-"
                  alt=""
                />
                <h5>Pharmacy Store</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  fuga molestias deleniti neque tempore quod ad ex voluptatibus
                  ipsa animi.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid about-des-img"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ57Ly345AFVsC908EjYjhYPTONkT0pldTXAOfyDi97jFey-7uO"
                  alt=""
                />
                <h5>Healthy Care</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  tenetur id explicabo dolores magnam quia dicta? Natus ea
                  voluptate distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-5">
          <div>
            <h2 className="text-center">
              We assure customer satisfaction with personal care.
            </h2>
            <p className="text-center">
              Semper netus lacinia inceptos hac vulputate. Bibendum ad volutpat
              vestibulum viverra nibh. Felis neque pharetra consectetur sit eros
              hendrerit elementum sem vivamus urna. Vitae cubilia natoque
              viverra ultrices ex lacus porta et litora.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <div className="mission-vision p-3 m-5">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    className="img-fluid w-25"
                    src="https://4-h.org/wp-content/uploads/2020/10/reflect-icon-576x432-1-300x225.jpg"
                    alt=""
                  />
                </div>
                <h6 className="text-center">Vision</h6>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, est explicabo omnis labore totam laudantium!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission-vision p-3 m-5">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    className="img-fluid vision"
                    src="https://multiplacas.pt/wp-content/uploads/2019/05/icon-produtos.png"
                    alt=""
                  />
                </div>
                <h6 className="text-center">Mission</h6>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  earum voluptas sed numquam quidem nobis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
