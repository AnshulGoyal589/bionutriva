import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Active Clients', value: '10k+' },
    { label: 'Expert Nutritionists', value: '50+' },
    { label: 'Success Stories', value: '95%' }
  ];
  
  return (
    <div className="flex flex-col sm:flex-row gap-6 lg:gap-12 mt-8 lg:mt-16">
      {stats.map(({ label, value }) => (
        <div key={label} className="group cursor-pointer">
          <p className="text-2xl lg:text-3xl font-bold flex justify-center  text-gray-900 group-hover:text-green-600 transition-colors">
            {value}
          </p>
          <p className="text-sm lg:text-base flex justify-center text-gray-600 mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;