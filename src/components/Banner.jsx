// React and Hooks
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Animation
import AOS from 'aos';
// Styles
import 'aos/dist/aos.css'; 
import '../styles/banner.css';

//Start 
function Banner({ image, heading, description }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <section className="banner-section" style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="banner-content">
            <h2 className="display-4" data-aos="fade-up">{heading}</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
