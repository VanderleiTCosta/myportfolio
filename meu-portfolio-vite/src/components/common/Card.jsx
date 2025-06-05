import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
  const hoverStyles = hoverEffect ? "transform hover:scale-105 transition-transform duration-300" : "";
  return (
    <div className={`bg-gray-800 rounded-xl overflow-hidden shadow-2xl ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;