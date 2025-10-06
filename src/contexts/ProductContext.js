// src/contexts/ProductContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the ProductContext
export const ProductContext = createContext();

// Create the ProductProvider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real application, you would fetch from an API:
        // const response = await fetch('YOUR_PRODUCT_API_ENDPOINT');
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();

        // For now, using a dummy array. You might move dummyProducts from Products.js here.
        const dummyProducts = [
            { id: 1, title: "Summer Floral Dress", description: "...", price: 59.99, image: "https://via.placeholder.com/300x400/FFC0CB/FFFFFF?text=Floral+Dress", gender: "female", bodyType: "Pear", occasion: "Casual", sizes: ["S", "M", "L", "XL"] },
            // ... add all your dummy products here
        ];
        setProducts(dummyProducts);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to easily consume the ProductContext
export const useProductContext = () => useContext(ProductContext);