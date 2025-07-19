import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Code, GitBranch, Figma, MessageSquare, Lightbulb, Zap, Database, Globe, Layers, Layout, Terminal, Server, GitCommit, Settings, Binary } from 'lucide-react'; // Importing additional icons from lucide-react

// --- Navbar Component ---
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const offsetTop = section.offsetTop - navbarHeight - 20; // -20px for extra padding
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      // Modern navbar: slightly translucent background with blur, subtle shadow
      className={`fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-800">My Portfolio</h1> {/* Stronger font for brand */}
        <nav className="flex gap-6">
          {/* Enhanced nav links with modern hover */}
          <a href="#home" onClick={(e) => handleScrollToSection(e, 'home')} className="nav-link text-gray-700 hover:text-sky-600 transition-colors font-medium">Home</a>
          <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="nav-link text-gray-700 hover:text-sky-600 transition-colors font-medium">About</a>
          <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')} className="nav-link text-gray-700 hover:text-sky-600 transition-colors font-medium">Projects</a>
          <a href="#skills" onClick={(e) => handleScrollToSection(e, 'skills')} className="nav-link text-gray-700 hover:text-sky-600 transition-colors font-medium">Skills</a>
          <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="nav-link text-gray-700 hover:text-sky-600 transition-colors font-medium">Contact</a>
        </nav>
      </div>
    </nav>
  );
};

// --- Hero (Home) Section Component ---
const HeroSection = () => {
  // Placeholder background image URL (replace with your own)
  const backgroundImage = '/assets/home_bg.jpg';

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.getElementById('navbar').offsetHeight;
      const offsetTop = section.offsetTop - navbarHeight - 20; // -20px for extra padding
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    // Fixed window height for home page, with background image and overlay, and a bottom border
    <section
      id="home"
      className="min-h-[calc(100vh-theme(spacing.20))] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden border-b border-gray-300"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto">
        <p className="text-lg sm:text-xl font-medium text-sky-300 mb-2 tracking-wider">
          SOFTWARE ENGINEER | CSc STUDENT
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
          Hello, I'm Lucky Jaglan
        </h2>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-200 mb-8 leading-relaxed">
          Hi, I’m a Computer Science student from India, specializing in Data Science & AI at SRM University. I'm a budding Software Engineer with a global mindset, passionate about building smart, impactful applications.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/Luckyjaglan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors" aria-label="GitHub Profile">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/lucky-jaglan" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors" aria-label="LinkedIn Profile">
            <Linkedin size={32} />
          </a>
          <a href="mailto:luckyjaglan47@gmail.com" className="text-gray-300 hover:text-sky-400 transition-colors" aria-label="Email Me">
            <Mail size={32} />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects" // Link to Projects section
            onClick={(e) => handleScrollToSection(e, 'projects')}
            className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-lg text-lg font-semibold transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact" // Link to Contact section
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

// --- About Section Component ---
const AboutSection = () => {
  // Placeholder image for About section (replace with your own)
  const aboutImage = "/assets/aboutme_img.jpg"; // User's image path

  return (
    // Height adapts to content with appropriate vertical padding, now transparent to inherit page background, and a bottom border
    <section id="about" className="px-4 py-20 bg-transparent pt-20 pb-10 border-b border-gray-300">
      {/* Parent container for image and text, using items-stretch to match heights */}
      {/* max-w-5xl is back to constrain the content width */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Image Container on Left Half - Responsive width, image dictates its height */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About Me"
            // Reverted to responsive image sizing: w-full fills its half, h-auto maintains aspect ratio.
            // max-w-md and md:max-w-full ensure it doesn't get too big on small screens but fills its space on larger.
            className="w-full h-auto object-cover rounded-xl shadow-lg max-w-md md:max-w-full"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E0E0/333333?text=Error"; }}
          />
        </div>

        {/* Text Content on Right Half - Containerized and scrollable if content overflows */}
        {/* This div will now stretch to match the responsive height of the image */}
        <div className="w-full md:w-1/2 text-center md:text-left bg-white p-8 rounded-2xl shadow-xl flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          <div className="flex-grow overflow-y-auto pr-2">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm Lucky Jaglan, a Computer Science & Engineering student at SRM University, India, specializing in Data Science and Artificial Intelligence. With a strong foundation in web development and a growing interest in full-stack technologies, I love turning ideas into real-world applications.<br></br><br></br>
I’m currently focused on building efficient, user-friendly projects using tools like JavaScript, React, Python, and MySQL. Whether it's front-end design or back-end logic, I enjoy learning new skills and solving complex problems. I'm also exploring DevOps, Git workflows, and cloud deployment to round out my skill set.<br></br><br></br>
When I’m not coding, I’m usually learning something new, refining my skills, or contributing to academic and personal tech projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Projects Section Component ---
const ProjectsSection = () => {
  const allProjects = [
    {
      id: 1,
      title: 'My Portfolio',
      description: 'My self-made portfolio website you\'re currently looking at.',
      builtWith: ['React.js', 'Tailwind CSS', 'Vercel'],
      link: 'https://github.com/Luckyjaglan/my-portfolio',
      image: '/assets/Project1_img.png',
      imageOnRight: false,
    },
    {
      id: 2,
      title: 'Study Buddy',
      description: 'A one stop solution for notes, syllabus and study material.',
      builtWith: ['HTML5', 'CSS3', 'Javascript'],
      link: 'https://github.com/your/osubackup',
      image: '/assets/Project2_img.png',
      imageOnRight: true,
    },
    {
      id: 3,
      title: 'Student Database Management System',
      description: 'A GUI based sql database management system.',
      builtWith: ['Tkinter', 'MySql'],
      link: 'https://github.com/Luckyjaglan/Student-Database-Management-System-Tkinter-MySQL',
      image: '/assets/Project3_img.png',
      imageOnRight: false,
    },
  
  ];

  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(1); // State for opacity
  const transitionDuration = 250; // milliseconds

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const projectsToDisplay = allProjects.slice(startIndex, startIndex + projectsPerPage);

  const handleNextPage = () => {
    setContentOpacity(0); // Start fade out
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      setContentOpacity(1); // Fade in new content
    }, transitionDuration);
  };

  const handlePrevPage = () => {
    setContentOpacity(0); // Start fade out
    setTimeout(() => {
      setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
      setContentOpacity(1); // Fade in new content
    }, transitionDuration);
  };

  return (
    // Fixed window height for projects page, now transparent to inherit page background, and a bottom border
    <section id="projects" className="min-h-[calc(100vh-theme(spacing.20))] px-4 py-20 bg-transparent pt-20 pb-10 relative border-b border-gray-300">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>

      {/* Outer container to control max-w-5xl and center the projects block */}
      <div className="max-w-5xl mx-auto relative">
        {/* Inner container for the projects with smooth transition */}
        <div
          key={currentPage} // Key still needed to force re-render for transition to apply
          className="flex flex-col gap-16"
          style={{ opacity: contentOpacity, transition: `opacity ${transitionDuration}ms ease-in-out` }} // Inline style for transition
        >
          {projectsToDisplay.map((project) => (
            <div
              key={project.id}
              // Project card styling: white background, larger shadow, rounded corners
              className={`
                bg-white p-6 shadow-xl rounded-2xl overflow-hidden
                flex flex-col items-center gap-8
                md:flex-row
                ${project.imageOnRight ? 'md:flex-row-reverse' : ''}
              `}
            >
              {/* Project Image Container */}
              <div className="md:w-1/2 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/E0E0E0/333333?text=Error"; }}
                />
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 uppercase tracking-wider">DESCRIPTION</p>
                <p className="text-base text-gray-700 mb-4 flex-grow leading-relaxed">{project.description}</p>

                {/* Built With section */}
                {project.builtWith && project.builtWith.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wider">BUILT WITH</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      <span className="sr-only">Built with:</span> {/* Accessibility for screen readers */}
                      {project.builtWith.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* View Project Link & GitHub Icon */}
                <div className="flex justify-center md:justify-start mt-4 gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors shadow-md text-base font-semibold transform hover:scale-105"
                  >
                    View Project
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-sky-600 transition-colors text-3xl transform hover:scale-110"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> {/* End of inner container */}

        {/* Navigation Buttons (positioned relative to the outer max-w-5xl container) */}
        {totalPages > 1 && (
          <>
            <button
              onClick={handlePrevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-20 hidden md:block transform hover:scale-110"
              aria-label="Previous Projects"
            >
              &#x2190;
            </button>
            <button
              onClick={handleNextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-20 hidden md:block transform hover:scale-110"
              aria-label="Next Projects"
            >
              &#x2192;
            </button>
          </>
        )}
      </div> {/* End of outer container */}
    </section>
  );
};

// --- Skills Section Component ---
const SkillsSection = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS','Git', 'REST APIs', 'DSA', 'Problem Solving', 'Communication'
  ];

  // Mapping for skill-specific colors using Tailwind CSS classes
  const skillColors = {
    'HTML': 'text-orange-600',
    'CSS': 'text-blue-600',
    'JavaScript': 'text-yellow-500', // Yellow for JavaScript
    'React': 'text-sky-500', // Matches your accent blue
    'Tailwind CSS': 'text-teal-500',
    'Git': 'text-orange-700', // Darker orange for Git
    'DSA': 'text-indigo-600',
    'REST APIs': 'text-purple-600',
    'Problem Solving': 'text-amber-500',
    'Communication': 'text-blue-500',
  };

  // Helper function to get an icon and its specific color class based on skill name
  const getSkillData = (skillName) => {
    const icon = (() => {
      switch (skillName) {
        case 'HTML': return <Code size={32} />;
        case 'CSS': return <Code size={32} />;
        case 'JavaScript': return <Zap size={32} />; // Using Zap for JS
        case 'React': return <Zap size={32} />;
        case 'Tailwind CSS': return <Layers size={32} />;
        case 'REST APIs': return <Globe size={32} />;
        case 'DSA': return <Binary size={32} />;
        case 'Problem Solving': return <Lightbulb size={32} />;
        case 'Communication': return <MessageSquare size={32} />;
        default: return <Settings size={32} />;
      }
    })();

    return {
      icon: icon,
      colorClass: skillColors[skillName] || 'text-gray-600' // Default to gray if no specific color is mapped
    };
  };

  return (
    // Height adapts to content with appropriate vertical padding, now transparent to inherit page background, and a bottom border
    <section id="skills" className="px-4 py-20 bg-transparent pt-20 pb-10 border-b border-gray-300">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"> {/* Responsive grid */}
        {skills.map((skill, index) => {
          const skillData = getSkillData(skill); // Get icon and color class
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
            >
              {/* Icon color set dynamically, transitions to sky-700 on hover */}
              <div className={`${skillData.colorClass} group-hover:text-sky-700 transition-colors mb-2`}>
                {skillData.icon}
              </div>
              <p className="font-semibold text-lg text-gray-800 group-hover:text-sky-700 transition-colors">
                {skill}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// --- Contact Section Component ---
const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const [formData, setFormData] = useState({ // State to hold form input values
    subject: '',
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validation function
  const validate = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setMessage('Please correct the errors in the form.');
      return; // Stop submission if validation fails
    }

    setMessage('Sending message...');

    const formUrl = 'https://formspree.io/f/myzpzrer';
    // Create FormData from the state, not directly from event.target
    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        body: dataToSend, // Use dataToSend
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setMessage('Message sent successfully! Thank you.');
        setFormData({ subject: '', name: '', email: '', message: '' }); // Clear form on success
        setErrors({}); // Clear any previous errors
      } else {
        const data = await response.json();
        if (data.errors) {
          setMessage(data.errors.map(error => error.message).join(', '));
        } else {
          setMessage('Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      setMessage('An error occurred. Please check your network and try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    // Height adapts to content, increased max-w for larger form, now transparent to inherit page background
    <section id="contact" className="px-4 py-20 bg-transparent pt-20 pb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">Contact Me</h2>
      {/* Removed bg-white, p-6, rounded-xl, shadow-lg from the form itself */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4">
        {/* Subject Input */}
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject (optional)"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white shadow-sm"
          />
        </div>

        {/* Name and Email Inputs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-sky-500'
              }`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-sky-500'
              }`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 bg-white shadow-sm ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-sky-500'
            }`}
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-md w-full sm:w-auto font-semibold transform hover:scale-105"
        >
          Send Message
        </button>
        {message && (
          <p className={`mt-4 text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </section>
  );
};

// --- Scroll to Top & Resume Button Component ---
const FixedButtons = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://drive.google.com/file/d/1aomaVXUGlDUpRvU1RrM01cdOQ2pshp1k/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center text-sm sm:text-base font-semibold transform hover:scale-105"
      >
        Download Resume
      </a>
      <button
        onClick={handleScrollToTop}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg transform hover:scale-105"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

// --- Footer Component ---
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
          <a href="mailto:luckyjaglan47@gmail.com" className="text-gray-400 hover:text-sky-400 transition-colors" aria-label="Email Me">
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


// --- Main App Component ---
function App() {
  return (
    // Main wrapper div for the entire page to apply the light blue background
    <div className="bg-violet-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <FixedButtons />
      <Footer />
    </div>
  );
}

export default App;
