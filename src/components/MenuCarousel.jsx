//React and Hooks
import React, { useState, useRef } from 'react';

//Slick Slider
import Slider from 'react-slick';

//Styles
import '../styles/menuCarousel.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

//Data and Icons
import dataMenu from '../data/DataMenu'; 
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'; 

//Component
function MenuCarousel() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const sliderRef = useRef(null); // Slider reference
  const menuRef = useRef(null); // Menu reference

  //Slick Slider settings
  const settings = {
    dots: false,  // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handle category click to toggle visibility of the menu
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);

    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close the menu
  const closeMenu = () => setSelectedCategory(null);

  return (
    <div className="container mt-5">
      {/* Carousel Header */}
      <div className="carousel-header d-flex justify-content-between align-items-center">
        <h2 className="title">Our Categories</h2>
        <div className="arrows">
          {/* Custom arrows to control the slider */}
          <FaChevronLeft 
            size={30} 
            className="arrow-icon" 
            onClick={() => sliderRef.current.slickPrev()} // Go to previous slide
          />
          <FaChevronRight 
            size={30} 
            className="arrow-icon" 
            onClick={() => sliderRef.current.slickNext()} // Go to next slide
          />
        </div>
      </div>

      {/* Slick Carousel */}
      <Slider {...settings} ref={sliderRef}>
        {dataMenu.map((category) => (
          <div key={category.id}>
            <div className="card">
              <img
                src={`/images/categories/${category.imageOfCategory}`}
                className="category-img"
                alt={category.nameOfCategory}
                onClick={() => handleCategoryClick(category.id)} // Handle category click
              />
              <div className="card-body">
                <h5 className="card-title capitalize-first-letter">
                  {category.nameOfCategory}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Display the menu items for the selected category */}
      {selectedCategory && (
        <div className="menu-items mt-5" ref={menuRef}>
          <div className="d-flex justify-content-between align-items-center">
            <h3>{dataMenu.find((category) => category.id === selectedCategory).nameOfCategory} Menu</h3>
            <FaTimes 
              size={30} 
              className="close-icon" 
              onClick={closeMenu} // Close the menu
            />
          </div>
          <div className="row">
            {dataMenu
              .find((category) => category.id === selectedCategory)
              .menuItems.map((item) => (
                <div key={item.id} className="col-md-4 col-6 mb-3">
                  <div className="card">
                    <img
                      src={`/images/menu/${item.image}`}  // Path to item image
                      className="card-img-top menu-img"   // Ensure the image styling is applied
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuCarousel;
