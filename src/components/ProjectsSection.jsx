// src/components/ProjectsSection.jsx
import React, { useState } from 'react';
import { allProjects } from '../data/projects.js';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Time between each card animating in
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
};

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(1);
  const transitionDuration = 250;
  const projectsPerPage = 3;

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const projectsToDisplay = allProjects.slice(startIndex, startIndex + projectsPerPage);

  const handleNextPage = () => {
    setContentOpacity(0);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setContentOpacity(1);
    }, transitionDuration);
  };

  const handlePrevPage = () => {
    setContentOpacity(0);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
      setContentOpacity(1);
    }, transitionDuration);
  };

  return (
    <section id="projects" className="min-h-[calc(100vh-theme(spacing.20))] px-4 py-20 bg-transparent pt-20 pb-10 relative border-b border-gray-300">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
      >
        Featured Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          key={currentPage} // Important: key change triggers re-animation
          className="flex flex-col gap-16"
          style={{ opacity: contentOpacity, transition: `opacity ${transitionDuration}ms ease-in-out` }}
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Use animate instead of whileInView for keyed animations
        >
          {projectsToDisplay.map((project) => {
             const MotionProjectCard = motion(ProjectCard);
             return (
               <MotionProjectCard 
                 key={project.id} 
                 project={project} 
                 variants={itemVariants}
               />
             )
          })}
        </motion.div>

        {totalPages > 1 && (
          <>
            <button onClick={handlePrevPage} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-20 hidden md:block transform hover:scale-110" aria-label="Previous Projects">
              &#x2190;
            </button>
            <button onClick={handleNextPage} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors z-20 hidden md:block transform hover:scale-110" aria-label="Next Projects">
              &#x2192;
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;