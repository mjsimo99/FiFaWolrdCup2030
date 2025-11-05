import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: 24 }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default NotFound;


