// React and Data
import React, { useEffect } from 'react';
import dataMenu from '../data/DataMenu'; 

// Animation
import AOS from 'aos';

// Styles
import '../styles/categories.css'; 
import 'aos/dist/aos.css'; 

//Start 
function Categories() {
  useEffect(() => {
    // Initialize AOS 
    AOS.init({
      duration: 700, 
      easing: 'ease-in-out', 
    });
  }, []); 

  return (
    <div className="bg">
      <div className="container mt-5">
        {/* Section title with fade-up animation */}
        <h2 className="text-center styled-heading pb-0" data-aos="fade-up">
          Discover Our Delights
        </h2>
        {/* Section description with fade-up animation */}
        <p className="text-center pb-4" data-aos="fade-up">
          Explore our categories and find your next favorite dish.
        </p>
        
        <div className="row">
          {/* Map through the dataMenu array to display each category */}
          {dataMenu.map((category, index) => (
            <div
              key={category.id} 
              className="col-md-3 col-6 mb-3"
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`} 
            >
              {/* Card for each category */}
              <div className="card rounded-circle">
                <img
                  src={`/images/categories/${category.imageOfCategory}`} 
                  alt={category.nameOfCategory} // Alt text for accessibility
                  className="card-img-top"
                />
                <div className="card-body">
                  {/* Category name with styling */}
                  <h5 className="card-title capitalize-first-letter">
                    {category.nameOfCategory}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Button to navigate to the menu page */}
        <div className="text-center mt-4">
          <button className="btn custom-btn" data-aos="fade-up">
            <a href="/menu" className="text-white text-decoration-none">
              See Our Menu
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories; 
