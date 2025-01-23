import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'Brief description of project one.',
      link: 'https://github.com/your-username/project-one',
      technologies: ['React', 'TailwindCSS'],
    },
    {
      title: 'Project Two',
      description: 'Brief description of project two.',
      link: 'https://github.com/your-username/project-two',
      technologies: ['Next.js', 'Node.js'],
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gray-50"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Projects & Achievements</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white shadow rounded p-6 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <ul className="flex space-x-2 mb-4">
              {project.technologies.map((tech, i) => (
                <li
                  key={i}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;