import React from 'react';

const SoccerPage = () => {
  // Sample blog posts for soccer-related content.
  // In a real app, you might fetch these from an API or CMS.
  const posts = [
    {
        "title": "How to Fake an Injury Like a Pro",
        "excerpt": "Master the art of dramatic dives and over-the-top flops that will leave referees questioning reality.",
        "image": "https://s.yimg.com/ny/api/res/1.2/GG9OPDsL3ZBxmwnkcDzkoQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/c7cbf600-6dbe-11ed-bfb3-a51888aacf46", 
        "date": "2023-09-22"
      },
      {
        "title": "Goal Celebrations That Went Horribly Wrong",
        "excerpt": "From accidental shirt removals to full-on teammate collisions, here are the celebrations that made history—for all the wrong reasons.",
        "image": "https://talksport.com/wp-content/uploads/sites/5/2011/07/plgoldfunny3.jpg?strip=all&w=700", 
        "date": "2023-09-18"
      },
      {
        "title": "The Wildest Red Cards Ever Given",
        "excerpt": "A deep dive into the most absurd reasons players have been sent off the field—yes, including one for excessive farting.",
        "image": "https://jobsinfootball.mysmartjobboard.com/files/userfiles/red_card_soccer.jpg", 
        "date": "2023-09-12"
      },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Area */}
      <header
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/public/soccerHERO.webp')", // Suggestion: A high-resolution image of a packed stadium, a lush soccer field, or an iconic moment in soccer.
        }}
      >
        {/* Overlay to darken the hero image for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Soccer</h1>
          <p className="text-white mt-4 text-lg md:text-2xl">
          90 Minutes of Flopping, Yelling at Refs, and the Occasional Goal.
          </p>
        </div>
      </header>

      {/* Main content: Collection of blog posts */}
      <main className="py-12 px-4 md:px-12">
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  Read More
                </a>
                <p className="text-gray-500 text-sm mt-2">{post.date}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default SoccerPage;