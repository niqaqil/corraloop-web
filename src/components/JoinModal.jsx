import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, MapPin, Users } from 'lucide-react';

export default function JoinModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('San Francisco');
  const [role, setRole] = useState('runner'); // 'runner' or 'organizer'
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 500);
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
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-loopgreen-500 to-corral-500">
                <img src="/logo-icon.svg" alt="Corraloop" className="w-full h-full object-contain rounded-lg p-0.5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-1.5">
                  Join corral<span className="text-corral-500">oop</span>
                </h3>
                <p className="text-xs text-slate-400">Find running communities and verified group runs</p>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Your Runner Name or Handle</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Reed"
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
                  placeholder="runner@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-darkbg border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-loopgreen-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Home City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-darkbg border border-white/10 text-white text-sm focus:outline-none focus:border-loopgreen-400"
                >
                  <option value="San Francisco">San Francisco, CA</option>
                  <option value="New York">New York, NY</option>
                  <option value="Austin">Austin, TX</option>
                  <option value="Chicago">Chicago, IL</option>
                  <option value="London">London, UK</option>
                  <option value="Other">Other City</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">I want to:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('runner')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl transition-all border ${
                      role === 'runner'
                        ? 'bg-corral-500/20 text-corral-400 border-corral-500/50'
                        : 'bg-darkbg text-slate-400 border-white/5 hover:text-white'
                    }`}
                  >
                    Join Local Runs
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('organizer')}
                    className={`py-2 px-3 text-xs font-bold rounded-xl transition-all border ${
                      role === 'organizer'
                        ? 'bg-loopgreen-500/20 text-loopgreen-300 border-loopgreen-500/50'
                        : 'bg-darkbg text-slate-400 border-white/5 hover:text-white'
                    }`}
                  >
                    Host a Run Club
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm bg-gradient-to-r from-corral-500 to-loopgreen-500 text-white shadow-glow-coral hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Generating Runner Profile...</span>
                ) : (
                  <>
                    <span>Generate Free Runner Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-500">
                🔒 Free membership • Single-shot location check-in • Privacy protected
              </p>
            </form>
          </div>
        ) : (
          /* Step 2: Confirmation / Runner Profile Card */
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-loopgreen-500/20 text-loopgreen-400 flex items-center justify-center border border-loopgreen-500/30 animate-bounce">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-loopgreen-400">
                Welcome to the Community
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Your Runner Profile is Active!
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                A welcome guide has been dispatched to <strong className="text-white">{email}</strong>.
              </p>
            </div>

            {/* Virtual Runner Pass */}
            <div className="relative mx-auto max-w-sm rounded-2xl p-5 bg-gradient-to-br from-[#131b2b] via-[#0d131f] to-[#171f2f] border border-white/20 shadow-2xl text-left">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/logo-icon.svg" alt="Corraloop" className="w-7 h-7 object-contain" />
                    <span className="font-extrabold text-white text-base">corraloop</span>
                  </div>
                  <span className="text-[10px] text-loopgreen-400 font-mono tracking-wider block mt-0.5">
                    RUNNER ID #CL-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-corral-500/20 text-corral-400 border border-corral-500/30">
                  {role === 'organizer' ? 'Club Organizer' : 'Active Runner'}
                </span>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Athlete</span>
                  <span className="font-bold text-white text-sm">{name || 'Trail Blazer'}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase block">Home City</span>
                  <span className="font-bold text-slate-200 text-sm">{city}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Explore Local Run Clubs
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
