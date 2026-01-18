import React from 'react';
import profilePic from '../assets/images/logo-vanderlei.png';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      
      {/* Background Glow Effects - Performance Otimizada */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto e Call to Action */}
        <div className="flex-1 text-center md:text-left animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-surface border border-white/10 text-secondary text-sm font-semibold mb-6">
            Disponível para Projetos 🚀
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transformando ideias em <br />
            <span className="text-gradient">Realidade Digital</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Desenvolvedor FullStack especializado em construir experiências web excepcionais, 
            rápidas e escaláveis. Foco em React, TypeScript e Performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 text-center"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-white hover:border-white rounded-lg font-semibold transition-all hover:bg-white/5 text-center"
            >
              Entrar em Contato
            </a>
          </div>

          {/* Social Proof / Icons */}
          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-gray-400">
            <a href="https://github.com/VanderleiTCosta" target="_blank" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/vanderleitcosta" target="_blank" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                <FaLinkedin size={28} />
            </a>
            <a href="https://wa.me/seunumerosaqui" target="_blank" className="hover:text-green-400 transition-colors hover:scale-110 transform duration-200">
                <FaWhatsapp size={28} />
            </a>
          </div>
        </div>

        {/* Imagem / Avatar */}
        <div className="flex-1 relative flex justify-center animate-fade-in-up delay-200">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Efeito decorativo atrás da foto */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-spin-slow opacity-20 blur-2xl"></div>
                <img 
                    src={profilePic} 
                    alt="Vanderlei Costa" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-surface shadow-2xl animate-float z-10"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;