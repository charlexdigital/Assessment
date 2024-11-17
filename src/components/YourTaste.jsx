// React and Hooks
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataMenu from '../data/DataMenu'; // Import data from your DataMenu
import '../styles/YourTaste.css'; // Add custom styles

// Start
function YourTaste() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMenu, setFilteredMenu] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Handle the search input change and filter menu items
  function handleSearch(e) {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = dataMenu.flatMap((category) => {
      return category.menuItems.filter((item) => 
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase())) || // Check tags
        item.price.toString().includes(term) // Check price
      );
    });
    setFilteredMenu(filtered);
  }

  // Navigate to the "Order" page
  function goToOrderPage() {
    navigate('/orderandpick'); // Use navigate instead of history.push
  }

  return (
    <div className="yourtaste-container text-center mt-5">
      <h2 className="yourtaste-title">What are you looking for?</h2>
      <p className="yourtaste-description">
        Write any ingredient, title, tags, or budget you're looking for and see if we have it.
      </p>
      <div className="search-bar">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search for menu items..."
          value={searchTerm}
          onChange={handleSearch} // Trigger search on input change
        />
      </div>

      {/* Display matching menu items */}
      {filteredMenu.length > 0 && (
        <div className="mt-4">
          <h3>Matching Menu Items</h3>
          <div className="row">
            {filteredMenu.map((item) => (
              <div key={item.id} className="col-md-4 col-6 mb-3">
                <div className="card">
                  <img
                    src={`/images/menu/${item.image}`}
                    className="card-img-top menu-img"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="tags">
                      {item.tags.join(', ')} {/* Display tags */}
                    </p>
                    <p className="price">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredMenu.length === 0 && searchTerm && (
        <p>No items found for "{searchTerm}"</p>
      )}

      {/* Button to go to the order page */}
      <div className="mt-4">
        <button 
          className="btn btn-primary" 
          onClick={goToOrderPage} // Navigate to the order page
        >
          Go to Order
        </button>
      </div>
    </div>
  );
}

export default YourTaste;
