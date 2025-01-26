import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-animated py-8 text-white relative animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-6 animate-slideInUp">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="mt-2 text-gray-200">Feel free to reach out for collaborations or just a friendly hello!</p>
        </div>
        <div className="flex space-x-6 mb-6 animate-scaleUp">
          <a
            href="mailto:palmaisaias@yahoo.com"
            className="text-gray-300 hover:text-white transition-colors text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/isaias-palma-software-engineer/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/palmaisaias"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white transition-colors text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-gray-400 animate-fadeIn">
          © {new Date().getFullYear()} Isaias Palma. All rights reserved.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
    </footer>
  );
}

export default Footer;