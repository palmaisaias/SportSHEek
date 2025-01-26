import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

function SplashScreen() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 relative animate-fadeIn font-sans px-4"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>

      {/* Content */}
      <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-slideInUp text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl sm:text-2xl text-white mb-8 animate-scaleUp text-center">
        Dive into My World of Design & Development
      </p>

      {/* Scroll Indicator */}
    </section>
  );
}

export default SplashScreen;