import React from "react";
import { FaArrowDown } from "react-icons/fa";

function SplashScreen() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 relative animate-fadeIn font-serif px-4">
      {/* Decorative Elements (softened) */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>

      {/* Content */}
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6 animate-slideInUp text-center">
        Welcome to sportSHEek
      </h1>
      <p className="text-xl sm:text-2xl text-gray-700 mb-8 animate-scaleUp text-center">
        Making Sports Make Sense
      </p>

      {/* Scroll Indicator */}
      <div className="mt-8 animate-bounce">
        <FaArrowDown className="text-gray-800 text-3xl" />
      </div>
    </section>
  );
}

export default SplashScreen;
