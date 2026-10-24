import React, { useState } from 'react';
import { RefreshCw, Zap, Award, Sparkles, Check, ChevronRight, Activity, Flame, Heart, Play } from 'lucide-react';

export default function InteractiveLoopDemo({ onOpenJoin }) {
  const [moveKm, setMoveKm] = useState(8.5);
  const [cardioMinutes, setCardioMinutes] = useState(45);
  const [recoveryScore, setRecoveryScore] = useState(80);

  // Targets
  const targetKm = 10;
  const targetMinutes = 50;
  const targetRecovery = 85;

  const movePercent = Math.min(Math.round((moveKm / targetKm) * 100), 100);
  const cardioPercent = Math.min(Math.round((cardioMinutes / targetMinutes) * 100), 100);
  const recoveryPercent = Math.min(Math.round((recoveryScore / targetRecovery) * 100), 100);

  const allLoopsClosed = movePercent >= 100 && cardioPercent >= 100 && recoveryPercent >= 100;

  // Preset triggers
  const setPreset = (type) => {
    if (type === 'morning') {
      setMoveKm(5.0);
      setCardioMinutes(30);
      setRecoveryScore(65);
    } else if (type === 'endurance') {
      setMoveKm(10.0);
      setCardioMinutes(50);
      setRecoveryScore(90);
    } else if (type === 'rest') {
      setMoveKm(2.5);
      setCardioMinutes(15);
      setRecoveryScore(95);
    }
  };

  const workflowSteps = [
    {
      num: '01',
      title: 'Seamless Tracker Sync',
      tag: 'Garmin • Strava • Apple',
      desc: 'Connect your sports watch or phone in 10 seconds. Corraloop automatically pulls workouts, cadence, and heart rates without manual entry.',
      accent: 'border-corral-500/30 text-corral-400'
    },
    {
      num: '02',
      title: 'Equitable Loop Scoring',
      tag: 'Normalized Effort',
      desc: 'Whether you run a 3-minute kilometer or power-walk with your dog, our dynamic algorithm scores your personal heart-rate threshold fairly.',
      accent: 'border-loopgreen-500/30 text-loopgreen-400'
    },
    {
      num: '03',
      title: 'Squad & Crew Relays',
      tag: 'Community Circles',
      desc: 'Your individual loops feed your squad circle. Cheer on teammates, pass the energy baton, and hit collective team mileage goals together.',
      accent: 'border-corral-500/30 text-corral-400'
    },
    {
      num: '04',
      title: 'Unlock Real Perks',
      tag: 'Badges & Rewards',
      desc: 'Earn verified athletic achievements, access exclusive limited-edition merchandise drops, and unlock partner discounts on performance gear.',
      accent: 'border-loopgreen-500/30 text-loopgreen-400'
    }
  ];

  return (
    <section id="simulator" className="py-24 bg-[#080c14] relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-corral-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-loopgreen-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-loopgreen-500/10 border border-loopgreen-500/20 text-loopgreen-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Interactive Loop Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See How Your Motion <br />
            <span className="gradient-text-brand">Closes The Corraloop Ring</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Slide the sliders below to simulate a training day and observe how individual effort charges both your personal rings and team momentum in real-time.
          </p>
        </div>

        {/* Interactive Simulator Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-darkbg-card/70 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-xl">
          
          {/* Controls: Sliders and Presets */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Presets */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Quick Simulation Presets:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreset('morning')}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                >
                  Morning Run
                </button>
                <button
                  onClick={() => setPreset('endurance')}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-corral-500/20 hover:bg-corral-500/30 text-corral-400 border border-corral-500/30 transition-colors"
                >
                  Century / Sprint Peak
                </button>
                <button
                  onClick={() => setPreset('rest')}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-loopgreen-500/20 hover:bg-loopgreen-500/30 text-loopgreen-400 border border-loopgreen-500/30 transition-colors"
                >
                  Rest Day
                </button>
              </div>
            </div>

            {/* Slider 1: Distance / Move */}
            <div className="bg-darkbg/90 p-4 rounded-2xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-corral-500"></span>
                  Move & Distance Loop
                </span>
                <span className="font-mono text-corral-400 font-bold">
                  {moveKm.toFixed(1)} / {targetKm} km ({movePercent}%)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={moveKm}
                onChange={(e) => setMoveKm(parseFloat(e.target.value))}
                className="w-full accent-corral-500 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>0 km (Warm-up)</span>
                <span>Goal: 10 km</span>
                <span>15 km (Ultra)</span>
              </div>
            </div>

            {/* Slider 2: High Heart Rate / Cardio Minutes */}
            <div className="bg-darkbg/90 p-4 rounded-2xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-loopgreen-400"></span>
                  Cardio & Stamina Loop
                </span>
                <span className="font-mono text-loopgreen-400 font-bold">
                  {cardioMinutes} / {targetMinutes} mins ({cardioPercent}%)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="75"
                step="5"
                value={cardioMinutes}
                onChange={(e) => setCardioMinutes(parseInt(e.target.value))}
                className="w-full accent-loopgreen-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>0 mins</span>
                <span>Target: 50 mins</span>
                <span>75 mins (Max Effort)</span>
              </div>
            </div>

            {/* Slider 3: Recovery / Sleep */}
            <div className="bg-darkbg/90 p-4 rounded-2xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                  Recovery & Balance Loop
                </span>
                <span className="font-mono text-cyan-400 font-bold">
                  {recoveryScore} / {targetRecovery} pts ({recoveryPercent}%)
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                step="5"
                value={recoveryScore}
                onChange={(e) => setRecoveryScore(parseInt(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>Needs Rest (30)</span>
                <span>Optimal (85)</span>
                <span>Prime Recovery (100)</span>
              </div>
            </div>

            {/* Crew Impact Calculation Callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-loopgreen-950/30 to-corral-950/30 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-medium">Crew Momentum Contribution</p>
                <p className="text-lg font-black text-white">
                  +{(moveKm * 18 + cardioMinutes * 4 + recoveryScore * 2).toFixed(0)} <span className="text-xs text-loopgreen-400 font-normal">Loop Fuel Points</span>
                </p>
              </div>
              <button
                onClick={onOpenJoin}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
              >
                Join with Your Crew
              </button>
            </div>

          </div>

          {/* Visualization: 3 Concentric SVG Rings with Celebratory State */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              
              {/* Concentric SVG Rings */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
                {/* Outer Ring: Move (Coral) */}
                <circle cx="100" cy="100" r="82" stroke="#1f293d" strokeWidth="12" fill="transparent" />
                <circle
                  cx="100"
                  cy="100"
                  r="82"
                  stroke="#ff6243"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 82}
                  strokeDashoffset={2 * Math.PI * 82 * (1 - movePercent / 100)}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-300"
                />

                {/* Middle Ring: Cardio (Emerald) */}
                <circle cx="100" cy="100" r="64" stroke="#1f293d" strokeWidth="12" fill="transparent" />
                <circle
                  cx="100"
                  cy="100"
                  r="64"
                  stroke="#10b981"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 64}
                  strokeDashoffset={2 * Math.PI * 64 * (1 - cardioPercent / 100)}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-300"
                />

                {/* Inner Ring: Recovery (Cyan) */}
                <circle cx="100" cy="100" r="46" stroke="#1f293d" strokeWidth="12" fill="transparent" />
                <circle
                  cx="100"
                  cy="100"
                  r="46"
                  stroke="#38bdf8"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 46}
                  strokeDashoffset={2 * Math.PI * 46 * (1 - recoveryPercent / 100)}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-300"
                />
              </svg>

              {/* Center Emblem & Celebration Badge */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-2xl bg-darkbg p-1.5 shadow-2xl border border-white/10 flex items-center justify-center mb-1">
                  <img src="/logo-icon.svg" alt="corraloop" className="w-full h-full object-contain" />
                </div>
                {allLoopsClosed ? (
                  <div className="animate-bounce">
                    <span className="text-xs font-black uppercase text-loopgreen-400 tracking-wider block">
                      🎉 ALL LOOPS CLOSED!
                    </span>
                    <span className="text-xl font-extrabold text-white block">
                      100% Day Complete
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="text-2xl font-black text-white">
                      {Math.round((movePercent + cardioPercent + recoveryPercent) / 3)}%
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Total Daily Loop
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Ring Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-3 h-3 rounded-full bg-corral-500"></span> Move ({movePercent}%)
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-3 h-3 rounded-full bg-loopgreen-500"></span> Cardio ({cardioPercent}%)
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span> Recovery ({recoveryPercent}%)
              </span>
            </div>

            {allLoopsClosed && (
              <div className="mt-4 px-4 py-2 rounded-full bg-loopgreen-500/20 border border-loopgreen-500/40 text-loopgreen-300 text-xs font-bold animate-pulse">
                ⚡ Crew Streak +1 Day • +250 XP Awarded to your Club!
              </div>
            )}

          </div>

        </div>

        {/* The 4-Stage Cyclical Workflow Showcase */}
        <div id="loop-system" className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-corral-400">
              The Engine Behind The Community
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              The Corraloop Continuous Cycle
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              How everyday movement transforms into collaborative fitness momentum in four simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="relative bg-darkbg-card/60 p-6 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-white transition-colors">
                      {step.num}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${step.accent}`}>
                      {step.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-slate-400 group-hover:text-corral-400 transition-colors">
                  <span>Explore Mechanics</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
