import React, { useEffect, useState } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  // Optional: Use an Intersection Observer or scroll events to update activeSection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#landing"
              className={`${
                activeSection === 'landing' ? 'text-blue-500' : 'text-gray-800'
              } hover:text-blue-500 transition-colors`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`${
                activeSection === 'skills' ? 'text-blue-500' : 'text-gray-800'
              } hover:text-blue-500 transition-colors`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${
                activeSection === 'projects' ? 'text-blue-500' : 'text-gray-800'
              } hover:text-blue-500 transition-colors`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                activeSection === 'contact' ? 'text-blue-500' : 'text-gray-800'
              } hover:text-blue-500 transition-colors`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;