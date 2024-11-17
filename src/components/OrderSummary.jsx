// React and Hooks
import React from 'react';

// Styles
import '../styles/OrderSummary.css'; // Add styles for the order summary

// Start
function OrderSummary({ order }) {
  // Calculate the total amount by summing up the totalPrice of all items in the order
  const totalAmount = order.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2);

  return (
    <div className="order-summary">
      {/* Heading for the order summary */}
      <h2>Your Order Summary</h2>

      {/* Table displaying the details of the items in the order */}
      <table className="table">
        <thead>
          {/* Table headers */}
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over each item in the order array and display it in a table row */}
          {order.map((item) => (
            <tr key={item.id}>  {/* Use item id as the unique key for each row */}
              <td>{item.name}</td>  {/* Product name */}
              <td>{item.quantity}</td>  {/* Quantity of the product */}
              <td>${item.totalPrice.toFixed(2)}</td>  {/* Total price for the item */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display the total amount */}
      <div className="total">
        <h3>Total: ${totalAmount}</h3>  {/* Total amount calculated */}
      </div>
    </div>
  );
}

export default OrderSummary;
