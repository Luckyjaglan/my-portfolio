import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    // Darker, richer gray for footer background
    <footer className="bg-gray-900 text-white py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/Luckyjaglan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors" aria-label="GitHub Profile">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/lucky-jaglan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors" aria-label="LinkedIn Profile">
            <Linkedin size={28} />
          </a>
          <a href="https://x.com/jaglan_lucky" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors" aria-label="Twitter Profile">
            <Twitter size={28} />
          </a>
          <a href="mailto:luckyjaglan47@gmail.com" target="_blank" className="text-gray-400 hover:text-sky-400 transition-colors" aria-label="Email Me">
            <Mail size={28} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Lucky Jaglan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
