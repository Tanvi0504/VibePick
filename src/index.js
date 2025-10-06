// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your global Tailwind CSS
import App from './App'; // Import your main App component

// Import the CartProvider from your contexts folder
import { CartProvider } from './contexts/CartContext';

// Import reportWebVitals for performance monitoring (optional)
import reportWebVitals from './reportWebVitals';

// Get the root DOM element from public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your React application
root.render(
  <React.StrictMode>
    {/* Wrap the entire App with CartProvider to make cart context available everywhere */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();