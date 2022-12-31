import React from 'react';
import './simpleProjectsCarousel.css';

function SimpleProjectsCarousel(props) {
  return (
    <div className="simple-projects-container">
      <div className="simple-projects-carousel">
        <div className="carousel__face">
          <span>Welcome</span>
        </div>
        <div className="carousel__face">
          <span>To Starrika</span>
        </div>
        <div className="carousel__face">
          <span>McCloud's</span>
        </div>
        <div className="carousel__face">
          <span>Fullstack</span>
        </div>
        <div className="carousel__face">
          <span>portfolio</span>
        </div>
        <div className="carousel__face">
          <span>Can you</span>
        </div>
        <div className="carousel__face">
          <span>name all the</span>
        </div>
        <div className="carousel__face">
          <span>gaming</span>
        </div>
        <div className="carousel__face">
          <span>concepts?</span>
        </div>
      </div>
    </div>
  );
}

export default SimpleProjectsCarousel;
