import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

const FixedButtons = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startTouch, setStartTouch] = useState({ x: 0, y: 0 }); // Initial touch point
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Current element position (top-left)
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 }); // Element position when drag starts
  const [isMobile, setIsMobile] = useState(false); // State to control mobile-only dragging
  const buttonRef = useRef(null);

  // Detect mobile screen size and set initial position
  useEffect(() => {
    const checkMobile = () => {
      // Define 'mobile' as screen width less than Tailwind's 'md' breakpoint (768px)
      setIsMobile(window.innerWidth < 768);
    };

    const setInitialButtonPosition = () => {
      if (buttonRef.current) {
        // Calculate the initial position to replicate bottom-6 right-6
        const rect = buttonRef.current.getBoundingClientRect();
        const initialX = window.innerWidth - rect.width - 24; // 24px from right
        const initialY = window.innerHeight - rect.height - 24; // 24px from bottom
        setPosition({ x: initialX, y: initialY });
        // Also set initialPosition for drag calculations, so dragging starts from current visual spot
        setInitialPosition({ x: initialX, y: initialY });
      }
    };

    // Initial check on component mount
    checkMobile();
    if (window.innerWidth < 768) { // Only set initial position if it's mobile on mount
      setInitialButtonPosition();
    }

    // Event listener for window resize (e.g., device rotation, browser window resize)
    const handleResize = () => {
      checkMobile();
      // Recalculate initial position on resize to keep it relative to new viewport
      if (window.innerWidth < 768) { // Only re-set if it's mobile
        setInitialButtonPosition();
      } else {
        // If transitioning to desktop, reset position to let Tailwind's fixed classes take over
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleTouchStart = (e) => {
    if (!isMobile) return; // Only enable dragging on mobile
    setIsDragging(true);
    // Store the starting touch point
    setStartTouch({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    // Store the element's current position when the drag starts
    setInitialPosition({ x: position.x, y: position.y });
    e.stopPropagation(); // Prevent parent elements (like the page itself) from scrolling
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isMobile) return;
    e.preventDefault(); // Crucial: Prevent default touch actions (like scrolling) while dragging

    const dx = e.touches[0].clientX - startTouch.x; // Delta X
    const dy = e.touches[0].clientY - startTouch.y; // Delta Y

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate new tentative position
      let newX = initialPosition.x + dx;
      let newY = initialPosition.y + dy;

      // Apply boundary checks to keep the element within the viewport
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
      // Apply fixed positioning. On desktop, Tailwind's bottom-6 right-6 will apply.
      // On mobile, these classes are absent, and positioning is controlled by 'style' prop.
      className={`fixed z-50 flex flex-col gap-3 ${isMobile ? '' : 'bottom-6 right-6'}`}
      style={isMobile ? { // Apply dynamic top/left for mobile
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab', // Visual feedback for dragging
        touchAction: 'none', // Prevents browser from trying to scroll/zoom
        transition: isDragging ? 'none' : 'transform 0.1s ease-out', // No transition during drag, smooth snap after release
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
