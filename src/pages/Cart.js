// src/pages/Cart.js
import React from 'react';
import { useCartContext } from '../contexts/CartContext'; // Access cart state and functions
import { Link } from 'react-router-dom'; // For navigation

const Cart = () => {
  // Destructure cart state and functions from the CartContext
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalItems, getTotalPrice } = useCartContext();

  // Display message if the cart is empty
  if (cart.length === 0) {
    return (
      // Added bg-white bg-opacity-80 p-8 rounded-lg shadow-xl for a semi-transparent card
      <div className="flex flex-col items-center justify-center h-full w-full text-gray-700">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-xl text-center">
          <p className="text-3xl font-semibold mb-4">Your cart is empty. 🙁</p>
          <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    // The section itself is w-full h-full, letting the Layout background show.
    // The inner container will have a semi-transparent background.
    <section className="py-12 px-4 md:px-8 w-full h-full flex justify-center items-center">
      <div className="container mx-auto bg-white bg-opacity-80 p-6 lg:p-10 rounded-lg shadow-xl"> {/* Added bg-white bg-opacity-80 */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Your Shopping Cart 🛒</h2>

        <div className="hidden lg:grid grid-cols-5 font-semibold text-gray-700 pb-4 border-b border-gray-200">
          <div className="col-span-2">Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div></div> {/* Empty column for remove button */}
        </div>

        {/* Cart Items List */}
        {cart.map(item => (
          // Use item.id and item.selectedSize for unique key
          <div key={`${item.id}-${item.selectedSize}`} className="grid grid-cols-1 lg:grid-cols-5 items-center py-6 border-b border-gray-100 last:border-b-0">
            {/* Product Info */}
            <div className="col-span-2 flex items-center mb-4 lg:mb-0">
              {/* --- CHANGE STARTS HERE: Displaying Image --- */}
              {/* Use item.image_front from your product data */}
              <img src={item.image_front} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
              {/* --- CHANGE ENDS HERE --- */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                <button
                  onClick={() => removeFromCart(item.id, item.selectedSize)}
                  className="text-red-500 text-sm mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            {/* Price */}
            <div className="text-lg font-medium text-gray-700 mb-2 lg:mb-0">
              {/* --- CHANGE STARTS HERE: Rupee Symbol --- */}
              ₹{item.price.toFixed(0)} {/* Remove decimals for whole rupees */}
              {/* --- CHANGE ENDS HERE --- */}
            </div>
            {/* Quantity Controls */}
            <div className="flex items-center space-x-2 mb-2 lg:mb-0">
              <button
                onClick={() => decreaseQuantity(item.id, item.selectedSize)}
                className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-lg">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id, item.selectedSize)}
                className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>
            {/* Subtotal */}
            <div className="text-lg font-bold text-gray-800">
              {/* --- CHANGE STARTS HERE: Rupee Symbol --- */}
              ₹{(item.price * item.quantity).toFixed(0)} {/* Remove decimals for whole rupees */}
              {/* --- CHANGE ENDS HERE --- */}
            </div>
          </div>
        ))}

        {/* Cart Summary */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-end">
          <div className="text-xl font-semibold text-gray-800 mb-2">
            Total Items: <span className="text-blue-600">{getTotalItems()}</span>
          </div>
          <div className="text-2xl font-extrabold text-gray-900 mb-6">
            {/* --- CHANGE STARTS HERE: Rupee Symbol --- */}
            Total Price: <span className="text-blue-700">₹{getTotalPrice().toFixed(0)}</span> {/* Remove decimals for whole rupees */}
            {/* --- CHANGE ENDS HERE --- */}
          </div>
          <button className="bg-green-600 text-white text-xl font-bold px-8 py-4 rounded-full hover:bg-green-700 transition-colors duration-300 transform hover:scale-105">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;