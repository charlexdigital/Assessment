// React and Bootstrap
import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

// Icons
import { FaFacebook, FaInstagram, FaClipboardList } from 'react-icons/fa';  // Replaced FaShoppingCart with FaClipboardList (Order Icon)

// Styles
import '../styles/Navbar.css';

function CustomNavbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  // Update active link based on the current route
  useEffect(() => {
    setActiveLink(location.pathname); 
  }, [location]);

  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="custom-navbar">
      {/* Logo */}
      <Navbar.Brand href="/">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      {/* Navbar Toggle for mobile view */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Navigation Links */}
        <Nav className="mx-auto">
          <Nav.Link
            href="/"
            className={activeLink === '/' ? 'active' : ''}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/about"
            className={activeLink === '/about' ? 'active' : ''}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            href="/menu"
            className={activeLink === '/menu' ? 'active' : ''}
          >
            Menu
          </Nav.Link>
          <Nav.Link
            href="/orderandpick"
            className={activeLink === '/orderandpick' ? 'active' : ''} 
          >
            Order and Pick
          </Nav.Link>
          <Nav.Link
            href="/contact"
            className={activeLink === '/contact' ? 'active' : ''}
          >
            Contact
          </Nav.Link>
        </Nav>
        {/* Social Media Icons */}
        <div className="navbar-social">
          <a href="/OrderAndPick">
            <FaClipboardList size={30} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
