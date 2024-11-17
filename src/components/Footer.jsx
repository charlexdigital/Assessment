// React
import React from 'react';

//Styles
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer text-white py-4 pb-5 pt-5">
      <div className="container text-center">
        {/* Logo */}
        <div className="footer-logo mb-3">
          <img src="/images/logo.png" alt="Logo" className="footer-logo-img" />
        </div>
        
        {/* Footer Text */}
        <p>© 2024 BennyEllie's Café - Built with love by Charlex</p>

        {/* Sitemap */}
        <div className="footer-links">
          <a href="/" className="text-white text-decoration-none mx-2">Home</a>
          <a href="/about" className="text-white text-decoration-none mx-2">About Us</a>
          <a href="/menu" className="text-white text-decoration-none mx-2">Menu</a>
          <a href="/contact" className="text-white text-decoration-none mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
