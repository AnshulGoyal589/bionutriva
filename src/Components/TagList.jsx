import React from 'react';
import { Apple, Leaf, Users, Heart } from 'lucide-react';

const TagList = () => {
  const tags = [
    { name: 'Nutrition', icon: <Apple className="w-3 lg:w-4 h-3 lg:h-4" /> },
    { name: 'Supplements', icon: <Leaf className="w-3 lg:w-4 h-3 lg:h-4" /> },
    { name: 'Consultation', icon: <Users className="w-3 lg:w-4 h-3 lg:h-4" /> },
    { name: 'Wellness', icon: <Heart className="w-3 lg:w-4 h-3 lg:h-4" /> }
  ];
  
  return (
    <div className="flex flex-wrap gap-2 lg:gap-4 mt-8 lg:mt-16">
      {tags.map(({ name, icon }) => (
        <button 
          key={name}
          className="px-4 lg:px-6 py-2 lg:py-3 rounded-full border-2 border-gray-200 text-gray-700 text-sm lg:text-base hover:border-green-500 hover:bg-green-50 hover:text-green-600 transition-all duration-300 flex items-center gap-2 group"
        >
          <span className="transform group-hover:scale-110 transition-transform">
            {icon}
          </span>
          {name}
        </button>
      ))}
    </div>
  );
};

export default TagList;