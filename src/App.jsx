import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';

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
      {showSplash ? <SplashScreen /> : <Home />}
    </>
  );
}

export default App;