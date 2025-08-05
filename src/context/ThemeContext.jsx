// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme. Default to 'light'.
  // We check localStorage to see if a theme was previously saved.
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // This effect runs when the `theme` state changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the old theme class and add the new one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Save the user's preference in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily access the theme context in any component
export const useTheme = () => {
  return useContext(ThemeContext);
};