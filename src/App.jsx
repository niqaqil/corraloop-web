import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveLoopDemo from './components/InteractiveLoopDemo';
import ChallengesSection from './components/ChallengesSection';
import CrewCalculator from './components/CrewCalculator';
import CommunityFeed from './components/CommunityFeed';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const handleOpenJoin = () => setIsJoinOpen(true);
  const handleCloseJoin = () => setIsJoinOpen(false);

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-corral-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenJoin={handleOpenJoin} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero 
          onOpenJoin={handleOpenJoin} 
          onOpenSimulator={scrollToSimulator} 
        />
        
        <InteractiveLoopDemo 
          onOpenJoin={handleOpenJoin} 
        />

        <ChallengesSection 
          onOpenJoin={handleOpenJoin} 
        />

        <CrewCalculator 
          onOpenJoin={handleOpenJoin} 
        />

        <CommunityFeed 
          onOpenJoin={handleOpenJoin} 
        />
      </main>

      {/* Footer */}
      <Footer onOpenJoin={handleOpenJoin} />

      {/* Interactive Modal */}
      <JoinModal 
        isOpen={isJoinOpen} 
        onClose={handleCloseJoin} 
      />
    </div>
  );
}
