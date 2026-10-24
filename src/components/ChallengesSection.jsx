import React, { useState } from 'react';
import { Trophy, Calendar, Users, Flame, ArrowUpRight, CheckCircle2, Filter, Search } from 'lucide-react';

export default function ChallengesSection({ onOpenJoin }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [joinedChallenges, setJoinedChallenges] = useState({});

  const challenges = [
    {
      id: 1,
      title: 'The Solstice Century Loop',
      category: 'Cycling',
      target: '100 km in 7 Days',
      participants: 4120,
      daysLeft: 5,
      progress: 68,
      reward: 'Limited Solstice Emblem + Rapha 20% Voucher',
      tag: 'Featured Relay',
      color: 'from-corral-500 to-amber-500',
      tagColor: 'bg-corral-500/20 text-corral-400 border-corral-500/30'
    },
    {
      id: 2,
      title: 'Dawn Patrol 5AM Sprint Circle',
      category: 'Running',
      target: '5 runs before 7:00 AM',
      participants: 2890,
      daysLeft: 9,
      progress: 54,
      reward: 'Dawn Patrol Digital Crest + Coffee Perk',
      tag: 'Habit Builder',
      color: 'from-loopgreen-500 to-emerald-400',
      tagColor: 'bg-loopgreen-500/20 text-loopgreen-400 border-loopgreen-500/30'
    },
    {
      id: 3,
      title: 'Everest Vertical Elevation Challenge',
      category: 'Multisport',
      target: '2,500m Elevation Gain',
      participants: 1650,
      daysLeft: 14,
      progress: 32,
      reward: 'Summit Finisher Medallion + Salomon Gear Drop',
      tag: 'Elite Altitude',
      color: 'from-sky-500 to-indigo-500',
      tagColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30'
    },
    {
      id: 4,
      title: 'Mindful Miles & Cold Plunge Loop',
      category: 'Recovery',
      target: '30km Walk + 3 Recovery Sessions',
      participants: 3340,
      daysLeft: 3,
      progress: 89,
      reward: 'Zen Looper Badge + Whoop Straps Entry',
      tag: 'Wellness & Mind',
      color: 'from-emerald-400 to-teal-500',
      tagColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30'
    },
    {
      id: 5,
      title: 'Tokyo vs Berlin Global Loopathon',
      category: 'Running',
      target: 'City Team Total: 50,000 km',
      participants: 12400,
      daysLeft: 2,
      progress: 92,
      reward: 'City Champions Trophy Ring',
      tag: 'Global Flagship',
      color: 'from-corral-600 to-rose-500',
      tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
    },
    {
      id: 6,
      title: 'Gravel Grinder Weekend Loop',
      category: 'Cycling',
      target: '75km Off-Road in 48 Hours',
      participants: 980,
      daysLeft: 8,
      progress: 41,
      reward: 'Gravel Nomad Badge + Maurten Nutrition Pack',
      tag: 'Adventure Loop',
      color: 'from-amber-500 to-orange-600',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    }
  ];

  const categories = ['All', 'Running', 'Cycling', 'Multisport', 'Recovery'];

  const filtered = activeCategory === 'All' 
    ? challenges 
    : challenges.filter(c => c.category === activeCategory);

  const toggleJoin = (id) => {
    setJoinedChallenges(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="challenges" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corral-500/10 border border-corral-500/20 text-corral-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              Active Community Competitions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Join a Live <span className="gradient-text-coral">Loop Challenge</span>
            </h2>
            <p className="mt-2 text-slate-400 text-base max-w-xl">
              Lock in your commitment, sync your metrics, and compete alongside thousands of fellow loopers around the globe.
            </p>
          </div>

          {/* Categories Pill Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-md'
                    : 'bg-darkbg-card hover:bg-darkbg-subtle text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const isJoined = joinedChallenges[item.id];
            return (
              <div
                key={item.id}
                className="bg-darkbg-card/70 rounded-3xl p-6 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Tag and Days Left */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.daysLeft} days left
                    </span>
                  </div>

                  {/* Title & Target */}
                  <h3 className="text-xl font-bold text-white group-hover:text-corral-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-semibold mt-1">
                    🎯 Goal: {item.target}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-5 space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                      <span>Loop Completion</span>
                      <span className="font-bold text-white">{item.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Reward Box */}
                  <div className="mt-4 p-3 rounded-xl bg-darkbg/90 border border-white/5 flex items-start gap-2.5">
                    <Trophy className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Reward</span>
                      <span className="text-xs font-medium text-slate-200">{item.reward}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Participants & Action */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Users className="w-4 h-4 text-loopgreen-400" />
                    <span>{(item.participants + (isJoined ? 1 : 0)).toLocaleString()} loopers</span>
                  </div>

                  <button
                    onClick={() => toggleJoin(item.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isJoined
                        ? 'bg-loopgreen-500/20 text-loopgreen-300 border border-loopgreen-500/50'
                        : 'bg-white/10 hover:bg-white/20 text-white hover:border-corral-500/50 border border-white/10'
                    }`}
                  >
                    {isJoined ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-loopgreen-400" />
                        <span>Joined!</span>
                      </>
                    ) : (
                      <>
                        <span>Join Loop</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 rounded-3xl p-8 bg-gradient-to-r from-corral-900/40 via-darkbg-card to-loopgreen-950/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Want to host a private Loop Challenge for your Club or Company?
            </h3>
            <p className="text-sm text-slate-400">
              Set custom mileage quotas, invite members, and get a dedicated leaderboard in 60 seconds.
            </p>
          </div>
          <button
            onClick={onOpenJoin}
            className="px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral hover:scale-105 transition-transform shrink-0"
          >
            Create Custom Club Loop
          </button>
        </div>

      </div>
    </section>
  );
}
