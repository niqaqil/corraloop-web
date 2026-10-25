import React, { useState } from 'react';
import { Flame, MapPin, CheckCircle2, MessageSquare, Share2, Users } from 'lucide-react';

export default function CommunityFeed({ onOpenJoin }) {
  const [activities, setActivities] = useState([
    {
      id: 1,
      user: 'Aina Rahman',
      role: 'Club Organizer',
      club: 'Kelana Jaya Run Club',
      city: 'Petaling Jaya, Selangor',
      title: 'Taman Tasik Kelana Jaya 5K — Great morning turnout with coffee at Taman Tasik Kelana Jaya!',
      distance: '5.0 km',
      attendees: 18,
      kudos: 34,
      hasKudos: false,
      timestamp: '25m ago',
      verifiedLocation: 'Verified within 18m of South Arches'
    },
    {
      id: 2,
      user: 'Amir Hakim',
      role: 'Active Runner',
      club: 'Kelana Jaya Run Club',
      city: 'Petaling Jaya, Selangor',
      title: 'Bukit Gasing Easy 10K — Foggy start, sunny finish along Bukit Gasing!',
      distance: '10.0 km',
      attendees: 24,
      kudos: 48,
      hasKudos: false,
      timestamp: '2h ago',
      verifiedLocation: 'Verified within 22m of Bukit Gasing trailhead'
    },
    {
      id: 3,
      user: 'Mei Lin',
      role: 'Club Founder',
      club: 'Penang City Running Runners',
      city: 'George Town, Pulau Pinang',
      title: 'Gurney Drive Midweek 6K — 5-week streak milestone for our Wednesday morning crew!',
      distance: '6.4 km',
      attendees: 31,
      kudos: 56,
      hasKudos: false,
      timestamp: 'Yesterday',
      verifiedLocation: 'Verified within 15m of Gurney Drive promenade'
    }
  ]);

  const toggleCheer = (id) => {
    setActivities(activities.map(act => {
      if (act.id === id) {
        return {
          ...act,
          kudos: act.hasKudos ? act.kudos - 1 : act.kudos + 1,
          hasKudos: !act.hasKudos
        };
      }
      return act;
    }));
  };

  return (
    <section id="community" className="py-24 bg-[#0a0e16] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-loopgreen-500/10 border border-loopgreen-500/20 text-loopgreen-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            Live Community Activity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See Who’s Showing Up <span className="gradient-text-emerald">Across Cities</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Every verified check-in updates your club’s community attendance. Cheer on fellow runners and get inspired for your next local meetup.
          </p>
        </div>

        {/* Feed Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {activities.map((item) => (
            <div
              key={item.id}
              className="bg-darkbg-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              {/* User row */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-corral-500 to-loopgreen-500 p-0.5">
                    <div className="w-full h-full bg-darkbg rounded-2xl flex items-center justify-center font-black text-white text-sm">
                      {item.user.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-base">{item.user}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {item.role}
                      </span>
                    </div>
                    <p className="text-xs text-loopgreen-400 font-medium">{item.club} • {item.city}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-500 font-mono">{item.timestamp}</span>
                  <div className="mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-loopgreen-500/20 text-loopgreen-300 border border-loopgreen-500/30 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Check-in
                  </div>
                </div>
              </div>

              {/* Title / Description */}
              <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-4 leading-snug">
                {item.title}
              </h3>

              {/* Verified Run Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                <div className="bg-darkbg/80 p-2.5 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Distance</span>
                  <span className="text-sm font-extrabold text-white">{item.distance}</span>
                </div>
                <div className="bg-darkbg/80 p-2.5 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Group Attendees</span>
                  <span className="text-sm font-extrabold text-loopgreen-400">{item.attendees} runners</span>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-darkbg/80 p-2.5 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">GPS Verification</span>
                  <span className="text-xs font-bold text-slate-300 truncate block mt-0.5">{item.verifiedLocation}</span>
                </div>
              </div>

              {/* Interaction Bar */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleCheer(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                      item.hasKudos
                        ? 'bg-corral-500/20 text-corral-400 font-bold border border-corral-500/30'
                        : 'hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Flame className={`w-4 h-4 ${item.hasKudos ? 'fill-corral-500 text-corral-500' : ''}`} />
                    <span>{item.kudos} Cheers</span>
                  </button>

                  <button
                    onClick={onOpenJoin}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>View Club</span>
                  </button>
                </div>

                <button
                  onClick={onOpenJoin}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Run</span>
                </button>
              </div>
            </div>
          ))}

          {/* Join Callout */}
          <div className="text-center pt-4">
            <button
              onClick={onOpenJoin}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-darkbg-card hover:bg-darkbg-subtle border border-white/10 transition-colors"
            >
              Explore More Run Clubs & Sessions →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
