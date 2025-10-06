// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../components/Product';
import allProductsData from '../data/productsData';

const Products = () => {
  const location = useLocation();
  const preferences = location.state?.preferences;

  const [filteredProducts, setFilteredProducts] = useState(allProductsData);

  useEffect(() => {
    if (preferences) {
      const { gender, bodyType, occasion } = preferences;

      const genderCategoryMap = {
        female: "Women",
        male: "Men"
      };
      const preferredCategory = genderCategoryMap[gender.toLowerCase()];

      const newFiltered = allProductsData.filter(product => {
        const matchesCategory = product.category === preferredCategory;
        const matchesBodyType = product.bodyType.some(bt =>
          bt.toLowerCase() === bodyType.toLowerCase()
        );
        const matchesOccasion = product.occasion.some(occ =>
          occ.toLowerCase() === occasion.toLowerCase()
        );

        return matchesCategory && matchesBodyType && matchesOccasion;
      });

      setFilteredProducts(newFiltered.length > 0 ? newFiltered : allProductsData);
    } else {
      setFilteredProducts(allProductsData);
    }
  }, [preferences]);

  return (
    // Added flex justify-center items-center for centering content vertically if needed
    <section className="py-12 px-4 md:px-8 w-full h-full flex justify-center items-center">
      <div className="container mx-auto bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"> {/* Added bg-white bg-opacity-80 */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          {preferences ? "Your Curated Picks" : "Our Latest Collection"}
        </h2>
        {preferences && filteredProducts.length === allProductsData.length && (
          <p className="text-center text-gray-600 mb-8">
            No exact matches found for your preferences. Showing our full collection.
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && !preferences && (
          <p className="text-center text-gray-600 text-xl mt-10">No products available.</p>
        )}
      </div>
    </section>
  );
};

export default Products;