import React from "react";

function Landing() {
  return (
    <section
      id="landing"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 px-4 animate-fadeIn font-serif relative"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-40 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-40 blur-3xl animate-pulseOnce"></div>

      {/* Blog Title */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-4 animate-slideInUp text-center">
        Welcome to
      </h1>

      {/* sportSHEek Logo Image */}
      <img
        src="/ssLOG.webp"
        alt="sportSHEek Logo"
        className="w-56 h-34 mb-8 animate-fadeIn"
      />

      {/* Subtitle */}
      <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl text-center mb-8 animate-scaleUp">
        Sports talk without the mansplaining.
      </p>

      {/* CTA Button */}
      <a
        href="#latest-posts"
        className="px-8 py-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 hover:shadow-lg animate-pulseOnce flex items-center"
      >
        Explore the Blog
        <svg
          className="w-5 h-5 ml-2 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>

      {/* Scroll Indicator */}
      <a href="#latest-posts" className="absolute bottom-10 animate-bounce">
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}

export default Landing;