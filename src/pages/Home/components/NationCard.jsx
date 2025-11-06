import React from 'react';

function NationCard({ name, color, description, image, link }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=' + name;
          }}
        />
      </div>
      
      <div className="p-6 text-left">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-6 h-6 ${color} rounded`}></div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        </div>
        
        <p className="text-gray-600 min-h-[60px] text-left">
          {description}
        </p>
        
        <a 
          href={link}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Explore venues
          <svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default NationCard;
