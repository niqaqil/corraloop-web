import React, { useState } from 'react';
import { Heart, MessageSquare, Share2, Flame, MapPin, Zap, CheckCircle2, TrendingUp } from 'lucide-react';

export default function CommunityFeed({ onOpenJoin }) {
  const [activities, setActivities] = useState([
    {
      id: 1,
      user: 'Maya Lin',
      handle: '@mayamiles',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      club: 'Golden Gate Runners',
      title: 'Sunrise Ridge Sprint — 3rd Loop of the week!',
      sport: 'Running',
      distance: '12.2 km',
      time: '52:14',
      elevation: '210m',
      kudos: 42,
      hasKudos: false,
      timestamp: '14m ago',
      loopAchieved: 'Closed Gold Loop #42',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    {
      id: 2,
      user: 'Liam O’Connor',
      handle: '@liamcycles',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      club: 'Dublin Peloton Crew',
      title: 'Wet Sunday Century Ride through Wicklow Mountains',
      sport: 'Cycling',
      distance: '104.5 km',
      time: '3h 18m',
      elevation: '1,420m',
      kudos: 89,
      hasKudos: false,
      timestamp: '42m ago',
      loopAchieved: 'Unlocked Century Looper Crest',
      badgeColor: 'bg-loopgreen-500/10 text-loopgreen-400 border-loopgreen-500/20'
    },
    {
      id: 3,
      user: 'Chloe Dubois',
      handle: '@chloefit',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      club: 'Parisian Track Club',
      title: 'Intervals 8x800m + Cold Recovery Dip',
      sport: 'Track & Recovery',
      distance: '8.4 km',
      time: '38:00',
      elevation: '45m',
      kudos: 67,
      hasKudos: false,
      timestamp: '1h ago',
      loopAchieved: 'Maintained 30-Day Daily Streak',
      badgeColor: 'bg-corral-500/10 text-corral-400 border-corral-500/20'
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('All');

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
            <Zap className="w-3.5 h-3.5" />
            Real-Time Community Pulse
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See Who’s Closing Loops <span className="gradient-text-emerald">Right Now</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Every workout feeds into the global corraloop feed. Cheer on fellow athletes, celebrate streaks, and find inspiration for tomorrow's session.
          </p>
        </div>

        {/* Live Feed Container */}
        <div className="max-w-3xl mx-auto space-y-6">
          {activities.map((item) => (
            <div
              key={item.id}
              className="bg-darkbg-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              {/* User row */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.user}
                    className="w-12 h-12 rounded-2xl object-cover border border-white/10"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-base">{item.user}</h4>
                      <span className="text-xs text-slate-400">{item.handle}</span>
                    </div>
                    <p className="text-xs text-loopgreen-400 font-medium">{item.club}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-500 font-mono">{item.timestamp}</span>
                  <div className={`mt-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.loopAchieved}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-100 mt-4">
                {item.title}
              </h3>

              {/* Workout Stat Badges */}
              <div className="grid grid-cols-3 gap-3 my-4">
                <div className="bg-darkbg/80 p-2.5 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Distance</span>
                  <span className="text-sm font-extrabold text-white">{item.distance}</span>
                </div>
                <div className="bg-darkbg/80 p-2.5 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Moving Time</span>
                  <span className="text-sm font-extrabold text-loopgreen-400">{item.time}</span>
                </div>
                <div className="bg-darkbg/80 p-2.5 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Elevation</span>
                  <span className="text-sm font-extrabold text-corral-400">+{item.elevation}</span>
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
                    <span>Cheer Back</span>
                  </button>
                </div>

                <button
                  onClick={onOpenJoin}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Loop</span>
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
              Load 50+ More Live Activities in Your Region →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
