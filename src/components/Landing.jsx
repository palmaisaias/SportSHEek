import React from 'react';

function Landing() {
  return (
    <section
      id="landing"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4"
    >
      <h2 className="text-5xl font-bold mb-4 text-center transition-all duration-700 ease-in-out">
        Hello, I’m John Doe
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl text-center mb-8">
        I’m a Full-Stack Developer specializing in building exceptional digital experiences.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors"
      >
        View My Work
      </a>
    </section>
  );
}

export default Landing;