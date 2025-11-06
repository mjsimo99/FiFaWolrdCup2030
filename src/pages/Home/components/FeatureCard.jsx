import React from 'react';

function FeatureCard({ icon, bgColor, iconColor, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
      <div className={`${bgColor} ${iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
