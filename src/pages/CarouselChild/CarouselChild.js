import React from "react";
import { Link } from "react-router-dom";

const CarouselChild = ({ active, carousel }) => {
  const { title, description, image } = carousel;

  return (
    <div className={ `carousel-item ${active ? "active" : ""} carousel-img` }>
      <img
        src={ `data:image/jpeg;base64,${image}` }
        class="d-block w-100 h-100"
        alt="..."
      />
      <div class="carousel-caption d-md-block">
        <h1>
          {/* Taking <span>Good</span> <br /> Care Of Yourself */ }
          { title }
        </h1>
        <p>
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          adipisci <br /> quae dolorum in molestiae corrupti. */}
          { description }
        </p>

        <div class="slider-btn">
          <button class=" custom-btn">
            <Link to="/allproduct">View All Product</Link>
          </button>
          <button class="custom-btn">Book</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselChild;
