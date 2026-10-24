import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, Sparkles, Heart } from 'lucide-react';

export default function JoinModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sport, setSport] = useState('Running');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 600);
  };

  const handleReset = () => {
    setStep(1);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={handleReset}></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-[#0d131f] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden">
        
        {/* Glow behind modal */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-corral-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-loopgreen-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-loopgreen-500 to-corral-500">
                <img src="/logo-icon.png" alt="corraloop" className="w-full h-full object-contain rounded-lg bg-darkbg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                  Join the corral<span className="text-corral-500">oop</span>
                </h3>
                <p className="text-xs text-slate-400">Step into the collective fitness movement</p>
              </div>
            </div>

            {/* Quick 1-Click Trackers */}
            <div className="mb-5 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Quick Connect with Fitness App
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => { setName('Strava Athlete'); setEmail('looper@strava.com'); }}
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#FC4C02]/20 border border-white/10 hover:border-[#FC4C02]/50 text-xs font-bold text-slate-200 hover:text-white transition-all flex flex-col items-center gap-1"
                >
                  <span className="text-[#FC4C02] font-black text-sm">STRAVA</span>
                  <span className="text-[10px] text-slate-400">Sync Rides & Runs</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setName('Garmin Runner'); setEmail('looper@garmin.com'); }}
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#007cc3]/20 border border-white/10 hover:border-[#007cc3]/50 text-xs font-bold text-slate-200 hover:text-white transition-all flex flex-col items-center gap-1"
                >
                  <span className="text-[#007cc3] font-black text-sm">GARMIN</span>
                  <span className="text-[10px] text-slate-400">Direct Connect</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setName('Apple Health User'); setEmail('looper@apple.com'); }}
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-bold text-slate-200 hover:text-white transition-all flex flex-col items-center gap-1"
                >
                  <span className="text-white font-black text-sm">APPLE</span>
                  <span className="text-[10px] text-slate-400">Health Rings</span>
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t border-white/10 w-full"></div>
              <span className="bg-[#0d131f] px-3 text-[11px] text-slate-500 uppercase font-semibold">Or with Email</span>
            </div>

            {/* Email Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name or Handle</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-darkbg border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-corral-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex@movement.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-darkbg border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-loopgreen-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Primary Sport / Discipline</label>
                <div className="grid grid-cols-4 gap-2">
                  {['Running', 'Cycling', 'Fitness', 'Swimming'].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setSport(item)}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${
                        sport === item
                          ? 'bg-corral-500 text-white shadow-sm'
                          : 'bg-darkbg text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Generating Athlete Loop Pass...</span>
                ) : (
                  <>
                    <span>Generate Free Looper Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-500">
                🔒 Free membership • No credit card required • GDPR & HIPAA compliant
              </p>
            </form>
          </div>
        ) : (
          /* Step 2: Confirmation / Athlete Card */
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-loopgreen-500/20 text-loopgreen-400 flex items-center justify-center border border-loopgreen-500/30 animate-bounce">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-loopgreen-400">
                Welcome to the Movement
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Your Corraloop Pass is Active!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                A verification link and initial tracker sync token was sent to <strong className="text-white">{email}</strong>.
              </p>
            </div>

            {/* Virtual Membership Card */}
            <div className="relative mx-auto max-w-sm rounded-2xl p-5 bg-gradient-to-br from-[#131b2b] via-[#0d131f] to-[#171f2f] border border-white/20 shadow-2xl text-left">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/logo-icon.png" alt="corraloop" className="w-7 h-7 object-contain" />
                    <span className="font-extrabold text-white text-base">corraloop</span>
                  </div>
                  <span className="text-[10px] text-loopgreen-400 font-mono tracking-wider block mt-0.5">
                    MEMBER PASS #CL-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-corral-500/20 text-corral-400 border border-corral-500/30">
                  {sport} Division
                </span>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Athlete</span>
                  <span className="font-bold text-white text-sm">{name || 'Trail Blazer'}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase block">Tier</span>
                  <span className="font-bold text-amber-400 text-sm">Founding Member</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Done & Explore Platform
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
