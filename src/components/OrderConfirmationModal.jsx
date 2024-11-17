// React and Hooks
import React, { useState } from 'react';

// Components
import { Modal, Button } from 'react-bootstrap';

// Styles
import './OrderConfirmationModal.css'; // Add custom styles for the modal

// Start
function OrderConfirmationModal({ show, handleClose }) {
  // State hook to track if the order details are ready for download
  const [downloadReady, setDownloadReady] = useState(false);

  // Handle the download action
  const handleDownload = () => {
    setDownloadReady(true); // Set the state to indicate download readiness
    setTimeout(() => alert('Your order has been downloaded!'), 1000); // Simulating download after a short delay
  };

  return (
    <Modal show={show} onHide={handleClose}>
      {/* Modal Header with Close Button */}
      <Modal.Header closeButton>
        <Modal.Title>Order Confirmation</Modal.Title>
      </Modal.Header>

      {/* Modal Body with Order Confirmation Message */}
      <Modal.Body>
        <p>Your order is almost ready! We'll call you shortly to confirm and tell you when your order will be ready.</p>
        {/* Conditional rendering based on the download readiness */}
        {downloadReady ? (
          <p>Your order details are ready for download.</p> // Message shown when the download is ready
        ) : (
          <Button variant="primary" onClick={handleDownload}>Download Order Details</Button> // Button to initiate download
        )}
      </Modal.Body>

      {/* Modal Footer with Close Button */}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderConfirmationModal;
