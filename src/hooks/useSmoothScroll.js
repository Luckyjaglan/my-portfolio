// src/hooks/useSmoothScroll.js
import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const handleScrollToSection = useCallback((e, sectionId) => {
    if (e) {
      e.preventDefault();
    }
    
    const section = document.getElementById(sectionId);
    const navbar = document.getElementById('navbar'); // Get the navbar element by its ID
    
    if (section && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const offsetTop = section.offsetTop - navbarHeight - 20; // 20px buffer
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []); // The function is created only once because the dependency array is empty

  return handleScrollToSection;
};