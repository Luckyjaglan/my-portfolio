// src/components/SkillCard.jsx
import React from 'react';

const SkillCard = ({ skill, icon, colorClass }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
      <div className={`${colorClass} group-hover:text-sky-700 dark:group-hover:text-white transition-colors mb-2`}>
        {icon}
      </div>
      <p className="font-semibold text-lg text-gray-800 dark:text-gray-200 group-hover:text-sky-700 dark:group-hover:text-white  transition-colors">
        {skill}
      </p>
    </div>
  );
};

export default SkillCard;