//React and Hooks
import React from 'react';

//Icons and Data
import { FaPlus, FaMinus, FaCartPlus } from 'react-icons/fa';
import dataMenu from '../data/DataMenu'; 

//Styles
import '../styles/MenuTable.css'; // Custom styles for the table

//Component
function MenuTable({ order, setOrder, itemQuantity, setItemQuantity }) {
  // Add item to the order
  const addToOrder = (item) => {
    const price = Number(item.price);
    if (isNaN(price)) {
      console.error(`Invalid price for ${item.name}: ${item.price}`);
    }

    const validPrice = isNaN(price) ? 0 : price;
    const quantity = itemQuantity[item.id] || 1;

    const itemTotal = validPrice * quantity;
    const existingItemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    // Update order if item already exists
    if (existingItemIndex !== -1) {
      const updatedOrder = [...order];
      updatedOrder[existingItemIndex].quantity += quantity;
      updatedOrder[existingItemIndex].totalPrice += itemTotal;
      setOrder(updatedOrder);
    } else {
      // Add new item to the order
      setOrder([
        ...order,
        { ...item, quantity, totalPrice: itemTotal },
      ]);
    }

    // Reset item quantity after adding to order
    setItemQuantity({ ...itemQuantity, [item.id]: 1 });
  };

  // Handle quantity change (increment/decrement)
  const handleQuantityChange = (item, delta) => {
    const newQuantity = Math.max(1, (itemQuantity[item.id] || 1) + delta);
    setItemQuantity((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: newQuantity,
    }));
  };

  return (
    <div className="menu-table-container">
      {/* Menu Title */}
      <h2 className="text-center">Menu</h2>
      <div className="menu-items-list table-responsive">
        <table className="table table-bordered menu-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through dataMenu categories and items */}
            {dataMenu.map((category) => (
              <React.Fragment key={category.id}>
                <tr className="category-row">
                  <td colSpan="5">
                    <h3>{category.name}</h3>
                  </td>
                </tr>
                {category.menuItems.map((item) => (
                  <tr key={item.id}>
                    <td className="menu-item">
                      <img
                        src={`/images/menu/${item.image}`}
                        alt={item.name} // Avoid redundant terms
                        className="menu-item-image"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td>{item.description}</td>
                    <td>${(isNaN(item.price) ? 0 : item.price).toFixed(2)}</td>
                    <td className="quantity-controls">
                      {/* Quantity control buttons */}
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleQuantityChange(item, -1)}
                      >
                        <FaMinus />
                      </button>
                      {itemQuantity[item.id] || 1}
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleQuantityChange(item, 1)}
                      >
                        <FaPlus />
                      </button>
                    </td>
                    <td>
                      {/* Add item to the order */}
                      <button
                        className="btn btn-sm btn-success add-to-order-btn"
                        onClick={() => addToOrder(item)}
                      >
                        <FaCartPlus /> Add
                      </button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuTable;
