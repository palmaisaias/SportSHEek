import React from 'react';

function Skills() {
  const skills = [
    { name: 'React', icon: '⚛️' }, // Example using emoji
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'No Icon Skill', icon: '🔧' }, // Fallback icon for skills without a specific one
  ];

  return (
    <section id="skills" className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-4 rounded shadow w-32 hover:scale-105 transition-transform"
          >
            <div className="mb-2 text-3xl">{skill.icon}</div>
            <p className="font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;