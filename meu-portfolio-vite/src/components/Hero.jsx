import React from 'react';
import profilePic from '../assets/images/logo-vanderlei.png';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary"> 
      <div className="text-center p-8">
        <img src={profilePic} alt="Seu Nome" className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-secondary shadow-xl" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Olá, eu sou <span className="text-secondary">Vanderlei Costa</span>!
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Desenvolvedor Front-end | Apaixonado por criar interfaces incríveis e intuitivas.
        </p>
        <a
          href="#projects"
          className="bg-secondary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Veja meus Projetos
        </a>
      </div>
    </section>
  );
};

export default Hero;