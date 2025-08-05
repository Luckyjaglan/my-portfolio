// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);
  const handleScrollToSection = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      // THE FIX IS HERE: We check if navbarRef.current exists before using it.
      if (navbarRef.current && window.scrollY > lastScrollY && window.scrollY > navbarRef.current.offsetHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      id="navbar"
      ref={navbarRef}
      // Added proper dark mode background and text colors
      className={`fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">My Portfolio</h1>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')} className="nav-link text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium">Home</a>
            <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="nav-link text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium">About</a>
            <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')} className="nav-link text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium">Projects</a>
            <a href="#skills" onClick={(e) => handleScrollToSection(e, 'skills')} className="nav-link text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium">Skills</a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="nav-link text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;