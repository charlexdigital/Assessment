// React and Components
import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

// Data
import aboutData from '../data/DataAbout'; 

// Styles
import '../styles/about.css'; 

//Start 
function About() {
  return (
    <>
      {/* Banner */}
      <Banner
        image="/images/banner/about.jpg"
        heading="About Us"
        description="Good vibes, great food, and even better company"
      />

      {/* About Section */}
      <div className="container-fluid bg">
        <div className="about-section container mt-5">
          <div className="row align-items-center">
            <div className="col-md-7 text-center">
              <img 
                src="/images/whoWeAre.png" 
                alt="About Us" 
                className="img-fluid rounded" 
              />
            </div>
            <div className="col-md-5">
              <h2 className="title-who">Who We Are</h2>
              <div className="accordion" id="aboutAccordion">
                {/* Mission Accordion */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingMission">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseMission"
                      aria-expanded="true"
                      aria-controls="collapseMission"
                    >
                      Mission
                    </button>
                  </h2>
                  <div
                    id="collapseMission"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingMission"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div className="accordion-body">
                      {aboutData.mission}
                    </div>
                  </div>
                </div>

                {/* Vision Accordion */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingVision">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseVision"
                      aria-expanded="false"
                      aria-controls="collapseVision"
                    >
                      Vision
                    </button>
                  </h2>
                  <div
                    id="collapseVision"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingVision"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div className="accordion-body">
                      {aboutData.vision}
                    </div>
                  </div>
                </div>

                {/* Values Accordion */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingValues">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseValues"
                      aria-expanded="false"
                      aria-controls="collapseValues"
                    >
                      Values
                    </button>
                  </h2>
                  <div
                    id="collapseValues"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingValues"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div className="accordion-body">
                      <ul>
                        {aboutData.values.map((value, index) => (
                          <li key={index}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container-fluid bg-brown pt-3 pb-5">
        <div className="gallery-section container mt-5">
          <h2 className="text-center text-white mb-4"><b>Our Gallery</b></h2>
          <div className="row">
            {aboutData.gallery.map((image, index) => (
              <div className="col-md-3 col-6 mb-3" key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container-fluid bg pt-3 pb-5">
        <div className="testimonials-section container mt-5">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            {aboutData.testimonials.map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="testimonial-card p-4 text-center">
                  <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                  <h5 className="testimonial-name">- {testimonial.name}</h5>
                  {/* Star Rating */}
                  <div className="star-rating">
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <span
                        key={starIndex}
                        className={`star ${starIndex < testimonial.rating ? 'filled' : ''}`}
                      >
                        &#9733; {/* Unicode star character */}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default About;
