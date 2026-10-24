import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Clock, CheckCircle2, Users, Compass, ShieldCheck, Sparkles, Navigation } from 'lucide-react';

export default function Hero({ onOpenJoin, onScrollToRadar }) {
  const [hasCheckedIn, setHasCheckedIn] = useState(false);
  const [attendeeCount, setAttendeeCount] = useState(14);

  const handleSimulateCheckin = () => {
    if (!hasCheckedIn) {
      setHasCheckedIn(true);
      setAttendeeCount(prev => prev + 1);
    } else {
      setHasCheckedIn(false);
      setAttendeeCount(prev => prev - 1);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glowing orbs matching brand colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-loopgreen-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-corral-500/12 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 left-10 w-[500px] h-[500px] bg-loopgreen-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Product Mission & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-darkbg-card border border-white/10 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-loopgreen-400 animate-ping"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                Free Group Runs & Community Attendance
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Real Runners. <br className="hidden sm:inline" />
              Real Community. <br className="hidden sm:inline" />
              <span className="gradient-text-brand">Verified in Real Life.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">Corraloop</strong> brings runners together through local club meetups and verified group runs. Show up at the meeting point, check in with single-shot GPS within the 100m zone, and build your verified streak.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenJoin}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-corral-500 to-corral-600 hover:from-corral-400 hover:to-corral-500 shadow-glow-coral hover:shadow-glow-combined transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group"
              >
                <span>Find Your Local Run Club</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onScrollToRadar}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-base text-slate-200 hover:text-white bg-darkbg-card/90 hover:bg-darkbg-subtle border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:border-loopgreen-500/40"
              >
                <Navigation className="w-5 h-5 text-loopgreen-400" />
                <span>How 100m Check-in Works</span>
              </button>
            </div>

            {/* Core Pillars (Replaces unsupported template numbers) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0 text-left">
              <div className="bg-darkbg-card/50 p-3.5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 text-corral-400 font-bold text-sm mb-1">
                  <Users className="w-4 h-4" />
                  <span>Local Run Clubs</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Browse communities by city, meet organizers, and join scheduled runs.
                </p>
              </div>

              <div className="bg-darkbg-card/50 p-3.5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 text-loopgreen-400 font-bold text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>100m Geofence</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Single-shot proximity check-in. Never runs battery-draining continuous tracking.
                </p>
              </div>

              <div className="bg-darkbg-card/50 p-3.5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Streaks</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Real participation logs. Build streaks by showing up with your crew.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Interactive App Run Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer card shell with frosted glass styling matching Compose Card */}
            <div className="relative w-full max-w-md rounded-3xl p-6 sm:p-7 glass-panel border border-white/15 shadow-2xl overflow-hidden group">
              
              {/* App Bar Header simulation */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-corral-500/20 text-corral-400 flex items-center justify-center p-1 border border-corral-500/30">
                    <img src="/logo-icon.svg" alt="Corraloop" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">Marina Sunrise Runners</span>
                    <span className="text-[10px] text-slate-400 block -mt-0.5">San Francisco, CA • Elena Vance</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/5 text-slate-300 border border-white/10">
                  5.0 km Run
                </span>
              </div>

              {/* Run Session Card Body */}
              <div className="py-5 space-y-4">
                
                {/* Run Title */}
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Embarcadero Sunrise 5K
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-corral-400 shrink-0" />
                    <span>Tomorrow • 6:30 AM</span>
                  </div>
                </div>

                {/* Status Badge (Matches Compose StatusBadge component) */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Check-in Open • Closes in 15m</span>
                </div>

                {/* Meeting Point Card */}
                <div className="p-3.5 rounded-2xl bg-darkbg/90 border border-white/5 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-corral-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Meeting Point</span>
                      <span className="text-xs font-semibold text-white block">Ferry Building Plaza, San Francisco</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">Meet by the south clock tower arches</span>
                    </div>
                  </div>

                  {/* Proximity Distance Indicator */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-loopgreen-400" />
                      Distance to Meeting:
                    </span>
                    <span className="font-mono text-loopgreen-400 font-bold">
                      {hasCheckedIn ? '18m (Verified)' : '35m (In 100m Zone)'}
                    </span>
                  </div>
                </div>

                {/* Attendee Roster Preview */}
                <div className="p-3.5 rounded-2xl bg-darkbg/70 border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-loopgreen-400" />
                      Checked-In Attendees
                    </span>
                    <span className="font-bold text-white font-mono">{attendeeCount} runners</span>
                  </div>

                  {/* Avatar row with verified badge */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <span className="w-7 h-7 rounded-full bg-corral-500 border-2 border-darkbg text-[10px] flex items-center justify-center font-bold text-white shadow">SJ</span>
                        <span className="w-7 h-7 rounded-full bg-loopgreen-500 border-2 border-darkbg text-[10px] flex items-center justify-center font-bold text-white shadow">DK</span>
                        <span className="w-7 h-7 rounded-full bg-amber-500 border-2 border-darkbg text-[10px] flex items-center justify-center font-bold text-white shadow">MR</span>
                        {hasCheckedIn && (
                          <span className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-darkbg text-[10px] flex items-center justify-center font-bold text-white shadow animate-in zoom-in">YOU</span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400">Sarah, David & crew</span>
                    </div>

                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-loopgreen-500/20 text-loopgreen-300 font-bold border border-loopgreen-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> GPS Verified
                    </span>
                  </div>
                </div>

                {/* Interactive Check-in Button */}
                <button
                  onClick={handleSimulateCheckin}
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    hasCheckedIn
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-950/40'
                      : 'bg-gradient-to-r from-corral-500 to-corral-600 hover:from-corral-400 hover:to-corral-500 text-white shadow-glow-coral'
                  }`}
                >
                  {hasCheckedIn ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Checked In! Streak +1 Recorded</span>
                    </>
                  ) : (
                    <>
                      <Navigation className="w-4 h-4 text-white" />
                      <span>Test Check-in (Within 100m)</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Floating Info Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-8 p-3 rounded-2xl glass-panel border border-white/10 shadow-xl items-center gap-3 animate-float">
              <div className="w-9 h-9 rounded-xl bg-loopgreen-500/20 text-loopgreen-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Zero Fake Miles</p>
                <p className="text-[10px] text-slate-400">Physical attendance validated</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-6 p-3 rounded-2xl glass-panel border border-white/10 shadow-xl items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-9 h-9 rounded-xl bg-corral-500/20 text-corral-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Privacy First</p>
                <p className="text-[10px] text-slate-400">Single-shot check-in only</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
