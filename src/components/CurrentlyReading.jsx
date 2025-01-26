import React from 'react';
import { FaBook, FaPodcast } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

function CurrentlyReading() {
  const books = [
    {
      title: 'Nexus',
      author: 'Yuval Noah Harari',
      description: 'A thought-provoking novel exploring the implications of technology on human evolution.',
    },
    {
      title: 'Revenge of the Tipping Point',
      author: 'Malcolm Gladwell',
      description: 'An insightful analysis of how small actions can lead to significant societal changes.',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A classic novel that delves into issues of morality, upbringing, and marriage in early 19th-century England.',
    },
  ];

  const podcast = {
    title: 'The History of Rome',
    description: 'A fascinating podcast that explores the rise and fall of the Roman Empire in detail.',
    link: 'https://thehistoryofrome.typepad.com/',
  };

  return (
    <section
      id="currently-reading"
      className="py-16 bg-gray-100 text-center font-sans relative animate-fadeIn"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 animate-slideInUp animate-fadeIn text-gray-800">
        Currently Reading & Listening
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Books Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 animate-scaleUp animate-highlight">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center justify-center animate-fadeIn">
            <FaBook className="mr-2 animate-spinIn" /> Books I've Read (this year)
          </h3>
          <ul className="space-y-4">
            {books.map((book, idx) => (
              <li key={idx} className="text-left">
                <h4 className="text-xl font-medium text-gray-700">{book.title}</h4>
                <p className="text-gray-600 italic">by {book.author}</p>
                <p className="text-gray-600 mt-2">{book.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Podcast Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 animate-scaleUp animate-highlight">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center justify-center animate-fadeIn">
            <FaPodcast className="mr-2 animate-spinIn" /> Currently Listening
          </h3>
          <div className="text-left">
            <h4 className="text-xl font-medium text-gray-700">{podcast.title}</h4>
            <p className="text-gray-600 mt-2">{podcast.description}</p>
            <a
              href={podcast.link}
              className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-700 hover:underline transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Listen Now
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
    </section>
  );
}

export default CurrentlyReading;