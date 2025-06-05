import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaPython, FaJava, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiDocker, SiPostgresql, SiMongodb, SiNestjs, SiSpringboot } from 'react-icons/si';

export const skillCategories = {
  frontend: 'Front-end',
  backend: 'Back-end',
  database: 'Bancos de Dados',
  devops: 'DevOps & Ferramentas',
  design: 'Design',
  // Adicione mais categorias
};

export const skills = [
  // Front-end
  {
    name: 'HTML5',
    icon: <FaHtml5 className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />,
    level: 'Avançado',
    category: skillCategories.frontend,
    description: 'Estruturação semântica e acessível de páginas web.'
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />,
    level: 'Avançado',
    category: skillCategories.frontend,
    description: 'Estilização com Flexbox, Grid, animações e responsividade.'
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />,
    level: 'Avançado',
    category: skillCategories.frontend,
    description: 'ES6+, manipulação do DOM, assincronicidade e lógica de UI.'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />,
    level: 'Intermediário',
    category: skillCategories.frontend,
    description: 'Tipagem estática para projetos JavaScript mais robustos.'
  },
  {
    name: 'React',
    icon: <FaReact className="w-10 h-10 md:w-12 md:h-12 text-sky-400" />,
    level: 'Avançado',
    category: skillCategories.frontend,
    description: 'Componentização, Hooks, Context API, Redux (Toolkit).'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="w-10 h-10 md:w-12 md:h-12 text-gray-300" />,
    level: 'Intermediário',
    category: skillCategories.frontend,
    description: 'SSR, SSG, rotas de API e otimizações para React.'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="w-10 h-10 md:w-12 md:h-12 text-teal-400" />,
    level: 'Avançado',
    category: skillCategories.frontend,
    description: 'Framework CSS utilitário para desenvolvimento ágil.'
  },

  // Back-end
  {
    name: 'Node.js',
    icon: <FaNodeJs className="w-10 h-10 md:w-12 md:h-12 text-green-500" />,
    level: 'Avançado',
    category: skillCategories.backend,
    description: 'Desenvolvimento de APIs RESTful com Express.js ou NestJS.'
  },
  {
    name: 'Python',
    icon: <FaPython className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />,
    level: 'Básico',
    category: skillCategories.backend,
    description: 'Scripts, automação e desenvolvimento web com Django/Flask (aprendendo).'
  },
   {
    name: 'NestJS',
    icon: <SiNestjs className="w-10 h-10 md:w-12 md:h-12 text-red-600" />,
    level: 'Básico',
    category: skillCategories.backend,
    description: 'Framework Node.js progressivo para aplicações eficientes e escaláveis.'
  },

  // Bancos de Dados
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
    level: 'Intermediário',
    category: skillCategories.database,
    description: 'Modelagem de dados relacionais e consultas SQL.'
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="w-10 h-10 md:w-12 md:h-12 text-green-600" />,
    level: 'Avançado',
    category: skillCategories.database,
    description: 'Banco de dados NoSQL orientado a documentos.'
  },


  // DevOps & Ferramentas
  {
    name: 'Git & GitHub',
    icon: <FaGitAlt className="w-10 h-10 md:w-12 md:h-12 text-red-500" />,
    level: 'Avançado',
    category: skillCategories.devops,
    description: 'Versionamento de código, branches, pull requests.'
  },
  {
    name: 'Docker',
    icon: <SiDocker className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />,
    level: 'Básico',
    category: skillCategories.devops,
    description: 'Conteinerização de aplicações (aprendendo).'
  },

  // Design
  {
    name: 'Figma',
    icon: <FaFigma className="w-10 h-10 md:w-12 md:h-12 text-purple-500" />,
    level: 'Intermediário',
    category: skillCategories.design,
    description: 'Prototipagem de interfaces e design system.'
  },
  // Adicione mais skills
];