import React, { useState } from 'react';
import { Route, Calendar, CheckCircle2, Flame, MapPin, Award, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RunnerStatsShowcase({ onOpenJoin }) {
  const [targetStreak, setTargetStreak] = useState(6);

  const pastRuns = [
    {
      id: 1,
      title: 'Taman Tasik Kelana Jaya 5K',
      community: 'Kelana Jaya Run Club',
      city: 'Petaling Jaya, Selangor',
      distance: '5.0 km',
      date: 'Yesterday, 7:00 AM MYT',
      accuracy: 'Verified 18m from Taman Tasik Kelana Jaya',
      badge: 'Verified Attendee'
    },
    {
      id: 2,
      title: 'Bukit Gasing Easy 10K',
      community: 'Kelana Jaya Run Club',
      city: 'Petaling Jaya, Selangor',
      distance: '10.0 km',
      date: 'Last Saturday, 7:00 AM MYT',
      accuracy: 'Verified 24m from Bukit Gasing',
      badge: 'Verified Attendee'
    },
    {
      id: 3,
      title: 'Bukit Kiara Hill Repeats',
      community: 'Kelana Jaya Run Club',
      city: 'Petaling Jaya, Selangor',
      distance: '6.0 km',
      date: '2 weeks ago, 6:30 PM MYT',
      accuracy: 'Verified 35m from Bukit Kiara trailhead',
      badge: 'Verified Attendee'
    }
  ];

  return (
    <section id="runner-stats" className="py-24 relative overflow-hidden bg-[#070b12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl p-8 sm:p-12 glass-panel border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-corral-400">
              Personal Runner Profiles
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1">
              Track Your Verified Group Runs & Streaks
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Every group run you check into builds your verified personal attendance record. Celebrate showing up and build streaks with your crew.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 3 Metric Cards (Models MetricCard in Compose) */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="grid grid-cols-3 gap-3">
                {/* Total Runs Card */}
                <div className="bg-darkbg/90 p-4 rounded-2xl border border-white/5 text-center">
                  <div className="w-9 h-9 mx-auto rounded-full bg-corral-500/15 text-corral-400 flex items-center justify-center mb-2">
                    <span className="text-sm font-black">🏃</span>
                  </div>
                  <div className="text-2xl font-black text-white">12</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Total Runs</div>
                </div>

                {/* Total Distance Card */}
                <div className="bg-darkbg/90 p-4 rounded-2xl border border-white/5 text-center">
                  <div className="w-9 h-9 mx-auto rounded-full bg-loopgreen-500/15 text-loopgreen-400 flex items-center justify-center mb-2">
                    <Route className="w-4 h-4 text-loopgreen-400" />
                  </div>
                  <div className="text-2xl font-black text-white">68.0</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Total Km</div>
                </div>

                {/* Run Streak Card */}
                <div className="bg-darkbg/90 p-4 rounded-2xl border border-white/5 text-center">
                  <div className="w-9 h-9 mx-auto rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center mb-2">
                    <Flame className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-amber-400">5</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Run Streak</div>
                </div>
              </div>

              {/* Streak Consistency Interactive Slider */}
              <div className="bg-darkbg/80 p-5 rounded-2xl border border-white/5 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Target Community Streak:</span>
                  <span className="font-mono text-amber-400 font-bold">{targetStreak} consecutive group runs</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  value={targetStreak}
                  onChange={(e) => setTargetStreak(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>3 Runs (Starter)</span>
                  <span>Goal: {targetStreak} Runs</span>
                  <span>12 Runs (Anchor Looper)</span>
                </div>
                <p className="text-xs text-slate-400 pt-1 border-t border-white/5">
                  ⭐ Milestone: Achieving a {targetStreak}-run streak earns the <strong className="text-white">Community Trail Pillar</strong> crest in your profile.
                </p>
              </div>

              <button
                onClick={onOpenJoin}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <span>Create Your Runner Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* Right: Verified Attendance History Stream (Models MyRunsScreen LazyColumn items) */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Recent Verified Attendance Log
              </span>

              {pastRuns.map((run) => (
                <div
                  key={run.id}
                  className="p-4 rounded-2xl bg-darkbg/90 border border-white/5 hover:border-white/15 transition-all flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{run.title}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-loopgreen-500/20 text-loopgreen-300 font-bold border border-loopgreen-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {run.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">{run.community} • {run.city}</p>
                    <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3 h-3 text-corral-400 shrink-0" />
                      <span>{run.accuracy}</span>
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-base font-extrabold text-white block">{run.distance}</span>
                    <span className="text-[10px] text-slate-500 font-mono block mt-0.5">{run.date}</span>
                  </div>
                </div>
              ))}

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-loopgreen-400" />
                  All check-ins are cryptographically timestamped & verified
                </span>
                <span className="text-slate-300 font-semibold">100% Honest Data</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
