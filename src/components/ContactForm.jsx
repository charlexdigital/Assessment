// React and Hooks
import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

//Animation
import AOS from 'aos';

//Styles
import '../styles/contactForm.css';
import 'aos/dist/aos.css';

//Start 
function ContactForm() {
  // State Management
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    reason: '',
    message: '',
    coverLetter: null,
  });
  const [focusedInput, setFocusedInput] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Animation Initialization
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  // Input Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, coverLetter: e.target.files[0] });
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.reason || !formData.message) {
      setAlertMessage('Please fill in all required fields.');
      setShowAlert(true);
    } else {
      setAlertMessage('Your message has been sent successfully!');
      setShowAlert(true);
      setFormData({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        reason: '',
        message: '',
        coverLetter: null,
      });
    }
  };

  // Rendering Form
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 form-bg">
      <Row className="w-100 justify-content-center">
        <Col md={8} className="p-4 rounded-3 shadow form-container" data-aos="fade-in">
          {showAlert && <Alert variant="info">{alertMessage}</Alert>}
          
          {/* Form Title Section */}
          <h2 className="form-title text-center mb-4">Let’s Get in Touch</h2>
          <p className="form-description text-center">Got a question? Fill out the form and we’ll get back to you!</p>
          
          {/* Form Fields */}
          <Form onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <h4 className="section-title mt-3">Personal Information</h4>
            <Row>
              <Col>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label className={focusedInput === 'name' ? 'focused-label' : ''}>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput('')}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName" className="mb-3">
                  <Form.Label className={focusedInput === 'lastName' ? 'focused-label' : ''}>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('lastName')}
                    onBlur={() => setFocusedInput('')}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label className={focusedInput === 'phone' ? 'focused-label' : ''}>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('phone')}
                    onBlur={() => setFocusedInput('')}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label className={focusedInput === 'email' ? 'focused-label' : ''}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput('')}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            {/* Contact Details Section */}
            <h4 className="section-title mt-3">Contact Details</h4>
            <Form.Group controlId="formReason" className="mb-3">
              <Form.Label className={focusedInput === 'reason' ? 'focused-label' : ''}>Reason for Contact</Form.Label>
              <Form.Control
                as="select"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('reason')}
                onBlur={() => setFocusedInput('')}
                required
              >
                <option value="">Select...</option>
                <option value="general">General Query</option>
                <option value="job">Job Opportunity</option>
                <option value="complain">Complain</option>
              </Form.Control>
            </Form.Group>

            {/* Conditional Cover Letter */}
            {formData.reason === 'job' && (
              <Form.Group controlId="formCoverLetter" className="mb-3">
                <Form.Label>Cover Letter (PDF)</Form.Label>
                <Form.Control type="file" accept="application/pdf" onChange={handleFileChange} />
              </Form.Group>
            )}

            {/* Message Section */}
            <h4 className="section-title mt-3">Your Message</h4>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label className={focusedInput === 'message' ? 'focused-label' : ''}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('message')}
                onBlur={() => setFocusedInput('')}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="mt-3 w-100 d-flex align-items-center justify-content-center">
              Send <FaPaperPlane className="ms-2" />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
