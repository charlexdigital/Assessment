// React and Hooks
import React, { useState } from 'react';

// Styles
import '../styles/OrderDetails.css'; // Add styles for the order details

// Start
function OrderDetails({ order }) {
  // State hooks to store user input for the form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [creditCard, setCreditCard] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your order is almost ready! We'll call you shortly to confirm.");
  };

  return (
    <div className="order-details">
      {/* Header for the form */}
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name input */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state with user input
            required
          />
        </div>

        {/* Phone Number input */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // Update state with user input
            required
          />
        </div>

        {/* Address input */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)} // Update state with user input
            required
          />
        </div>

        {/* Credit Card input */}
        <div className="form-group">
          <label htmlFor="creditCard">Credit Card Details</label>
          <input
            type="text"
            id="creditCard"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)} // Update state with user input
            required
          />
        </div>

        {/* Submit button for the form */}
        <button type="submit" className="btn btn-primary">Order Now</button>
      </form>
    </div>
  );
}

export default OrderDetails;
