// React and Router
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

//Components
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 
import About from './components/About'; 
import Menu from './components/Menu'; 
import Contact from './components/Contact'; 
import NotFound from './components/NotFound'; 
import OrderAndPick from './components/OrderAndPick';  

//Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Styles
import './styles/app.css'; 

// Start
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orderandpick" element={<OrderAndPick />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
}

export default App;
