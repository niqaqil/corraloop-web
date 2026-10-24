import React, { useState } from 'react';
import { Users, MapPin, Calendar, ArrowRight, CheckCircle2, Plus, Clock } from 'lucide-react';

export default function CommunitiesSection({ onOpenJoin }) {
  const [selectedCity, setSelectedCity] = useState('All');
  const [joinedCommunities, setJoinedCommunities] = useState({ demo_comm_marina: true });

  const cities = ['All', 'San Francisco', 'New York', 'Austin'];

  const communities = [
    {
      id: 'demo_comm_marina',
      name: 'Marina Sunrise Runners',
      city: 'San Francisco',
      organizer: 'Elena Vance',
      memberCount: 42,
      description: 'Morning miles along the SF Bay with coffee afterwards. All paces welcome!',
      accentColor: 'from-corral-500 to-amber-500',
      tagColor: 'bg-corral-500/20 text-corral-400 border-corral-500/30',
      runs: [
        { title: 'Embarcadero Sunrise 5K', distance: '5.0 km', time: 'Tomorrow • 6:30 AM', location: 'Ferry Building Plaza' },
        { title: 'Presidio Coastal 10K', distance: '10.0 km', time: 'Saturday • 8:00 AM', location: 'Crissy Field Warming Hut' }
      ]
    },
    {
      id: 'demo_comm_central_park',
      name: 'Central Park Strides',
      city: 'New York',
      organizer: 'Sarah Jenkins',
      memberCount: 118,
      description: 'Classic reservoir loops and weekly Saturday long runs through Manhattan.',
      accentColor: 'from-loopgreen-500 to-emerald-400',
      tagColor: 'bg-loopgreen-500/20 text-loopgreen-400 border-loopgreen-500/30',
      runs: [
        { title: 'Reservoir Morning 4-Miler', distance: '6.4 km', time: 'Wednesday • 7:00 AM', location: 'Columbus Circle Entrance' },
        { title: 'Full Loop Saturday Long Run', distance: '10.0 km', time: 'Saturday • 8:30 AM', location: 'Boathouse Cafe' }
      ]
    },
    {
      id: 'demo_comm_austin',
      name: 'Austin Trail Blazers',
      city: 'Austin',
      organizer: 'Liam Reed',
      memberCount: 64,
      description: 'Scenic shaded trail runs along Lady Bird Lake with post-run Barton Springs dips.',
      accentColor: 'from-sky-500 to-indigo-500',
      tagColor: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
      runs: [
        { title: 'Lady Bird Lake Loop', distance: '8.0 km', time: 'Thursday • 6:45 AM', location: 'Pfluger Pedestrian Bridge' },
        { title: 'Barton Creek Greenbelt Run', distance: '10.0 km', time: 'Sunday • 7:30 AM', location: 'Barton Springs Pool' }
      ]
    }
  ];

  const filtered = selectedCity === 'All'
    ? communities
    : communities.filter(c => c.city === selectedCity);

  const toggleJoin = (id) => {
    setJoinedCommunities(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="communities" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & City Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corral-500/10 border border-corral-500/20 text-corral-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              Local Running Clubs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Active <span className="gradient-text-coral">Communities</span>
            </h2>
            <p className="mt-2 text-slate-400 text-base max-w-xl">
              Running is better together. Discover local clubs in your city, see upcoming scheduled group runs, and meet your community.
            </p>
          </div>

          {/* City Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCity === city
                    ? 'bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-md'
                    : 'bg-darkbg-card hover:bg-darkbg-subtle text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filtered.map((comm) => {
            const isMember = joinedCommunities[comm.id];
            const currentCount = comm.memberCount + (isMember && comm.id !== 'demo_comm_marina' ? 1 : 0);

            return (
              <div
                key={comm.id}
                className="bg-darkbg-card/70 rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: City tag & Member Count */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${comm.tagColor}`}>
                      {comm.city}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-loopgreen-400" />
                      {currentCount} members
                    </span>
                  </div>

                  {/* Club Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-corral-400 transition-colors">
                    {comm.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Organized by <strong className="text-slate-300 font-semibold">{comm.organizer}</strong>
                  </p>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {comm.description}
                  </p>

                  {/* Upcoming Scheduled Runs */}
                  <div className="mt-6 pt-5 border-t border-white/5 space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Upcoming Group Runs
                    </span>
                    
                    {comm.runs.map((run, idx) => (
                      <div key={idx} className="p-3 rounded-2xl bg-darkbg/80 border border-white/5 flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs font-bold text-white">{run.title}</h4>
                          <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-loopgreen-400 shrink-0" />
                            <span>{run.time}</span>
                          </p>
                          <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-corral-400 shrink-0" />
                            <span>{run.location}</span>
                          </p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-slate-300 shrink-0">
                          {run.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Join Button */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Free to join • All paces</span>
                  <button
                    onClick={() => toggleJoin(comm.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isMember
                        ? 'bg-loopgreen-500/20 text-loopgreen-300 border border-loopgreen-500/40'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-corral-500/40'
                    }`}
                  >
                    {isMember ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-loopgreen-400" />
                        <span>Member</span>
                      </>
                    ) : (
                      <>
                        <span>Join Club</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organizer Callout Banner */}
        <div id="organizers" className="mt-14 rounded-3xl p-8 bg-gradient-to-r from-corral-900/40 via-darkbg-card to-loopgreen-950/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs text-amber-400 font-bold mb-1">
              <Plus className="w-3.5 h-3.5" /> For Run Club Leaders & Organizers
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Host and manage group runs with zero paperwork
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Set landmark meeting points, schedule automated 100m check-in windows, and let Corraloop verify attendees automatically. No clipboards or check-in queues needed.
            </p>
          </div>
          <button
            onClick={onOpenJoin}
            className="px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral hover:scale-105 transition-transform shrink-0"
          >
            Register as an Organizer
          </button>
        </div>

      </div>
    </section>
  );
}
