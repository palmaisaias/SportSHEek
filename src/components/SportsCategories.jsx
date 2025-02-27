import React from 'react';
import { Link } from 'react-router-dom';
import { FaBasketballBall, FaRunning, FaFootballBall } from 'react-icons/fa';
import { GiTennisRacket, GiSoccerBall } from 'react-icons/gi';

function SportsCategories() {
  // Define each category with a name, icon, and route path.
  const categories = [
    { name: 'Basketball', icon: <FaBasketballBall className="text-orange-600" />, path: '/basketball' },
    { name: 'Running', icon: <FaRunning className="text-red-500" />, path: '/running' },
    { name: 'Football', icon: <FaFootballBall className="text-yellow-600" />, path: '/football' },
    { name: 'Tennis', icon: <GiTennisRacket className="text-green-600" />, path: '/tennis' },
    { name: 'Soccer', icon: <GiSoccerBall className="text-teal-600" />, path: '/soccer' },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100 text-center animate-fadeIn">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-800 animate-slideInUp">
        Explore Sports Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
          // Wrap each card with Link; clicking navigates to the respective route.
          <Link key={index} to={category.path}>
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-40 hover:scale-105 transition-transform animate-scaleUp">
              <div className="mb-4 text-4xl">{category.icon}</div>
              <p className="font-semibold text-lg text-gray-700">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SportsCategories;