import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const aboutImage = "/assets/aboutme_img.jpg";

  return (
    <section id="about" className="px-4 py-20 bg-transparent pt-20 pb-10 border-b border-gray-300 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        
         <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImage}
            alt="About Me"
            className="w-full h-auto object-cover rounded-xl shadow-lg max-w-md md:max-w-full"
            loading="lazy"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E0E0/333333?text=Error"; }}
          />
        </motion.div>

       <motion.div
          className="w-full md:w-1/2 text-center md:text-left bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Me</h2>
          <div className="flex-grow overflow-y-auto pr-2">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm Lucky Jaglan, a Computer Science & Engineering student at SRM University, India, specializing in Data Science and Artificial Intelligence. With a strong foundation in web development and a growing interest in DSA, I love turning ideas into real-world applications.<br/><br/>
              I’m currently focused on building efficient, user-friendly projects using tools like JavaScript, React, Python, and MySQL. Whether it's front-end design or back-end logic, I enjoy learning new skills and solving complex problems. I'm also exploring DSA, DevOps, Git workflows, and cloud deployment to round out my skill set.<br/><br/>
              When I’m not coding, I’m usually learning something new, refining my skills, or contributing to academic and personal tech projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;