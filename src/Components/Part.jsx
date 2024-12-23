import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, bgColor = "bg-white", icon }) => {
  return (
    <div className={`${bgColor} rounded-2xl p-8 lg:p-12 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-xl`}>
      <div className="absolute top-6 right-6 z-10">
        <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-500 shadow-sm">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
        </div>
      </div>
      
      {icon && (
        <div className="mb-6">
          {icon}
        </div>
      )}
      
      <h3 className="text-2xl lg:text-3xl font-bold leading-tight w-[90%] text-gray-800 group-hover:translate-x-2 transition-all duration-500">
        {title}
      </h3>
      
      <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="text-gray-600 font-medium inline-flex items-center">
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </span>
      </div>
    </div>
  );
};

const Part = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Nutrition & Wellness
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Discover personalized nutrition solutions tailored to your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
        <FeatureCard 
          title="Expert Child Nutrition Consultation" 
          bgColor="bg-blue-50 hover:bg-blue-100"
          icon={<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 text-xl font-bold">1</span>
          </div>}
        />
        <FeatureCard 
          title="Personalized Diet Planning" 
          bgColor="bg-green-50 hover:bg-green-100"
          icon={<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 text-xl font-bold">2</span>
          </div>}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <FeatureCard 
          title="Premium Supplements" 
          bgColor="bg-purple-50 hover:bg-purple-100"
          icon={<div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-purple-600 text-xl font-bold">3</span>
          </div>}
        />
        <div className="rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 lg:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Premium Organic<br />Food Products
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Experience the finest selection of organic, nutrient-rich foods sourced from trusted suppliers.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center group">
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50" />
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-radial from-gray-700/50 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Part;