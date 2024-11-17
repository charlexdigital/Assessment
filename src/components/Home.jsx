// React and Components
import React from 'react';
import FullScreenSlider from './FullScreenSlider';
import Categories from './Categories';
import CoffeeBag from './CoffeeBag';
import Footer from './Footer';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../styles/home.css'; // Home component styles

// Start
function Home() {
  return (
    <>
      <FullScreenSlider className="component-with-shadow" />
      <Categories className="component-with-shadow" />
      <CoffeeBag className="component-with-shadow" />
      <Footer className="component-with-shadow" />
    </>
  );
}

export default Home;
