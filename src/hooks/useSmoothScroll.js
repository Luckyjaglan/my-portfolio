import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const handleScrollToSection = useCallback((e, sectionId) => {
    if (e) {
      e.preventDefault();
    }
    
    const section = document.getElementById(sectionId);
    const navbar = document.getElementById('navbar');
    
    if (section && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const offsetTop = section.offsetTop - navbarHeight - 20;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);
  
  return handleScrollToSection;
};