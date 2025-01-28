import React from 'react';
import { FaBasketballBall, FaRunning, FaDumbbell, FaSwimmer, FaFootballBall } from 'react-icons/fa';
import { GiTennisRacket, GiSoccerBall, GiCycling } from 'react-icons/gi'; // Sports-related icons
import { FaSpa } from 'react-icons/fa';

function SportsCategories() {
  const categories = [
    { name: 'Basketball', icon: <FaBasketballBall className="text-orange-600" /> },
    { name: 'Running', icon: <FaRunning className="text-red-500" /> },
    { name: 'Strength Training', icon: <FaDumbbell className="text-gray-600" /> },
    { name: 'Swimming', icon: <FaSwimmer className="text-blue-600" /> },
    { name: 'Football', icon: <FaFootballBall className="text-yellow-600" /> },
    { name: 'Tennis', icon: <GiTennisRacket className="text-green-600" /> },
    { name: 'Soccer', icon: <GiSoccerBall className="text-teal-600" /> },
    { name: 'Cycling', icon: <GiCycling className="text-amber-600" /> },
    { name: 'Yoga & Wellness', icon: <FaSpa className="text-purple-600" /> },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100 text-center animate-fadeIn">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-800 animate-slideInUp">
        Explore Sports Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-40 hover:scale-105 transition-transform animate-scaleUp"
          >
            <div className="mb-4 text-4xl">{category.icon}</div>
            <p className="font-semibold text-lg text-gray-700">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SportsCategories;