import React, { useState } from 'react';

function Featured() {
  // Dummy data for stories
  const stories = [
    {
      id: 1,
      title: 'Exciting Football Match',
      image: '/images/football.jpg', // Place your image in the public/images folder
      shortDescription:
        'A thrilling match between top teams, full of unexpected turns and amazing plays.',
      fullContent:
        'This match was a roller coaster of emotions, starting with an early goal and fierce competition throughout. Both teams demonstrated brilliant strategy and skill, making it one of the most memorable games of the season. The final moments left fans on the edge of their seats as every pass and tackle counted.',
    },
    {
      id: 2,
      title: 'Basketball Championship Highlights',
      image: '/images/basketball.jpg',
      shortDescription:
        'The championship game showcased spectacular dunks and nail-biting moments.',
      fullContent:
        'In the championship showdown, every second was packed with energy and high stakes. Players pushed their limits, creating a blend of athleticism and strategy that captivated the audience. The intensity of the game and the dramatic finish set a new standard for what fans can expect from top-level basketball.',
    },
    {
      id: 3,
      title: 'Marathon: A Test of Endurance',
      image: '/images/marathon.jpg',
      shortDescription:
        'Runners from all over the world participated in a grueling test of endurance and spirit.',
      fullContent:
        'The marathon was not just a race, but a celebration of human determination. Challenging weather conditions and tough terrains did little to stop these athletes from pushing forward. Each runner showcased resilience and passion, turning the event into a true testament to endurance and the human spirit.',
    },
    {
      id: 4,
      title: 'Tennis Open: Upsets and Triumphs',
      image: '/images/tennis.jpg',
      shortDescription:
        'A tournament full of surprises, where underdogs made a remarkable run against seasoned players.',
      fullContent:
        'The Tennis Open was full of unexpected twists, with emerging talents challenging seasoned champions. Every match was a display of skill, perseverance, and tactical brilliance. The tournament’s unexpected outcomes inspired many and proved that sometimes the underdog can shine the brightest on the grand stage.',
    },
    {
      id: 5,
      title: "49ers' Offseason Drama: Deebo's Departure and Purdy's Paycheck Predicament",
      image: 'https://a.espncdn.com/photo/2024/1213/r1427354_1296x518_5-2.jpg',
      shortDescription: "The 49ers face a stormy offseason with trade requests, contract talks, and injury comebacks.",
      fullContent: "The 49ers’ offseason is serving up enough drama to make The Real Housewives look tame. Deebo Samuel wants out, Brock Purdy is eyeing a payday that could make Silicon Valley blush, and the team is juggling injuries like a circus act. GM John Lynch is stuck playing mediator, trying to move Samuel while also deciding if Purdy’s Cinderella story is worth $50 million a year. Meanwhile, Trent Williams and Christian McCaffrey are on the mend, hoping to avoid another season of injury-induced existential crises. With a disastrous 6-11 season in the rearview, the 49ers need to make some serious moves—or risk becoming the NFL’s next cautionary tale."
    }
  ];

  // State to track the currently selected story for the modal
  const [selectedStory, setSelectedStory] = useState(null);

  // Open modal with the selected story
  const openModal = (story) => {
    setSelectedStory(story);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedStory(null);
  };

  return (
    <section
      id="featured"
      className="py-16 bg-gray-100 relative animate-fadeIn"
    >
      <div className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 animate-slideInUp">
          Featured Stories
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our curated collection of sports stories. Click on any story
          to read the full post.
        </p>
      </div>

      {/* Story Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(story)}
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {story.title}
              </h3>
              <p className="text-gray-700">{story.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStory && (
        <>
          {/* Modal Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeModal}
          ></div>
          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-8 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
                aria-label="Close Modal"
              >
                &times;
              </button>
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                {selectedStory.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {selectedStory.fullContent}
              </p>
            </div>
          </div>
        </>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
    </section>
  );
}

export default Featured;
