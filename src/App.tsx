import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import EventsPage from './pages/EventsPage';
import Team from './components/Team';
import Highlights from './components/Highlights';
import CTA from './components/CTA';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Team />
      <Highlights />
      <CTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/pitch" element={<EventsPage initialTab="pitch" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;