// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import Home from "./pages/Home";
import Products from "./pages/Products";
import VibeCheck from "./pages/VibeCheck";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

// Import your layout component
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component will serve as a wrapper for all nested routes */}
        <Route path="/" element={<Layout />}>
          {/* Home page, rendered when the path is exactly "/" */}
          <Route index element={<Home />} />

          {/* Products page */}
          <Route path="products" element={<Products />} />

          {/* VibeCheck page for personalized recommendations */}
          <Route path="vibecheck" element={<VibeCheck />} />

          {/* Cart page */}
          <Route path="cart" element={<Cart />} />

          {/* ProductDetail page, with a dynamic ID parameter */}
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;