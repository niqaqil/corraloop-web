import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CommunitiesSection from './components/CommunitiesSection';
import CheckinVisualizer from './components/CheckinVisualizer';
import RunnerStatsShowcase from './components/RunnerStatsShowcase';
import CommunityFeed from './components/CommunityFeed';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const handleOpenJoin = () => setIsJoinOpen(true);
  const handleCloseJoin = () => setIsJoinOpen(false);

  const scrollToRadar = () => {
    const el = document.getElementById('checkin-radar');
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
          onScrollToRadar={scrollToRadar} 
        />
        
        <CommunitiesSection 
          onOpenJoin={handleOpenJoin} 
        />

        <CheckinVisualizer 
          onOpenJoin={handleOpenJoin} 
        />

        <RunnerStatsShowcase 
          onOpenJoin={handleOpenJoin} 
        />

        <CommunityFeed 
          onOpenJoin={handleOpenJoin} 
        />
      </main>

      {/* Footer */}
      <Footer onOpenJoin={handleOpenJoin} />

      {/* Interactive Join / Athlete Modal */}
      <JoinModal 
        isOpen={isJoinOpen} 
        onClose={handleCloseJoin} 
      />
    </div>
  );
}
