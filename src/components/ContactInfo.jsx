//React and Hooks
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

//Animation
import AOS from 'aos';

//Styles
import 'aos/dist/aos.css';
import '../styles/contactInfo.css';

//Start
function ContactInfo() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <Container className="py-5">
      <Row className="align-items-center justify-content-center">
        {/* Contact Details Section */}
        <Col md={6} className="contact-info p-4 d-flex flex-column justify-content-between" data-aos="fade-left">
          <h2 className="contact-header mb-3">Contact Us</h2>
          <div className="border-line mb-4"></div>
          
          <h4 className="section-title">Introduction</h4>
          <p className="contact-description mb-4">
            We'd love to hear from you! Reach out to us for any questions or inquiries.
          </p>
          
          <h4 className="section-title">Get in Touch</h4>
          <div className="contact-details">
            <p><FaPhone className="contact-icon" /> (+123) 456-7890</p>
            <p><FaEnvelope className="contact-icon" /> info@example.com</p>
            <p><FaMapMarkerAlt className="contact-icon" /> 123 Coffee Street, Brewtown, ABC</p>
          </div>

          <h4 className="section-title">Opening Hours</h4>
          <p><b>Mon - Fri:</b> 9:00 AM - 6:00 PM</p>
        </Col>
        {/*AIzaSyCQMt_ t4I5w4UERY __ Q34q8c0kqZxdje3o*/}
        {/* Location Map Section */}
        <Col md={6} className="map-container p-0" data-aos="fade-right">
          <h4 className="section-title text-center mb-3">Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=HEREISMYAPI&q=128+Inkerman+St,+St+Kilda+VIC+3182"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Google Map showing the location of 128 Inkerman St, St Kilda, VIC 3182"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
