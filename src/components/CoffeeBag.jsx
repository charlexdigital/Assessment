// React and Hooks
import React, { useEffect } from 'react';

// Animation Library
import AOS from 'aos'; 

// Styles
import '../styles/coffeeBag.css'; 
import 'aos/dist/aos.css'; 

//Start 
function CoffeeBag() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <section className="coffee-bag-section d-flex align-items-center">
      <div className="coffee-bag-overlay"></div>

      <div className="container coffee-bag-container">
        <div className="row align-items-center">
          
          {/* Text Section */}
          <div 
            className="col-12 col-md-6 coffee-bag-text text-center text-md-start pb-5 pt-5"
            data-aos="fade-up"
          >
            <h2 className="coffee-bag-heading">Buy Our Coffee Beans</h2>
            <p className="coffee-bag-description">
              Enjoy the taste of our premium coffee at home.
            </p>
            <a 
              href="https://wa.me/61450459202" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn coffee-bag-btn"
              data-aos="fade-up"
            >
              Order Now
            </a>
          </div>

          {/* Image Section */}
          <div 
            className="col-12 col-md-6 coffee-bag-image-container text-center"
            data-aos="fade-down"
          >
            <img
              src="/images/coffee-bag.png"
              alt="Coffee Bag"
              className="img-fluid coffee-bag-image"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CoffeeBag;
