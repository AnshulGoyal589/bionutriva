import React from 'react';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';

const HeroText = () => {
  return (
    <div className="max-w-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4 lg:mb-6">
        <div className="px-3 lg:px-4 py-1 lg:py-2 bg-green-100 rounded-full text-green-600 font-medium text-xs lg:text-sm">
          #1 Nutrition Consultation
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-xs lg:text-sm">4.9/5 from 10k+ reviews</span>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
        Your Journey to{' '}
        <span className="text-green-600 relative inline-block">
          Better Health
          <span className="absolute bottom-1 lg:bottom-2 left-0 w-full h-2 lg:h-3 bg-green-100 -z-10 transform -rotate-1"></span>
        </span>
      </h1>
      <p className="text-gray-600 mb-6 lg:mb-10 text-base lg:text-xl leading-relaxed">
        Expert nutrition consultation tailored to your needs. Join thousands of satisfied customers on their path to wellness.
      </p>
      <div className="flex items-center gap-4 lg:gap-6">
        <button className="group bg-gray-900 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-green-600 transition-all duration-300 text-base lg:text-lg font-medium hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-2">
          Get Started
          <ChevronRight className="w-4 lg:w-5 h-4 lg:h-5 transform group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center hover:text-green-600 hover:scale-110 transition-all duration-300">
          <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroText;