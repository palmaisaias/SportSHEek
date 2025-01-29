import React from 'react';
import Slider from 'react-slick';
import { FaExternalLinkAlt } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Featured() {
  const posts = [
    {
      title: 'Chiefs Make It to the Super Bowl for the Third Straight Time',
      description: 'The Chiefs are in the Super Bowl again. It’s like they’ve been shoved into the finals one too many times, and some folks swear the refs are their personal cheerleaders.',
      link: '#',
      tags: ['Super Bowl', 'Chiefs', 'Controversy'],
    },
    {
      title: 'LeBron James Breaks NBA All-Time Scoring Record',
      description: 'LeBron just smashed the scoring record. It’s like binge-watching a marathon of your least favorite show and expecting praise, but all you get is keyboard warriors arguing MJ is still the king.',
      link: '#',
      tags: ['NBA', 'LeBron', 'History'],
    },
    {
      title: 'Tom Brady Retires... Again',
      description: 'Tom Brady retires again. It’s like that flaky friend who breaks up with you every week but keeps showing up at your door with flowers.',
      link: '#',
      tags: ['NFL', 'Brady', 'Retirement'],
    },
    {
      title: 'Messi vs. Ronaldo: Who’s the GOAT?',
      description: 'Messi vs Ronaldo: It’s like a never-ending fight between two jerks, each convinced they’re the best and ruining soccer debates everywhere.',
      link: '#',
      tags: ['Soccer', 'GOAT Debate', 'Messi', 'Ronaldo'],
    },
    {
      title: 'Taylor Swift Attends NFL Game—Causes Chaos',
      description: 'Taylor Swift showed up at an NFL game and unleashed total chaos. It was like a pop diva crashing a mosh pit—absolute pandemonium.',
      link: '#',
      tags: ['NFL', 'Taylor Swift', 'Pop Culture'],
    },
    {
      title: 'Aaron Rodgers Gets Injured Four Snaps Into His Jets Career',
      description: 'Aaron Rodgers gets hurt just after joining the Jets. It’s like buying a fancy car and it breaks down on day one—total crap move.',
      link: '#',
      tags: ['NFL', 'Aaron Rodgers', 'Injury'],
    },
    {
      title: 'World Cup Drama: The Handball That Shook the Game',
      description: 'The World Cup had a handball that flipped everything. It’s like someone cheating in Monopoly and everyone went ballistic.',
      link: '#',
      tags: ['Soccer', 'World Cup', 'Drama'],
    },
    {
      title: 'MLB’s Pitch Clock: Saving Time or Ruining Tradition?',
      description: 'MLB introduced a pitch clock, and fans are losing their minds. It’s like trying to speed-run a marathon—ruining the slow, boring tradition.',
      link: '#',
      tags: ['MLB', 'Baseball', 'Rule Changes'],
    },
    {
      title: 'Serena Williams Retires as the GOAT of Tennis',
      description: 'Serena retires as the GOAT. It’s like the badass queen leaving her kingdom but still being legendary as hell.',
      link: '#',
      tags: ['Tennis', 'Serena Williams', 'Legend'],
    },
    {
      title: 'The NHL Playoffs: A Game of Beards and Chaos',
      description: 'NHL Playoffs: 20 dudes on ice throwing fists and looking like frat boys on steroids. Total mayhem.',
      link: '#',
      tags: ['NHL', 'Playoffs', 'Hockey'],
    },
  ];
  
  

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 font-sans relative animate-fadeIn"
    >
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 animate-slideInUp">
          Featured Blog Posts
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn">
        Dive into sports stories you can actually understand—and maybe even laugh about.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...sliderSettings}>
          {posts.map((post, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between animate-scaleUp">
                {/* Post Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-4">
                  {post.description}
                </p>

                {/* Tag List */}
                <ul className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Read More Link */}
                <div>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-pink-500 hover:text-pink-700 hover:underline transition-colors"
                  >
                    Read More <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulseOnce"></div>
    </section>
  );
}

export default Featured;