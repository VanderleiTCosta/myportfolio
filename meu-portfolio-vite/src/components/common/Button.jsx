import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '', href, target, rel }) => {
  const baseStyles = "font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-md";

  const variants = {
    primary: "bg-secondary hover:bg-pink-700 text-white focus:ring-pink-500",
    secondary: "bg-primary hover:bg-blue-700 text-white focus:ring-blue-500",
    outline: "bg-transparent hover:bg-gray-700 text-gray-300 border border-gray-500 hover:text-white focus:ring-gray-400",
    // Adicione mais variantes conforme necessário
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default Button;