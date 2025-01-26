import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa'; // Font Awesome icons
import { SiTailwindcss, SiTypescript, SiDjango, SiMongodb } from 'react-icons/si'; // Simple Icons

function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'Django', icon: <SiDjango className="text-green-700" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-animated text-center animate-fadeIn">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 animate-slideInUp text-gray-800">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-40 hover:scale-105 transition-transform animate-scaleUp"
          >
            <div className="mb-4 text-4xl">{skill.icon}</div>
            <p className="font-semibold text-lg text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;