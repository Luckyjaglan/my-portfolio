// src/App.jsx
import React from 'react';

// Import all your new components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import FixedButtons from './components/FixedButtons';
import Footer from './components/Footer';

function App() {
  return (
    // Add a <main> tag for better accessibility
    <div className="bg-violet-100 dark:bg-gray-600 min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <FixedButtons />
      <Footer />
    </div>
  );
}
 export default App;