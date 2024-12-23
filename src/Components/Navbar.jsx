import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="w-full mx-auto px-20">
        <div className="flex justify-start gap-20 items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-800">Bio Nutriva</span>
            </div>
          </div>
          
          <div className="flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="/product" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Product
            </a>
            <a href="/shop" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Shop
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;