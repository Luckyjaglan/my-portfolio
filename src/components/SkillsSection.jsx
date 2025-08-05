import React from 'react';
import { Code, Zap, Layers, Globe, Binary, Lightbulb, MessageSquare, Settings, Terminal } from 'lucide-react';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SkillsSection = () => {
  const skills = [
    'Python', 'C', 'DSA', 'REST APIs', 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Problem Solving', 'Communication'
  ];

  const skillColors = {
    'Python': 'text-blue-700',
    'C': 'text-blue-800',
    'HTML': 'text-orange-600',
    'CSS': 'text-blue-600',
    'JavaScript': 'text-yellow-500',
    'React': 'text-sky-500',
    'Tailwind CSS': 'text-teal-500',
    'Git': 'text-orange-700',
    'DSA': 'text-indigo-600',
    'REST APIs': 'text-purple-600',
    'Problem Solving': 'text-amber-500',
    'Communication': 'text-blue-500',
  };

  const getSkillData = (skillName) => {
    const icon = (() => {
      switch (skillName) {
        case 'Python': return <Terminal size={32} />;
        case 'C': return <Code size={32} />;
        case 'HTML': return <Code size={32} />;
        case 'CSS': return <Code size={32} />;
        case 'JavaScript': return <Zap size={32} />;
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
      colorClass: skillColors[skillName] || 'text-gray-600'
    };
  };

  return (
    <section id="skills" className="min-h-[calc(100vh-theme(spacing.20))] px-4 py-20 bg-transparent pt-20 pb-10 relative border-b border-gray-300">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100"
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => {
          const { icon, colorClass } = getSkillData(skill);
          const MotionSkillCard = motion(SkillCard);
          return (
            <MotionSkillCard
              key={index}
              skill={skill}
              icon={icon}
              colorClass={colorClass}
              variants={itemVariants}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default SkillsSection;