import React from 'react'

const NutritionistCard = () => {
    return (
      <div className="bg-white rounded-2xl px-4 py-2 flex items-center gap-3 shadow-sm absolute bottom-8 left-8">
        <img src="" alt="Dr. Richard Lee" className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-gray-600 text-sm">Nutritionists</p>
          <p className="font-medium">Dr. Richard Lee</p>
        </div>
      </div>
    );
  };

export default NutritionistCard