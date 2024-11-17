// React and Hooks
import React, { useEffect } from 'react';

// Start
function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found - BenEllie’s'; // Set a custom title for the 404 page
  }, []);

  return (
    <section className="text-center p-5">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
    </section>
  );
}

export default NotFound;
