import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-center py-8 border-t border-gray-700">
      <p className="text-gray-400 text-sm">
        &copy; {currentYear} Vanderlei Costa. Todos os direitos reservados.
      </p>
      <p className="text-gray-500 text-xs mt-1">
        Feito usando React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;