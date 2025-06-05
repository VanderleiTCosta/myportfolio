import React from 'react';
import { MailIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Entre em Contato <span className="text-secondary">.</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl">
          <p className="text-gray-300 text-lg text-center mb-8">
            Adoraria ouvir de você! Seja para uma oportunidade de trabalho, um projeto freelance, ou apenas para trocar uma ideia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
            <a href="mailto:derlei.vc@gmail.com" className="flex items-center text-lg text-gray-300 hover:text-secondary transition-colors duration-300">
              <MailIcon className="w-6 h-6 mr-3 text-secondary" />
              derlei.vc@gmail.com
            </a>
            <a href="https://linkedin.com/in/vanderleitcosta" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-gray-300 hover:text-secondary transition-colors duration-300">
              <LinkedinIcon className="w-6 h-6 mr-3 text-secondary" />
              LinkedIn
            </a>
            <a href="https://github.com/VanderleiTCosta" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-gray-300 hover:text-secondary transition-colors duration-300">
              <GithubIcon className="w-6 h-6 mr-3 text-secondary" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;