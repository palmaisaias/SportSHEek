import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white relative animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Contact Section */}
        <div className="mb-6 animate-slideInUp">
          <h3 className="text-2xl font-semibold text-center">Stay Connected</h3>
          <p className="mt-2 text-gray-400">
            Follow us for updates, collaborations, and the latest in sports and style!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-6 animate-scaleUp">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors text-2xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 animate-fadeIn">
          © {new Date().getFullYear()} Sports Chic. All rights reserved.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
    </footer>
  );
}

export default Footer;