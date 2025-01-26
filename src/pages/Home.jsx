import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Certifications from '../components/Certifications';
import CurrentlyReading from '../components/CurrentlyReading';

function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <Certifications />
      <CurrentlyReading />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;