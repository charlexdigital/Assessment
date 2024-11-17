// React and Hooks
import React from 'react';

// Start
function OrderForm({ formData, setFormData, setIsProceeding }) {
  // Function to handle changes in form input fields
  function handleFormChange(e) {
    const { name, value } = e.target; // Extract the name and value from the input field
    setFormData((prevFormData) => ({
      ...prevFormData,  // Retain the previous form data
      [name]: value,  // Update the specific field in the form data object
    }));
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();  // Prevent the default form submission behavior
    setIsProceeding(false);  // Update the parent component's state to indicate that the user is done
  }

  return (
    <div>
      {/* Heading for the form */}
      <h3>Enter Your Details</h3>
      
      {/* Form for capturing user details */}
      <form onSubmit={handleSubmit}>
        
        {/* Name input field */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"  // Corresponds to the field name in formData
            value={formData.name}  // Controlled input with the value from formData
            onChange={handleFormChange}  // Updates formData when the input changes
            className="form-control"  // Bootstrap styling for the input field
            required  // Marks this field as required
          />
        </div>
        
        {/* Phone input field */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"  // Corresponds to the field name in formData
            value={formData.phone}  // Controlled input with the value from formData
            onChange={handleFormChange}  // Updates formData when the input changes
            className="form-control"  // Bootstrap styling for the input field
            required  // Marks this field as required
          />
        </div>
        
        {/* Address input field */}
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"  // Corresponds to the field name in formData
            value={formData.address}  // Controlled input with the value from formData
            onChange={handleFormChange}  // Updates formData when the input changes
            className="form-control"  // Bootstrap styling for the input field
            required  // Marks this field as required
          />
        </div>
        
        {/* Credit card input field */}
        <div className="form-group">
          <label>Credit Card</label>
          <input
            type="text"
            name="creditCard"  // Corresponds to the field name in formData
            value={formData.creditCard}  // Controlled input with the value from formData
            onChange={handleFormChange}  // Updates formData when the input changes
            className="form-control"  // Bootstrap styling for the input field
            required  // Marks this field as required
          />
        </div>
        
        {/* Submit button */}
        <button type="submit" className="btn btn-success btn-block mt-3">
          Order Now
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
