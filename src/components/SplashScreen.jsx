import React from "react";
import { FaArrowDown } from "react-icons/fa";

function SplashScreen() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 relative animate-fadeIn font-serif px-4">
      {/* Inline custom animation */}
      <style>{`
        @keyframes spinFromBottom {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          100% {
            transform: perspective(1000px) rotateY(360deg);
          }
        }
        .animate-spinFromBottom {
          transform-origin: bottom center;
          animation: spinFromBottom 3s linear infinite;
        }
      `}</style>

      {/* Decorative Elements (softened) */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>

      {/* Logo Image with Bottom-Centered 3D Y-Axis Rotation */}
      <img
        src="/pngLOGO.png"
        alt="Logo"
        className="w-48 h-48 animate-spinFromBottom"
      />

      {/* Scroll Indicator */}
      <div className="mt-8 animate-bounce">
        <FaArrowDown className="text-gray-800 text-3xl" />
      </div>
    </section>
  );
}

export default SplashScreen;