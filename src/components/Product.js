// src/components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, image_front, title, price } = product;

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center group">
      <div className="w-full h-64 flex items-center justify-center overflow-hidden mb-4">
        <img
          src={image_front}
          alt={title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate w-full">{title}</h3>
      {/* --- CHANGE STARTS HERE: Rupee Symbol --- */}
      <p className="text-gray-600 text-xl font-bold mb-4">₹{price.toFixed(0)}</p> {/* Remove decimals */}
      {/* --- CHANGE ENDS HERE --- */}
      <Link
        to={`/product/${id}`}
        className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default Product;