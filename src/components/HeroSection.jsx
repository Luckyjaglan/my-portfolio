import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const HeroSection = () => {
  const backgroundImage = '/assets/home_bg.jpg';
  const [navbarHeight, setNavbarHeight] = useState(0);
  const handleScrollToSection = useSmoothScroll();

  useEffect(() => {
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
  }, []);

  return (
    <section
      id="home"
      className="h-[101vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden border-b border-gray-300"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: `${navbarHeight + 40}px`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-white max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl font-medium text-sky-300 mb-2 tracking-wider">
          ASPIRING ENGINEER | CSE STUDENT
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Hello, I'm Lucky Jaglan
        </h2>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-200 mb-8 leading-relaxed">
          Hi, I’m a Computer Science student from India, specializing in Data Science & AI at SRM University. I'm a budding Software Engineer with a global mindset, passionate about building smart, impactful applications.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/Luckyjaglan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors" aria-label="GitHub Profile">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/lucky-jaglan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors" aria-label="LinkedIn Profile">
            <Linkedin size={32} />
          </a>
          <a href="https://x.com/jaglan_lucky" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors" aria-label="Twitter Profile">
            <Twitter size={32} />
          </a>
          <a href="mailto:luckyjaglan47@gmail.com" target="_blank" className="text-gray-300 hover:text-sky-400 transition-colors" aria-label="Email Me">
            <Mail size={32} />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => handleScrollToSection(e, 'projects')}
            className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-lg text-lg font-semibold transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, 'contact')}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-sky-700 transition-colors shadow-lg text-lg font-semibold transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;