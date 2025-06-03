import React, { useState } from 'react';

function Featured() {
  // Dummy data for stories
const stories = [
  {
    id: 1,
    title: 'Football Fiasco: When Chaos Looked Like Strategy',
    image: 'https://images.unsplash.com/photo-1606788075763-0b27dcbb48dc',
    shortDescription:
      'A football game so dramatic it could’ve been written by Shonda Rhimes.',
    fullContent:
      'Okay, imagine this: two football teams (both thinking they’re God’s gift to turf) go at it in a game that had more plot twists than a telenovela. We’re talking early goals, last-minute scrambles, and some truly unhinged decisions that had fans screaming into their nachos. Every time I looked up from pretending to work, someone was yelling about a fumble, a flag, or “WHAT THE HELL WAS THAT PLAY?!” Honestly, it felt like a Bravo reunion special with more concussions. Iconic.'
  },
  {
    id: 2,
    title: 'Basketball Championship or a Dunk-Fueled Soap Opera?',
    image: 'https://images.unsplash.com/photo-1551754653-51a94e1d3b9d',
    shortDescription:
      'Think: high-flying drama with a side of sweaty suspense and questionable fouls.',
    fullContent:
      'So apparently this basketball game was the *championship*—aka the NBA’s version of a season finale. There were dunks that defied gravity (and maybe physics?), fouls that had people side-eyeing refs harder than Dave when I eat his lunch from the fridge, and one buzzer-beater that legit made a grown man cry in the breakroom. It was tense, it was loud, and honestly, it was hotter than my last Hinge date. No notes.'
  },
  {
    id: 3,
    title: 'Marathon Madness: 26.2 Miles of WTF Endurance',
    image: 'https://images.unsplash.com/photo-1520975918311-258e8bbd3c5d',
    shortDescription:
      'Thousands ran. I watched from my couch with a donut. Zero regrets.',
    fullContent:
      'I don’t know what possesses someone to run for *hours* straight unless they’re being chased or trying to avoid their ex, but hey—these folks did it. Rain? Hills? Cramps? Irrelevant. They just kept going, like the Energizer Bunny with shin splints. Some collapsed, some cried, and one guy proposed at the finish line (barf). It was emotional, inspirational, and made me realize my Fitbit thinks I’m dead. Good for them, though!'
  },
  {
    id: 4,
    title: 'Tennis Tantrums & Underdog Glory: The Open Breakdown',
    image: 'https://images.unsplash.com/photo-1593113934981-d0b87e5a9b8c',
    shortDescription:
      'Rackets were smashed, legends were humbled, and one newbie nearly broke the internet.',
    fullContent:
      'Picture it: fancy tennis outfits, rich people clapping politely, and then—BOOM—chaos. The Tennis Open served up (pun intended, fight me) a glorious mess of upsets where baby-faced newbies beat the veterans like it was a Disney movie. One poor dude chucked his racket into the crowd (hi, anger issues), and another cried in the post-game interview. Honestly, it was a better emotional rollercoaster than The Bachelor finale, minus the hot tubs.'
  },
  {
    id: 5,
    title: "49ers' Offseason: A Soap Opera With Shoulder Pads",
    image: 'https://a.espncdn.com/photo/2024/1213/r1427354_1296x518_5-2.jpg',
    shortDescription:
      "The 49ers are spiraling into chaos and it’s giving ‘corporate dumpster fire’ energy.",
    fullContent:
      "Let’s talk about the 49ers, who are out here doing the NFL version of a public breakup on Instagram Live. Deebo Samuel is like “I’m done,” Brock Purdy wants a salary bump big enough to buy a tech startup, and John Lynch—aka team dad—is scrambling to keep the whole thing from imploding. Injuries? Check. Drama? Double check. If they don’t pull it together soon, we’re gonna be watching them on Hard Knocks crying into their protein shakes. Just saying: maybe hire a therapist before a new linebacker?"
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
