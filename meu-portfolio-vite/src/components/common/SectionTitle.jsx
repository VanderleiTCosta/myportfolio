import React from 'react';

const SectionTitle = ({ children, highlight }) => {
  return (
    <h2 className="text-4xl font-bold text-center text-white mb-12 md:mb-16">
      {children} {highlight && <span className="text-secondary">{highlight}</span>}
    </h2>
  );
};

export default SectionTitle;