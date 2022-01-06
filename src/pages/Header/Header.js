import React, { useEffect } from "react";
import "./Header.css";
import CarouselChild from "../CarouselChild/CarouselChild";
import { useDispatch, useSelector } from "react-redux";
import { loadBanners } from "../../store/userDashboard";

const Header = () => {
  const dispatch = useDispatch();
  const banners = useSelector(
    (state) => state.entities.userDashboard.banners.allBanner
  );

  useEffect(() => {
    dispatch(loadBanners());
  });

  return (
    <>
      {/*  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.ibb.co/K7G7wy3/banner1.png" class="d-block w-100 h-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://www.sskirana.com/wp-content/uploads/2020/12/2.jpg" class="d-block w-100 h-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2684/Default/stores/chaldal/components/landingPage2/LandingPage/images/landingBannerTop.png" class="d-block w-100 h-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
      <div className="banner">
        <div className="row">
          <div className="col-md-6 d-flex  flex-column justify-content-center  align-items-center">
            <h1 className="p-5">Welcome to SogutBazar</h1>
            <h2 className="px-5">Get The Best and fresh Grocery </h2>
            <a href="/allproduct" className="btn btn-info px-5">All Products</a>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
