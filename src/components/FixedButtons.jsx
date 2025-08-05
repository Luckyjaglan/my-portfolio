import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

const FixedButtons = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startTouch, setStartTouch] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 }); 
  const [isMobile, setIsMobile] = useState(false); 
  const buttonRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const setInitialButtonPosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const initialX = window.innerWidth - rect.width - 24; 
        const initialY = window.innerHeight - rect.height - 24;

        setPosition({ x: initialX, y: initialY });
        setInitialPosition({ x: initialX, y: initialY });
      }
    };

    checkMobile();
    if (window.innerWidth < 768) {
      setInitialButtonPosition();
    }

    const handleResize = () => {
      checkMobile();
      
      if (window.innerWidth < 768) {
        setInitialButtonPosition();
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartTouch({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    
    setInitialPosition({ x: position.x, y: position.y });
    e.stopPropagation();
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isMobile) return;
    e.preventDefault();

    const dx = e.touches[0].clientX - startTouch.x;
    const dy = e.touches[0].clientY - startTouch.y;

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newX = initialPosition.x + dx;
      let newY = initialPosition.y + dy;

     newX = Math.max(0, Math.min(newX, viewportWidth - rect.width));
      newY = Math.max(0, Math.min(newY, viewportHeight - rect.height));

      setPosition({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      ref={buttonRef}
     
      className={`fixed z-50 flex flex-col gap-3 ${isMobile ? '' : 'bottom-6 right-6'}`}
      style={isMobile ? {
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        transition: isDragging ? 'none' : 'transform 0.1s ease-out',
      } : {}}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <a
        href="https://drive.google.com/file/d/1aomaVXUGlDUpRvU1RrM01cdOQ2pshp1k/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 dark:bg-green-700 dark:hover:bg-green-800 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center text-sm sm:text-base font-semibold transform hover:scale-105"
      >
        Download Resume
      </a>
      <button
        onClick={handleScrollToTop}
        className="bg-sky-500 dark:bg-blue-700 dark:hover:bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-xl transform hover:scale-105"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default FixedButtons;
