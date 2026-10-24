import React, { useState } from 'react';
import { ArrowRight, Github, Twitter, Instagram, Heart, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenJoin }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-[#070a10] border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-loopgreen-500 to-corral-500 shadow-md">
                <img 
                  src="/logo-icon.svg" 
                  alt="corraloop" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                corral<span className="text-corral-500">oop</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              The social movement network bridging personal athletic achievement with collective crew momentum. Close your loops, fuel your squad, elevate your health.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav col 1 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Ecosystem</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#loop-system" className="hover:text-white transition-colors">The Loop Algorithm</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Live Challenges</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Loop Simulator</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Global Leaderboards</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Crew Momentum Calculator</a></li>
            </ul>
          </div>

          {/* Nav col 2 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Integrations</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Strava API Sync</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garmin Connect SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apple HealthKit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wahoo & Polar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developer Portal</a></li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Stay in the Loop</h4>
            <p className="text-xs text-slate-400 mb-3">
              Weekly curated challenges, local club meetups, and fitness technology drops.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-loopgreen-500/10 border border-loopgreen-500/30 text-loopgreen-400 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You're in the loop! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="athlete@movement.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-darkbg-card border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-corral-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-corral-500 hover:bg-corral-600 text-white text-xs font-bold transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} corraloop. All rights reserved. Designed for active communities everywhere.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security & Health Data</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
