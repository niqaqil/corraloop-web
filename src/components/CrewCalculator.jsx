import React, { useState } from 'react';
import { Users, Zap, Shield, ArrowRight, Award } from 'lucide-react';

export default function CrewCalculator({ onOpenJoin }) {
  const [weeklySessions, setWeeklySessions] = useState(4);
  const [crewSize, setCrewSize] = useState(6);
  const [sportType, setSportType] = useState('running');

  const sportMultiplier = {
    running: 25,
    cycling: 15,
    swimming: 35,
    crossfit: 28,
  };

  const calculatedPoints = Math.round(weeklySessions * 8.5 * sportMultiplier[sportType]);
  const crewTotal = calculatedPoints * crewSize;
  const loopCompletionEstimate = Math.min(Math.round((crewTotal / 3500) * 100), 100);

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-[#070b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Input controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-corral-400">
                  Interactive Impact Estimator
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">
                  How Much Power Will You Bring To Your Crew?
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Corraloop pools team workouts into collective weekly energy rings. Adjust your workout frequency and squad size below to preview your team's loop velocity.
                </p>
              </div>

              {/* Sport Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Primary Movement Discipline:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'running', name: 'Running' },
                    { id: 'cycling', name: 'Cycling' },
                    { id: 'swimming', name: 'Swimming' },
                    { id: 'crossfit', name: 'HIIT / Gym' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSportType(s.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                        sportType === s.id
                          ? 'bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-md'
                          : 'bg-darkbg/90 hover:bg-darkbg text-slate-300 border border-white/5'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Sessions per week */}
              <div className="space-y-2 bg-darkbg/70 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-300">Your Weekly Workouts:</span>
                  <span className="font-mono text-corral-400 font-bold">{weeklySessions} sessions / week</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={weeklySessions}
                  onChange={(e) => setWeeklySessions(parseInt(e.target.value))}
                  className="w-full accent-corral-500 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
                />
              </div>

              {/* Slider 2: Crew size */}
              <div className="space-y-2 bg-darkbg/70 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-300">Crew / Squad Size:</span>
                  <span className="font-mono text-loopgreen-400 font-bold">{crewSize} athletes</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  value={crewSize}
                  onChange={(e) => setCrewSize(parseInt(e.target.value))}
                  className="w-full accent-loopgreen-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
                />
              </div>
            </div>

            {/* Right: Output card */}
            <div className="lg:col-span-5 bg-darkbg p-6 sm:p-8 rounded-2xl border border-white/10 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-corral-500 to-loopgreen-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-darkbg rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-amber-400" />
                </div>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Estimated Weekly Crew Fuel
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                  {crewTotal.toLocaleString()} <span className="text-sm font-normal text-loopgreen-400">pts</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Your individual share: <strong className="text-corral-400 font-bold">{calculatedPoints.toLocaleString()} pts/week</strong>
                </p>
              </div>

              <div className="space-y-2 bg-darkbg-card p-4 rounded-xl border border-white/5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-400">Squad Weekly Loop Progress</span>
                  <span className="text-loopgreen-400">{loopCompletionEstimate}% Closed</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-corral-500 via-amber-400 to-loopgreen-500 transition-all duration-300"
                    style={{ width: `${loopCompletionEstimate}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={onOpenJoin}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Assemble Your Squad</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
