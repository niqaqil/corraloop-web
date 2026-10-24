import React, { useState } from 'react';
import { Navigation, MapPin, CheckCircle2, AlertCircle, Clock, ShieldCheck, Sparkles, Compass } from 'lucide-react';

export default function CheckinVisualizer({ onOpenJoin }) {
  const [distanceM, setDistanceM] = useState(42);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const maxAllowedDistance = 100; // 100m constraint from LocationHelper.kt
  const isWithinZone = distanceM <= maxAllowedDistance;

  // Preset triggers
  const setPreset = (dist) => {
    setDistanceM(dist);
    setIsCheckedIn(false);
  };

  return (
    <section id="checkin-radar" className="py-24 bg-[#080c14] relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-corral-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-loopgreen-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-loopgreen-500/10 border border-loopgreen-500/20 text-loopgreen-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Interactive Proximity Radar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How The 100m <br />
            <span className="gradient-text-brand">Check-In Zone Works</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Corraloop verifies community participation in real life. When you arrive at the meeting spot, a single-shot GPS check validates your proximity within 100 meters.
          </p>
        </div>

        {/* Interactive Radar Visualizer Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-darkbg-card/70 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-xl">
          
          {/* Controls: Distance Slider & Presets */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Presets */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Test Distance Presets:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreset(25)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    distanceM === 25 ? 'bg-loopgreen-500 text-white' : 'bg-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  At Arch (25m)
                </button>
                <button
                  onClick={() => setPreset(80)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    distanceM === 80 ? 'bg-amber-500 text-white' : 'bg-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  Nearby (80m)
                </button>
                <button
                  onClick={() => setPreset(160)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    distanceM === 160 ? 'bg-corral-500 text-white' : 'bg-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  Too Far (160m)
                </button>
              </div>
            </div>

            {/* Slider: Distance to Meeting Point */}
            <div className="bg-darkbg/90 p-5 rounded-2xl border border-white/5 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-white flex items-center gap-2">
                  <Compass className="w-4 h-4 text-loopgreen-400" />
                  Your Distance to Meeting Spot:
                </span>
                <span className={`font-mono text-base font-bold ${isWithinZone ? 'text-loopgreen-400' : 'text-corral-400'}`}>
                  {distanceM} meters {isWithinZone ? '(Inside Zone)' : '(Outside Zone)'}
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={distanceM}
                onChange={(e) => {
                  setDistanceM(parseInt(e.target.value));
                  setIsCheckedIn(false);
                }}
                className={`w-full cursor-pointer h-2.5 rounded-lg appearance-none ${
                  isWithinZone ? 'accent-loopgreen-400 bg-slate-800' : 'accent-corral-500 bg-slate-800'
                }`}
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>0m (Meeting Pin)</span>
                <span className="text-loopgreen-400 font-bold">100m Perimeter Limit</span>
                <span>250m (Too Far)</span>
              </div>
            </div>

            {/* Live Verification Status Card */}
            <div className={`p-4 rounded-2xl border transition-all ${
              isWithinZone 
                ? 'bg-emerald-950/30 border-emerald-500/40' 
                : 'bg-rose-950/30 border-rose-500/40'
            }`}>
              <div className="flex items-start gap-3">
                {isWithinZone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isWithinZone 
                      ? 'Proximity Verified: Ready to Check In' 
                      : 'Outside Check-in Perimeter'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isWithinZone
                      ? `You are ${distanceM}m away from Ferry Building Plaza (within the 100m boundary). Single-shot GPS accuracy: ±12m.`
                      : `You are ${distanceM}m away. Move closer to within 100 meters of the meeting point to validate your attendance.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Checkin Button */}
            <button
              onClick={() => {
                if (isWithinZone) setIsCheckedIn(!isCheckedIn);
              }}
              disabled={!isWithinZone}
              className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                !isWithinZone
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'
                  : isCheckedIn
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-950/40'
                  : 'bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral hover:scale-[1.01]'
              }`}
            >
              {isCheckedIn ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Attendee! Run Streak +1 Logged</span>
                </>
              ) : (
                <>
                  <Navigation className="w-4 h-4" />
                  <span>{isWithinZone ? 'Confirm Physical Check-In' : 'Move Closer to Check In'}</span>
                </>
              )}
            </button>

          </div>

          {/* Radar Visualization: SVG Pulse Radar matching MapRadarView.kt */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
              
              {/* Radar Graphic */}
              <svg className="w-full h-full" viewBox="0 0 240 240">
                {/* Dark circular field */}
                <circle cx="120" cy="120" r="110" fill="#0c121d" stroke="#1f293d" strokeWidth="1" />
                
                {/* 200m Ring */}
                <circle cx="120" cy="120" r="95" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* 100m Perimeter Zone (The Green/Coral boundary) */}
                <circle 
                  cx="120" 
                  cy="120" 
                  r="60" 
                  fill={isWithinZone ? "rgba(16, 185, 129, 0.08)" : "rgba(255, 98, 67, 0.05)"} 
                  stroke={isWithinZone ? "#10b981" : "#ff6243"} 
                  strokeWidth="2" 
                />

                {/* Animated Pulsating Radar Circle */}
                <circle
                  cx="120"
                  cy="120"
                  r="60"
                  fill="none"
                  stroke={isWithinZone ? "#10b981" : "#ff6243"}
                  strokeWidth="1.5"
                  className="animate-ping opacity-40"
                  style={{ transformOrigin: 'center' }}
                />

                {/* Center Pin: Meeting Point */}
                <circle cx="120" cy="120" r="8" fill="#ff6243" />
                <circle cx="120" cy="120" r="3" fill="#ffffff" />

                {/* Runner Position Marker calculated from distanceM */}
                {(() => {
                  // Map distance (0 to 250m) to SVG radius (0 to 110px). 100m = 60px radius.
                  const runnerRadius = Math.min((distanceM / 100) * 60, 105);
                  const angleRad = Math.PI / 4; // 45 degree angle for visual balance
                  const runnerX = 120 + runnerRadius * Math.cos(angleRad);
                  const runnerY = 120 - runnerRadius * Math.sin(angleRad);
                  return (
                    <g>
                      {/* Connecting guideline */}
                      <line 
                        x1="120" 
                        y1="120" 
                        x2={runnerX} 
                        y2={runnerY} 
                        stroke={isWithinZone ? "#10b981" : "#ff6243"} 
                        strokeWidth="1.5" 
                        strokeDasharray="2 2"
                      />
                      {/* Runner pulse */}
                      <circle cx={runnerX} cy={runnerY} r="7" fill={isWithinZone ? "#10b981" : "#ff6243"} />
                      <circle cx={runnerX} cy={runnerY} r="3" fill="#ffffff" />
                    </g>
                  );
                })()}
              </svg>

              {/* Center Labels */}
              <div className="absolute top-4 left-6 bg-darkbg/90 border border-white/10 px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300">
                📍 Ferry Building Plaza
              </div>
              <div className="absolute bottom-4 right-6 bg-darkbg/90 border border-white/10 px-2.5 py-1 rounded-lg text-[10px] font-bold text-loopgreen-400">
                100m Perimeter Zone
              </div>

            </div>

            {/* Radar Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs font-semibold">
              <span className="flex items-center gap-2 text-slate-300">
                <span className="w-3 h-3 rounded-full bg-corral-500"></span> Meeting Point
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <span className="w-3 h-3 rounded-full bg-loopgreen-500"></span> 100m Check-in Zone
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <span className="w-3 h-3 rounded-full bg-white"></span> Your Position
              </span>
            </div>

          </div>

        </div>

        {/* 3 Foundational Pillars of Corraloop Architecture */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-darkbg-card/60 p-6 rounded-3xl border border-white/5 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-xl bg-corral-500/10 text-corral-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Single-Shot GPS Check</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Never conducts continuous background location tracking. Obtains location once when you click check-in, preserving device battery and user privacy.
            </p>
          </div>

          <div className="bg-darkbg-card/60 p-6 rounded-3xl border border-white/5 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-xl bg-loopgreen-500/10 text-loopgreen-400 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Timed Check-in Window</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Check-in opens 30 minutes before the run starts and closes shortly after departure. Ensures runners actually gather together before setting off.
            </p>
          </div>

          <div className="bg-darkbg-card/60 p-6 rounded-3xl border border-white/5 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Tamper-Proof Run Streaks</h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Streaks are earned through real-world participation. Validated GPS proximity and organizer verification guarantee honest, earned community milestones.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
