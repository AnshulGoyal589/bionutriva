import React from 'react';
import doc1 from './doc1.jpeg';
import doc2 from './doc2.jpeg';
import veg1 from './veg1.jpeg';
import veg2 from './veg2.jpeg';
import cow from './cow.jpeg';
import carrot from './carrot1.jpeg';

const Banner2 = () => {
  return (
    <div className="container w-[80vw] mx-auto px-4 py-16 overflow-hidden">
      {/* Hero Section */}
      <div className="relative mb-32">
        {/* Main Text */}
        <div className="text-center mb-12 space-y-8">
          <h1 className="text-4xl md:text-7xl font-medium leading-tight tracking-tight">
            <span className="block hover:text-gray-800 transition-colors duration-300">We are dedicated</span>
            <span className="block hover:text-gray-800 transition-colors duration-300">to improving the</span>
            <span className="block hover:text-gray-800 transition-colors duration-300">quality of</span>
            <span className="block hover:text-gray-800 transition-colors duration-300">people's nutrition</span>
          </h1>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>

        {/* Floating Images with hover effects */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 animate-float-slow hidden lg:block">
          <div className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300">
            <img src={doc1} alt="Doctor 1" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute top-3 right-1/4 animate-float-delayed hidden lg:block">
          <div className="w-16 h-16 bg-white rounded-full overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300">
            <img src={doc2} alt="Doctor 2" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/3 animate-float hidden lg:block">
          <img src={veg1} alt="Vegetable 1" className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute top-36 right-1/3 animate-float-delayed hidden lg:block">
          <img src={veg2} alt="Vegetable 2" className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-6xl font-bold mb-4 leading-tight">
            <span className="block text-gray-900">High Nutrition</span>
            <span className="block text-gray-800">Organic Food</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We have a huge and popular form farmers, ranchers and fishermen to meet your organic food needs. You can buy it on our marketplace and we will send it in packaging that can maintain the freshness of the ingredients you buy.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Shop Now
          </button>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]">
            <img src={cow} alt="Cow" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]">
            <img src={carrot} alt="Carrots" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 3.5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner2;