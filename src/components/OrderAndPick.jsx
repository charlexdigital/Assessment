// React and Hooks
import React, { useState } from 'react';

// Components
import MenuTable from './MenuTable';
import OrderSummary from './OrderSummary';
import OrderDetails from './OrderDetails';
import Banner from './Banner'; // Import Header Component

// Icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Styles
import '../styles/OrderAndPick.css'; // Add styles for the Order page

// Start
function OrderAndPick() {
  // State hooks to manage the order items, quantities, and current step in the process
  const [order, setOrder] = useState([]); // Holds the list of ordered items
  const [itemQuantity, setItemQuantity] = useState({}); // Stores the quantity of each item ordered
  const [currentStep, setCurrentStep] = useState(1); // Tracks the current step in the order process (1, 2, or 3)

  // Function to handle moving to the next step in the order process
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1); // Increment the current step by 1
  };

  // Function to handle moving to the previous step in the order process
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1); // Decrement the current step by 1
  };

  return (
    <div className="order-container">
      {/* Banner component for displaying the header and description */}
      <Banner
        image="/images/banner/contact.jpg"  // Path to the Contact section background image
        heading="Brew Your Perfect Cup, Anytime"
        description="Discover the art of brewing with our premium coffee beans. Sourced from the finest farms, roasted to perfection, and ready to elevate your coffee experience at home."
      />
      
      {/* Step Navigation */}
      <div className="step-navigation">
        {/* Display 'Previous' button only if not on the first step */}
        {currentStep > 1 && (
          <button className="btn btn-nav" onClick={handlePreviousStep}>
            <FaArrowLeft /> Previous
          </button>
        )}
        {/* Display current step and total steps */}
        <h3>Step {currentStep} of 3</h3>
        {/* Display 'Next' button only if not on the last step */}
        {currentStep < 3 && (
          <button className="btn btn-nav" onClick={handleNextStep}>
            Next <FaArrowRight />
          </button>
        )}
      </div>

      {/* Conditional rendering based on the current step */}
      {currentStep === 1 && (
        // Render the MenuTable component for selecting items in step 1
        <MenuTable 
          order={order} 
          setOrder={setOrder} 
          itemQuantity={itemQuantity} 
          setItemQuantity={setItemQuantity} 
        />
      )}
      {currentStep === 2 && (
        // Render the OrderSummary component for reviewing the order in step 2
        <OrderSummary order={order} />
      )}
      {currentStep === 3 && (
        // Render the OrderDetails component for entering details in step 3
        <OrderDetails order={order} />
      )}
    </div>
  );
}

export default OrderAndPick;
