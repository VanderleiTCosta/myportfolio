import React, { useState, useMemo } from 'react';
import { projects } from '../data/projectsData';
import SectionTitle from '../components/common/SectionTitle'; 
import Card from '../components/common/Card';

// Componente do Card Individual (Extraído para manter o código limpo)
const ProjectCard = ({ title, description, image, liveLink, repoLink, tags, role, category }) => (
  <Card className="flex flex-col h-full animate-fade-in-up">
    <div className="relative group overflow-hidden">
      <img 
        src={image} 
        alt={`Projeto ${title}`} 
        className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110" 
        loading="lazy"
      />
      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
        {category}
      </div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
      </div>
      
      {role && <p className="text-xs font-semibold text-secondary mb-3 uppercase tracking-wider">{role}</p>}
      
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-surface border border-white/5 rounded text-xs text-gray-300 font-medium">
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="mt-auto flex gap-3 pt-4 border-t border-white/5">
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-semibold transition-all hover:-translate-y-1"
          >
            Ver Projeto 🚀
          </a>
        )}
        {repoLink && repoLink !== '#' && (
          <a 
            href={repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-surface hover:bg-white/5 text-gray-400 hover:text-white rounded-lg text-sm font-semibold transition-all border border-white/5 hover:border-white/20"
          >
            Code
          </a>
        )}
      </div>
    </div>
  </Card>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Categorias únicas baseadas nos dados
  const categories = ['Todos', 'SaaS', 'Landing Pages', 'Institucional'];

  // Filtragem otimizada
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 relative bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle highlight="Portfólio">Projetos Recentes</SectionTitle>
        
        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                ${activeCategory === cat 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'bg-surface border-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;