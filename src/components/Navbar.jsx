import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define all sections with their exact IDs
  const sections = [
    { name: 'landing', label: 'Landing' },
    { name: 'skills', label: 'Sports Categories' },
    { name: 'projects', label: 'Featured' },
    // { name: 'certifications', label: 'Certifications' },
    // { name: 'currently-reading', label: 'Currently Reading' }, // Updated ID
    { name: 'contact', label: 'Contact' },
  ];

  // Handle active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      let current = '';
      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
      console.log(`Current active section: ${current}`);
    };

    window.addEventListener('scroll', handleScroll);
    console.log('Scroll event listener added.');
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Scroll event listener removed.');
    };
  }, []);

  // Handle smooth scrolling and close mobile menu
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    console.log(`Link clicked: ${target}`);
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth',
      });
      console.log(`Scrolling to section: ${target}`);
    } else {
      console.log(`Element with id "${target}" not found.`);
    }
    setIsMobileMenuOpen(false);
    console.log('Mobile menu closed.');
  };

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(`Mobile menu toggled: ${!isMobileMenuOpen ? 'Opened' : 'Closed'}`);
  };

  return (
    <nav className="bg-white sticky top-0 z-40 shadow animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Title with Logo */}
        <div className="flex items-center">
          <img src="/pngLOGO.png" alt="Logo" className="h-8 w-auto mr-2" />
          <div className="text-2xl font-bold text-purple-600 animate-slideInUp">
            sportSHEek
          </div>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <li key={section.name}>
              <a
                href={`#${section.name}`}
                onClick={(e) => handleLinkClick(e, section.name)}
                className={`relative text-lg font-medium ${
                  activeSection === section.name ? 'text-purple-600' : 'text-gray-800'
                } hover:text-blue-500 transition-colors`}
              >
                {section.label}
                {activeSection === section.name && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 rounded-full animate-fadeIn"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl text-gray-800 hover:text-blue-500 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => {
              setIsMobileMenuOpen(false);
              console.log('Overlay clicked. Mobile menu closed.');
            }}
          ></div>
          {/* Menu */}
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg animate-fadeIn z-50">
            {/* Close Button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMobileMenu}
                className="text-2xl text-gray-800 hover:text-blue-500 transition-colors focus:outline-none"
                aria-label="Close Menu"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center space-y-6 h-full">
              {sections.map((section) => (
                <li key={section.name}>
                  <a
                    href={`#${section.name}`}
                    onClick={(e) => handleLinkClick(e, section.name)}
                    className={`text-xl font-medium ${
                      activeSection === section.name ? 'text-blue-500' : 'text-gray-800'
                    } hover:text-blue-500 transition-colors`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulseOnce pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulseOnce pointer-events-none"></div>
    </nav>
  );
}

export default Navbar;