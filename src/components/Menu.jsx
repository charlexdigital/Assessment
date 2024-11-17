// React and Components
import React from 'react';
import Banner from './Banner'; 
import MenuCarousel from './MenuCarousel';
import YourTaste from './YourTaste';
import CoffeeBag from './CoffeeBag';
import Footer from './Footer';

// Start
function Menu() {
  return (
    <div>
      <Banner
        image="/images/banner/menu.jpg"  // Background image for the menu section
        heading="Brew Your Perfect Cup, Anytime"
        description="Discover the art of brewing with our premium coffee beans. Sourced from the finest farms, roasted to perfection, and ready to elevate your coffee experience at home."
      />
      <MenuCarousel />
      <YourTaste />
      <CoffeeBag className="component-with-shadow" />
      <Footer className="component-with-shadow" />
    </div>
  );
}

export default Menu;
