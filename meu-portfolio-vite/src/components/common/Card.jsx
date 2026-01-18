import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        glass-effect rounded-2xl overflow-hidden 
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 
        group ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;