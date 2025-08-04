import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Team from './components/Team';
import Highlights from './components/Highlights';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <Team />
      <Highlights />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;