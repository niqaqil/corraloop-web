import React, { useMemo, useState } from 'react';
import { Users, MapPin, ArrowRight, CheckCircle2, Plus, ExternalLink, Search } from 'lucide-react';

const communities = [
  { state: 'Johor', city: 'Johor Bahru', name: 'Team Treximo', note: 'Johor Bahru community featured in recent regional running activations.', link: 'https://www.universalsports.my/news', source: 'Universal Sports' },
  { state: 'Johor', city: 'Johor Bahru', name: 'Hybrid Culture', note: 'Johor Bahru running community featured in regional shoe trial and group run activations.', link: 'https://www.universalsports.my/news', source: 'Universal Sports' },
  { state: 'Kedah', city: 'Alor Setar', name: 'Conquer Running Team', note: 'Northern Malaysia crew listed in the national club directory.', link: 'https://www.jomkitalari.com/kelab-krew-larian/', source: 'Jom Kita Lari' },
  { state: 'Kedah', city: 'Alor Setar', name: 'Kedah Runners', note: 'Local running community organizing events and group participation in Alor Setar.', link: 'https://www.localgymsandfitness.com/MY/Alor-Setar/116574606460914/Kedah-Runners', source: 'Kedah Runners' },
  { state: 'Kelantan', city: 'Tanah Merah', name: 'Tanah Merah Running Club', note: 'Kelantan running crew listed in the national club directory.', link: 'https://www.jomkitalari.com/kelab-krew-larian/', source: 'Jom Kita Lari' },
  { state: 'Melaka', city: 'Melaka City', name: 'D’Botanical & Riverside Run Club', note: 'Registered local community with regular training sessions.', link: 'https://startupmelaka.com/runclubs/akurun', source: 'StartupMelaka' },
  { state: 'Negeri Sembilan', city: 'Seremban', name: 'Nismilan Runners Club', note: 'Established Seremban club with a regular weekly running community.', link: 'https://urx.world/en/run/journal/grow/routes/running-clubs-kuala-lumpur-malaysia', source: 'URX running guide' },
  { state: 'Pahang', city: 'Kuantan', name: 'Zeth Project Running Community', note: 'Open, beginner-friendly community based in Kuantan.', link: 'https://absolutego.my/community-clubs/zeth-project-running-community', source: 'Absolute Go' },
  { state: 'Perak', city: 'Ipoh', name: 'BagiRun Club', note: 'Registered Ipoh running community with weekly city runs.', link: 'https://bagirunclub.com/we-are-bagirun-club/', source: 'BagiRun Club' },
  { state: 'Perak', city: 'Taiping', name: 'Liga Pelari Taiping', note: 'Community running crew listed among Malaysia’s northern running groups.', link: 'https://www.jomkitalari.com/kelab-krew-larian/', source: 'Jom Kita Lari' },
  { state: 'Perlis', city: 'Perlis', name: 'Perlis Happy Run Club', note: 'Local running association listed by the Perlis state directory.', link: 'https://usahawan.perlis.gov.my/carian_persatuan?page=16', source: 'Usahawan Perlis' },
  { state: 'Pulau Pinang', city: 'George Town', name: 'Penang City Running Runners (PCRR)', note: 'A prominent free social-run club with regular midweek runs.', link: 'https://www.clublist.my/', source: 'ClubList' },
  { state: 'Pulau Pinang', city: 'George Town', name: 'Q1 Running Club', note: 'Penang social running crew with regular Thursday night meetups.', link: 'https://www.clublist.my/', source: 'ClubList' },
  { state: 'Sabah', city: 'Kota Kinabalu', name: 'Sabah Trail Seekers', note: 'Long-running outdoor community with over 1,000 members.', link: 'https://sabahtrailseekers.wixsite.com/sabahtrailseekers', source: 'Sabah Trail Seekers' },
  { state: 'Sabah', city: 'Kota Kinabalu', name: '630RC', note: 'Open local crew with a relaxed “just show up” group running vibe.', link: 'https://www.maxis.com.my/en/campaigns/start-now-run/', source: 'Maxis Start Now' },
  { state: 'Sarawak', city: 'Kuching', name: 'Underground Runners', note: 'Sarawak community with chapters in Kuching, Miri, Sibu and Bintulu.', link: 'https://www.justrunlah.com/running-club/underground-runners/', source: 'JustRunLah!' },
  { state: 'Sarawak', city: 'Kuching', name: 'Daybreak247', note: 'Kuching community with sunrise road runs and weekly track sessions.', link: 'https://runningcrews.com/blog/daybreak247-kuching-malaysia', source: 'RunningCrews' },
  { state: 'Selangor', city: 'Petaling Jaya', name: 'Kelana Jaya Run Club (KJRC)', note: 'Growing community with 500+ members and multiple divisions.', link: 'https://kjrc.my/', source: 'KJRC' },
  { state: 'Selangor', city: 'Shah Alam', name: 'Shah Alam Running Club', note: 'Weekly social and easy runs in Shah Alam.', link: 'https://runclubs.my/clubs/', source: 'RunClubs.my' },
  { state: 'Terengganu', city: 'Kuala Terengganu', name: 'Terengganu Runners Community (TRC)', note: 'Community-grown club developing into a structured running organisation.', link: 'https://harimaumalaya.com.my/91111/evolusi-terengganu-runners-community-trc-dan-misi-mereka-untuk-lahirkan-pelari-elit-dari-peringkat-akar-umbi/', source: 'Harimau Malaya' },
  { state: 'Kuala Lumpur', city: 'Kuala Lumpur', name: 'Brand New Waves Running Club', note: 'A widely visible social crew in the Klang Valley running scene.', link: 'https://runclubs.my/clubs/', source: 'RunClubs.my' },
  { state: 'Kuala Lumpur', city: 'Kuala Lumpur', name: 'Garmin Run Club', note: 'Malaysia-wide running community with regular Klang Valley group sessions.', link: 'https://runclubs.my/clubs/', source: 'RunClubs.my' },
  { state: 'Kuala Lumpur', city: 'Kuala Lumpur', name: 'Pacemakers', note: 'Established local club with group training sessions and long runs.', link: 'https://runclubs.my/clubs/', source: 'RunClubs.my' },
  { state: 'Putrajaya', city: 'Putrajaya', name: 'ezRUN', note: 'Putrajaya community run club with meetups announced through its channels.', link: 'https://runclubs.my/areas/', source: 'RunClubs.my' },
  { state: 'Labuan', city: 'Labuan', name: 'Poseur Run Club', note: 'Local crew with regular weekend long runs and an open community spirit.', link: 'https://runningcrews.com/crews/poseur-run-club-labuan', source: 'RunningCrews' },
];
const states = ['All Malaysia', 'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'Kuala Lumpur', 'Putrajaya', 'Labuan'];

export default function CommunitiesSection({ onOpenJoin }) {
  const [selectedState, setSelectedState] = useState('All Malaysia');
  const [query, setQuery] = useState('');
  const [joined, setJoined] = useState({});
  const filtered = useMemo(() => communities.filter((club) =>
    (selectedState === 'All Malaysia' || club.state === selectedState) &&
    `${club.name} ${club.city} ${club.state}`.toLowerCase().includes(query.toLowerCase())
  ), [selectedState, query]);

  return (
    <section id="communities" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corral-500/10 border border-corral-500/20 text-corral-400 text-xs font-bold uppercase tracking-wider mb-3"><Users className="w-3.5 h-3.5" /> Across Malaysia</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Find your <span className="gradient-text-coral">running people</span></h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl">Explore standout run clubs and communities from Perlis to Sabah. Club picks reflect public visibility and available listings, not an official popularity ranking. Confirm current meetups with the club before heading out.</p>
          </div>
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a club or place" aria-label="Search Malaysian running clubs" className="w-full pl-10 pr-4 py-3 rounded-2xl bg-darkbg-card border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-corral-500" />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-4 mb-5 scrollbar-hide" aria-label="Filter by state">
          {states.map((state) => <button key={state} onClick={() => setSelectedState(state)} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${selectedState === state ? 'bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white' : 'bg-darkbg-card text-slate-400 hover:text-white border border-white/5'}`}>{state}</button>)}
        </div>
        <p className="text-xs text-slate-500 mb-6" aria-live="polite">
          {selectedState === 'All Malaysia' ? 'Featured communities' : `Featured clubs in ${selectedState}`} · {filtered.length} {filtered.length === 1 ? 'club' : 'clubs'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((club) => <article key={`${club.state}-${club.name}`} className="bg-darkbg-card/70 rounded-3xl p-6 border border-white/10 hover:border-corral-500/30 transition-all flex flex-col shadow-xl group">
            <div className="flex justify-between items-start gap-3 mb-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-loopgreen-500/25 bg-loopgreen-500/10 text-loopgreen-300 text-[10px] uppercase font-bold tracking-wider"><MapPin className="w-3 h-3" />{club.state}</span><span className="text-xs text-slate-500">{club.city}</span></div>
            <h3 className="text-xl font-bold text-white group-hover:text-corral-300 transition-colors">{club.name}</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed flex-grow">{club.note}</p>
            <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-white/5"><a href={club.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"><ExternalLink className="w-3.5 h-3.5" />Source: {club.source}</a><button onClick={() => setJoined((prev) => ({ ...prev, [club.state]: !prev[club.state] }))} className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${joined[club.state] ? 'bg-loopgreen-500/20 text-loopgreen-300 border border-loopgreen-500/40' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'}`}>{joined[club.state] ? <><CheckCircle2 className="w-3.5 h-3.5" />Saved</> : <>Save club<ArrowRight className="w-3.5 h-3.5" /></>}</button></div>
          </article>)}
          {filtered.length === 0 && <div className="col-span-full text-center py-14 text-slate-400">No communities match that search. Try another state or club name.</div>}
        </div>
        <div id="organizers" className="mt-14 rounded-3xl p-8 bg-gradient-to-r from-corral-900/40 via-darkbg-card to-loopgreen-950/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left"><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs text-amber-400 font-bold mb-1"><Plus className="w-3.5 h-3.5" />For Malaysian Run Club Leaders</div><h3 className="text-xl sm:text-2xl font-bold text-white">Bring your crew onto Corraloop</h3><p className="text-sm text-slate-400 max-w-2xl">Create a home for your community, share meetup details, and let runners check in when they arrive.</p></div>
          <button onClick={onOpenJoin} className="px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral hover:scale-105 transition-transform shrink-0">Register your run club</button>
        </div>
      </div>
    </section>
  );
}
