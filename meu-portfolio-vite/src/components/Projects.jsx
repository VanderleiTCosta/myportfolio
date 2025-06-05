// src/components/Projects.jsx
import React from 'react';
import { projects } from '../data/projectsData'; // Importe os dados
import SectionTitle from '../components/common/SectionTitle'; 
import Card from '../components/common/Card';

const ProjectCard = ({ title, description, image, liveLink, repoLink, tags, role }) => (
  <Card className="flex flex-col">
    <img src={image} alt={title} className="w-full h-56 object-cover" /> {/* Ajuste a altura se necessário */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
      {role && <p className="text-sm text-primary mb-2">{role}</p>}
      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        {tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-700 text-gray-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex justify-between items-center pt-2 border-t border-gray-700/50">
        {liveLink && liveLink !== '#' ? (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-pink-400 font-medium transition-colors duration-300 text-sm">
            Ver Online ↗
          </a>
        ) : <span className="text-gray-500 text-sm">Privado</span>}
        {repoLink && repoLink !== '#' ? (
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 font-medium transition-colors duration-300 text-sm">
          Repositório 🔗
        </a>
        ) : <span className="text-gray-500 text-sm">Privado</span>}
      </div>
    </div>
  </Card>
);


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle highlight=".">Meus Projetos</SectionTitle>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl">Em breve, novos projetos aqui! 🚧</p>
        )}
      </div>
    </section>
  );
};

export default Projects;