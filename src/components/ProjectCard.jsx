import React from 'react';
import { Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 p-6 shadow-xl rounded-2xl overflow-hidden
        flex flex-col items-center gap-8
        md:flex-row
        ${project.imageOnRight ? 'md:flex-row-reverse' : ''}
      `}
    >
      <div className="md:w-1/2 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md"
          loading="lazy"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/E0E0E0/333333?text=Error"; }}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">DESCRIPTION</p>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed">{project.description}</p>

        {project.builtWith && project.builtWith.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">BUILT WITH</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="sr-only">Built with:</span>
              {project.builtWith.map((tech) => (
                <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center md:justify-start mt-4 gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors shadow-md text-base font-semibold transform hover:scale-105"
          >
            View on GitHub
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-3xl transform hover:scale-110"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={30} className='h-[90%]'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;