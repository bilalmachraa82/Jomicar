import React from 'react';
import TopBar from './components/layout/TopBar';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import FeaturedVehicles from './components/sections/FeaturedVehicles';
import AIChat from './components/ai/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <FeaturedVehicles />
      </main>
      <AIChat />
    </div>
  );
}

export default App;