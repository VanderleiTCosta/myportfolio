import React from 'react';
import { skills, skillCategories } from '../data/skillsData.jsx';
import SectionTitle from '../components/common/SectionTitle'; 
import Card from '../components/common/Card';

const SkillCard = ({ name, icon, level, description }) => (
  <Card className="p-4 md:p-6 flex flex-col items-center text-center" hoverEffect={true}>
    <div className="mb-3 md:mb-4">{icon}</div>
    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{name}</h3>
    <p className="text-xs md:text-sm text-primary mb-2">{level}</p>
    {description && <p className="text-xs text-gray-400 leading-tight">{description}</p>}
  </Card>
);

const Skills = () => {
  
  const groupedSkills = {};
  skills.forEach(skill => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle highlight=".">Minhas Habilidades</SectionTitle>

        {Object.keys(skillCategories).map(categoryKey => {
          const categoryName = skillCategories[categoryKey];
          const categorySkills = skills.filter(skill => skill.category === categoryName);

          if (categorySkills.length === 0) return null;

          return (
            <div key={categoryName} className="mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-white text-center md:text-left mb-6 md:mb-8 border-b-2 border-primary pb-2 inline-block">
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Skills;