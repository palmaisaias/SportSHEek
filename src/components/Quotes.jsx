import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Quotes() {
  const quotes = [
    {
      id: 1,
      quote: "Bro, it’s all about the grind. If you’re not outworking the other guy, you don’t deserve to be on the field.",
      explanation:
        "He played JV football in high school and now applies this “grindset” to his fantasy league like he’s Bill Belichick.",
    },
    {
      id: 2,
      quote: "LeBron’s great and all, but he’ll never be Jordan. Different era, bro. MJ had that killer instinct.",
      explanation:
        "He’s never watched an entire 90s Bulls game, but he will die on this hill.",
    },
    {
      id: 3,
      quote: "Listen, if I was 6’5”, I’d be in the league right now.",
      explanation:
        "He was average at high school intramural basketball but truly believes his genetics are the only thing holding him back from an NBA career.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle through quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          Bro, trust me...
        </h2>
        <div className="relative h-64 overflow-hidden">
          {quotes.map((quoteObj, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={quoteObj.id}
                className={`absolute inset-0 flex flex-col justify-center items-center 
                  transition-all duration-1000 transform
                  ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              >
                <FaQuoteLeft className="text-gray-300 mb-4 w-8 h-8" />
                <p className="text-xl font-bold text-gray-700 mb-2 text-center px-4">
                  {quoteObj.quote}
                </p>
                <p className="text-sm italic text-gray-500 text-center px-4">
                  (Translation: {quoteObj.explanation})
                </p>
                <FaQuoteRight className="text-gray-300 mt-4 w-8 h-8" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Quotes;