// React and Components
import React from 'react';
import Banner from './Banner';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm'; 
import Footer from './Footer';

// Styles
import '../styles/contactPage.css'; 

//Start 
function Contact() {
  return (
    <>
      <Banner
        image="/images/banner/contact.jpg"
        heading="Brew Your Perfect Cup, Anytime"
        description="Discover the art of brewing with our premium coffee beans."
      />
      
      <section className="contact-section bg">
        <ContactInfo />
      </section>
      
      <section className="form-section">
        <ContactForm />
      </section>
      
      <Footer />
    </>
  );
}

export default Contact;
