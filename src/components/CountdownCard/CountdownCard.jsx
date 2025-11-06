import React from 'react';

function CountdownCard({ value, label, bgColor, textColor }) {
  return (
    <div className={`${bgColor} rounded-2xl p-8 min-w-[200px] text-center shadow-sm`}>
      <h3 className={`text-5xl font-bold mb-2 ${textColor}`}>{value}</h3>
      <p className="text-gray-600 text-base">{label}</p>
    </div>
  );
}

export default CountdownCard;
