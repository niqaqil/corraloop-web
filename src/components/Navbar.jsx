import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, ArrowRight, Activity, Trophy, Users, Shield } from 'lucide-react';

export default function Navbar({ onOpenJoin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Loop System', href: '#loop-system' },
    { name: 'Live Challenges', href: '#challenges' },
    { name: 'Interactive Simulator', href: '#simulator' },
    { name: 'Community Feed', href: '#community' },
    { name: 'Crew Impact', href: '#calculator' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0b0f17]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-loopgreen-500 via-white/20 to-corral-500 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo-icon.svg" 
                alt="corraloop mark" 
                className="w-full h-full object-contain rounded-lg p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-white flex items-center">
                corral<span className="text-corral-500">oop</span>
                <span className="ml-1 w-2 h-2 rounded-full bg-loopgreen-400 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                The Movement Network
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-darkbg-card/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenJoin}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Log In
            </button>
            <button
              onClick={onOpenJoin}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-semibold text-sm text-white shadow-glow-coral transition-all duration-300 hover:shadow-glow-combined hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-corral-500 via-corral-400 to-loopgreen-500 transition-all duration-300 group-hover:opacity-90"></div>
              <span className="relative z-10 flex items-center gap-1.5">
                Join the Loop
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenJoin}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-corral-500 text-white"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-darkbg-card border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-darkbg/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJoin(); }}
              className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral"
            >
              Join corraloop Free
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJoin(); }}
              className="w-full py-2.5 text-center text-sm font-medium rounded-xl text-slate-400 hover:text-white hover:bg-white/5"
            >
              Existing Member Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
