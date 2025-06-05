import React from "react";
import profilePic from "../assets/images/logo-vanderlei.png";
import { FaReact, FaJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Sobre Mim <span className="text-secondary">.</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-gray-300 text-lg leading-relaxed">
            <img
              src={profilePic}
              alt="Foto de perfil mais detalhada"
              className="rounded-lg shadow-xl mb-6 md:float-left md:mr-6 w-1/2 md:w-1/3"
            />
            <p className="mb-4">
              Olá! Sou Vanderlei Costa, um desenvolvedor FullStack com 3 anos de
              experiência na criação de soluções web robustas e escaláveis.
              Tenho paixão por transformar ideias em realidade digital, focando
              sempre na melhor experiência do usuário e na qualidade do código.
            </p>
            <p className="mb-4">
              Minha jornada na programação começou com uma curiosidade sobre o
              desenvolvimento de jogos e sites. Desde então, tenho trabalhado
              com diversas tecnologias, incluindo Reactjs, Nodejs, Tailwind, e
              estou sempre em busca de novos desafios e aprendizados.
            </p>
            <p>
              Fora do código, gosto de praticar esportes, ver filmes, séries e
              principalmente passar um tempo com a família. Acredito que um bom
              equilíbrio entre vida pessoal e profissional é fundamental para a
              criatividade e produtividade.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            
            <div className="w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full flex items-center justify-center shadow-2xl p-4">
              <div className="grid grid-cols-2 gap-4 text-white">
                <FaReact
                  size={50}
                  className="opacity-75 hover:opacity-100 transition-opacity"
                />
                <SiTailwindcss
                  size={50}
                  className="opacity-75 hover:opacity-100 transition-opacity"
                />
                <FaFigma
                  size={50}
                  className="opacity-75 hover:opacity-100 transition-opacity"
                />
                <FaJs
                  size={50}
                  className="opacity-75 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
