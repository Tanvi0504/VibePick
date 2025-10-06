// src/components/Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    // This div provides the consistent background
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-hero bg-cover bg-center">
      {/* Top Header/Nav */}
      <header className="w-full fixed top-0 left-0 z-50 px-4 md:px-8 py-4 bg-white shadow-md flex justify-between items-center h-16">
        <div className="flex items-center">
            <img src="/images/logo.svg" className="w-8 h-8 mr-2" alt="VibePick Logo" />
            <h1 className="text-xl font-bold text-primary">VibePick</h1>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-end items-center space-x-4 text-sm md:text-base">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/products" className="hover:underline">Products</Link>
            <Link to="/vibecheck" className="hover:underline">VibeCheck</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
        </nav>
      </header>

      {/* Main Page Content */}
      <main className="flex-grow pt-16 overflow-y-auto">
          <Outlet />
      </main>
    </div>
  );
};

export default Layout;