import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Skills from '../components/SportsCategories';
import Projects from '../components/Featured';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;