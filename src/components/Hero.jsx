import React, { useState } from 'react';
import { Play, Flame, Zap, ArrowRight, Activity, Heart, Compass, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Hero({ onOpenJoin, onOpenSimulator }) {
  const [activeSport, setActiveSport] = useState('running');

  const sportMetrics = {
    running: {
      title: 'Morning Coastal Sprint',
      athlete: 'Elena Vance',
      distance: '10.4 km',
      pace: '4:15 /km',
      bpm: '158 bpm',
      energy: '682 kcal',
      loopProgress: 88,
      streak: '19 days',
      loopColor: '#ff6243',
      subColor: '#10b981',
      tag: 'Speed Loop'
    },
    cycling: {
      title: 'Highlands Ridge Century',
      athlete: 'Marcus Thorne',
      distance: '62.8 km',
      pace: '31.2 km/h',
      bpm: '144 bpm',
      energy: '1,420 kcal',
      loopProgress: 94,
      streak: '24 days',
      loopColor: '#10b981',
      subColor: '#ff6243',
      tag: 'Endurance Loop'
    },
    recovery: {
      title: 'Flow & Breath Restoration',
      athlete: 'Kenji Sato',
      distance: '45 mins',
      pace: 'HRV 88ms',
      bpm: '72 bpm',
      energy: '210 kcal',
      loopProgress: 100,
      streak: '12 days',
      loopColor: '#34d399',
      subColor: '#38bdf8',
      tag: 'Recovery Ring'
    }
  };

  const current = sportMetrics[activeSport];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background glowing orbs matching brand colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-loopgreen-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-corral-500/12 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 left-10 w-[500px] h-[500px] bg-loopgreen-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-darkbg-card border border-white/10 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-corral-500 animate-ping"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                ⚡ The Next Generation Sports & Fitness Community
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Turn Solo Sweat <br className="hidden sm:inline" />
              Into <span className="gradient-text-brand">Collective Momentum.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">corraloop</strong> unites runners, cyclists, and fitness enthusiasts into shared energy loops. Sync your trackers, close your daily rings, and watch solo miles fuel collective crew victories.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenJoin}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-corral-500 to-corral-600 hover:from-corral-400 hover:to-corral-500 shadow-glow-coral hover:shadow-glow-combined transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group"
              >
                <span>Claim Your Spot in the Loop</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onOpenSimulator}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-base text-slate-200 hover:text-white bg-darkbg-card/90 hover:bg-darkbg-subtle border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:border-loopgreen-500/40"
              >
                <Activity className="w-5 h-5 text-loopgreen-400" />
                <span>Try Loop Simulator</span>
              </button>
            </div>

            {/* Social Proof / Stats */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">48.6K<span className="text-corral-500">+</span></div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Active Loopers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">1.4M<span className="text-loopgreen-400">+</span></div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Loops Closed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">99.2%</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Crew Retention</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Modern Card & Live Loop Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer card shell with frosted glass styling */}
            <div className="relative w-full max-w-md rounded-3xl p-6 sm:p-7 glass-panel border border-white/15 shadow-2xl overflow-hidden group">
              
              {/* Background accent glow inside card */}
              <div 
                className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-30 transition-colors duration-500 pointer-events-none"
                style={{ backgroundColor: current.loopColor }}
              ></div>

              {/* Card Header: Sport Switcher Tabs */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-1.5 p-1 bg-darkbg/90 rounded-xl border border-white/5">
                  <button
                    onClick={() => setActiveSport('running')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeSport === 'running' 
                        ? 'bg-corral-500 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Run
                  </button>
                  <button
                    onClick={() => setActiveSport('cycling')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeSport === 'cycling' 
                        ? 'bg-loopgreen-500 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Ride
                  </button>
                  <button
                    onClick={() => setActiveSport('recovery')}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      activeSport === 'recovery' 
                        ? 'bg-emerald-600 text-white shadow-sm' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Recover
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-loopgreen-400 animate-pulse"></span>
                  <span className="text-xs font-mono text-loopgreen-400 font-semibold uppercase tracking-wider">
                    Live Feed
                  </span>
                </div>
              </div>

              {/* Loop Progress Visualizer - Circular Track with Emblem in center */}
              <div className="py-6 flex flex-col items-center justify-center relative">
                <div className="relative w-52 h-52 flex items-center justify-center">
                  
                  {/* SVG Animated Circular Gauge */}
                  <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
                    {/* Background Ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      className="text-slate-800"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    {/* Active Progress Ring */}
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      stroke={current.loopColor}
                      strokeWidth="10"
                      strokeDasharray={2 * Math.PI * 48}
                      strokeDashoffset={2 * Math.PI * 48 * (1 - current.loopProgress / 100)}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>

                  {/* Centered Loop Hub with Logo Emblem */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-darkbg p-2 shadow-inner border border-white/10 flex items-center justify-center mb-1">
                      <img 
                        src="/logo-icon.png" 
                        alt="corraloop icon" 
                        className="w-full h-full object-contain filter drop-shadow animate-pulseSlow"
                      />
                    </div>
                    <span className="text-2xl font-black text-white tracking-tight">
                      {current.loopProgress}%
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Loop Closed
                    </span>
                  </div>

                </div>

                {/* Session Meta */}
                <div className="text-center mt-3">
                  <h3 className="text-lg font-bold text-white">{current.title}</h3>
                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 mt-0.5">
                    <span>{current.athlete}</span>
                    <span>•</span>
                    <span className="text-corral-400 font-medium">🔥 {current.streak} Streak</span>
                  </p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
                <div className="bg-darkbg/80 p-3 rounded-2xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Distance</span>
                  <span className="text-base font-extrabold text-white mt-0.5 block">{current.distance}</span>
                </div>
                <div className="bg-darkbg/80 p-3 rounded-2xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Pace / Speed</span>
                  <span className="text-base font-extrabold text-loopgreen-400 mt-0.5 block">{current.pace}</span>
                </div>
                <div className="bg-darkbg/80 p-3 rounded-2xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Avg Heart</span>
                  <span className="text-base font-extrabold text-corral-400 mt-0.5 block">{current.bpm}</span>
                </div>
              </div>

              {/* Bottom Crew Contribution Banner */}
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-loopgreen-950/40 via-darkbg/60 to-corral-950/40 border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <span className="w-5 h-5 rounded-full bg-corral-500 border border-darkbg text-[9px] flex items-center justify-center font-bold">JD</span>
                    <span className="w-5 h-5 rounded-full bg-loopgreen-500 border border-darkbg text-[9px] flex items-center justify-center font-bold">AK</span>
                    <span className="w-5 h-5 rounded-full bg-sky-500 border border-darkbg text-[9px] flex items-center justify-center font-bold">+6</span>
                  </div>
                  <span className="text-slate-300">Pacific Striders Crew</span>
                </div>
                <span className="text-loopgreen-400 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> +28 pts
                </span>
              </div>

            </div>

            {/* Decorative Floating Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-8 p-3 rounded-2xl glass-panel border border-white/10 shadow-xl items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-corral-500/20 text-corral-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Global Relays</p>
                <p className="text-[10px] text-slate-400">Tokyo vs Berlin Loop Live</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-6 p-3 rounded-2xl glass-panel border border-white/10 shadow-xl items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-9 h-9 rounded-xl bg-loopgreen-500/20 text-loopgreen-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Instant Sync</p>
                <p className="text-[10px] text-slate-400">Garmin • Strava • Apple</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
