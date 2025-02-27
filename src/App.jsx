import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import SoccerPage from './pages/Soccer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide SplashScreen after 4 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soccer" element={<SoccerPage />} />
            {/* Add additional routes for other sports categories as needed */}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;