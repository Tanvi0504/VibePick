// src/pages/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import allProductsData from '../data/productsData';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState('');
  const { addToCart } = useCartContext();

  useEffect(() => {
    const foundProduct = allProductsData.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.Size[0]);
    } else {
      console.log("Product not found");
      setProduct(null);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size.");
      return;
    }
    setError('');
    addToCart(product, selectedSize);
    alert(`${product.title} (Size: ${selectedSize}) added to cart!`);
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-xl text-gray-600">Loading product or product not found...</p>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 md:px-8 w-full h-full flex justify-center items-center"> {/* Added flex justify-center items-center */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center lg:items-start bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"> {/* Added bg-opacity-80 */}
        {/* Product Image */}
        <div className="lg:w-1/2 flex justify-center p-4 bg-white rounded-lg shadow-md">
          <img src={product.image_front} alt={product.title} className="max-w-full h-auto rounded-lg max-h-[600px] object-contain" />
        </div>
        {/* Product Details */}
        <div className="lg:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
          {product.description && <p className="text-gray-700 text-lg mb-6">{product.description}</p>}
          {/* --- CHANGE STARTS HERE: Rupee Symbol --- */}
          <p className="text-3xl font-extrabold text-blue-600 mb-6">₹{product.price.toFixed(0)}</p> {/* Remove decimals */}
          {/* --- CHANGE ENDS HERE --- */}

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2">Available Sizes:</label>
            <div className="flex gap-3 flex-wrap">
              {product.Size.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 border rounded-full text-lg font-medium transition-colors duration-200
                    ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                  {size}
                </button>
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white text-xl font-bold py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;