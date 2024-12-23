import React from 'react';
import image1 from './image1.jpeg';
import { ArrowRight, Users, MapPin, Heart } from 'lucide-react';

const Banner1 = () => {
  const stats = [
    {
      number: "150+",
      text: "Nutrition Doctors Joined Us",
      icon: <Users className="w-6 h-6 text-green-600" />,
      description: "Expert professionals dedicated to your health"
    },
    {
      number: "50+",
      text: "Cities Available",
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      description: "Serving communities across two countries"
    },
    {
      number: "7M+",
      text: "Trusted Customers",
      icon: <Heart className="w-6 h-6 text-red-600" />,
      description: "People choosing better nutrition every day"
    }
  ];

  return (
    <div 
      className="w-[80vw] mx-auto rounded-3xl relative overflow-hidden bg-cover bg-top border-2 bg-no-repeat min-h-[85vh] my-8"
      style={{
        backgroundImage: `url(${image1})`
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/90"></div>
      
      {/* Content Container */}
      <div className="relative z-20 w-full h-full p-8 lg:p-16 flex flex-col items-center justify-between">
        {/* Header Section */}
        <div className="max-w-3xl text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg flex items-center gap-2 group">
              About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              Trusted by Millions
            </span>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed font-medium">
            We are a group of nutrition doctors who collaborate to create a forum where people can 
            consult about their nutritional needs. We are available in more than 50 cities in 2 countries, 
            Indonesia and Australia. We also collaborate with farmers and farms to get high-quality 
            food ingredients so people can get them easily.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {stat.number}
              </h3>
              <p className="text-gray-900 font-semibold mb-2">
                {stat.text}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner1;