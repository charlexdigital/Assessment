// React and Components
import React from 'react';
import { Carousel } from 'react-bootstrap';
import dataSlider from '../data/DataSlider'; 

// Styles
import '../styles/fullScreenSlider.css';

// Start
function FullScreenSlider() {
  return (
    <section id="fullscreen-slider">
      <Carousel interval={8000} pause={false} fade>
        {dataSlider.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="slider-item d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + slide.image})` }}
            >
              <div className="text-center text-white">
                <h1 className="display-4">{slide.title}</h1>
                <p className="lead">{slide.subtitle}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default FullScreenSlider;
