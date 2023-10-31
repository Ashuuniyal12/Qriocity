import React from "react";
import '../styles/Testimonial.css'
export default CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};