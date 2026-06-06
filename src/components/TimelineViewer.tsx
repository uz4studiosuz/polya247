import React, { useState } from 'react';
import { Calendar, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data';

export default function TimelineViewer() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = TIMELINE_MILESTONES[activePhaseIndex];

  return (
    <div id="timeline-viewer-container" className="bg-[#121317] border border-[#222226] rounded-2xl p-5 md:p-8">
      <div className="flex flex-col md:flex-row items-baseline justify-between gap-2 mb-6">
        <div>
          <span className="text-[10px] text-[#00ffa2] font-mono border border-[#00c34f]/30 bg-[#00c34f]/10 rounded-full px-2 py-0.5 tracking-wider uppercase">
            3 oylik tezkor yo'l xoritasi
          </span>
          <h3 className="text-white font-bold text-xl mt-2 tracking-tight">Kafolatlangan Reja boyicha Ishlash</h3>
          <p className="text-xs text-gray-400">Har bir haftalik bosqich va yakuniy natijalar tizimi</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-300 font-mono">
          <Clock className="w-4 h-4 text-[#00c34f]" />
          <span>Muddati: 12 Hafta (3 Oy)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Visual Gantt Chart Panel */}
        <div className="lg:col-span-8 space-y-6 bg-[#18191e] border border-[#222226] p-5 rounded-xl">
          <div className="flex text-[10px] font-mono text-gray-400 border-b border-[#222226] pb-2">
            <div className="w-1/3">LOYIHA BOSQICHIDAGI ISHLAR</div>
            <div className="w-2/3 grid grid-cols-12 gap-1 text-center font-bold">
              <span className="col-span-2 text-left">M1 (UX)</span>
              <span className="col-span-4">M2 (DEV)</span>
              <span className="col-span-4">M3 (DEV/API)</span>
              <span className="col-span-2 text-right">M4 (LAUNCH)</span>
            </div>
          </div>

          <div className="space-y-4">
            {TIMELINE_MILESTONES.map((item, index) => (
              <button
                key={index}
                id={`timeline-phase-btn-${index}`}
                onClick={() => setActivePhaseIndex(index)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center gap-4 ${
                  activePhaseIndex === index
                    ? 'bg-[#121317] border-[#00c34f] ring-1 ring-[#00c34f]/30'
                    : 'bg-[#121317]/50 border-[#222226] hover:bg-[#1c1d22]'
                }`}
              >
                {/* Info block */}
                <div className="sm:w-1/3 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-brand-green' : index === 1 ? 'bg-brand-neon' : 'bg-cyan-400'}`} />
                    <span className="text-white font-semibold text-xs sm:text-sm line-clamp-1">{item.phase}</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 mt-1 block">{item.duration} DAVOMIYLIKDA</span>
                </div>

                {/* Progress bar visual mapping representing 12 coordinate slots */}
                <div className="w-full sm:w-2/3 bg-[#18191e] border border-[#222226] h-8 rounded-lg relative overflow-hidden flex items-center p-1">
                  <div className="w-full grid grid-cols-12 h-full absolute inset-0 opacity-10 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="border-r border-gray-400 h-full" />
                    ))}
                  </div>

                  {/* Offset & width mapping */}
                  <div
                    className={`h-full rounded-md ${item.color} flex items-center justify-center text-black font-black text-[10px] shadow-sm transition-all`}
                    style={{
                      marginLeft: `${(item.startOffset / 12) * 100}%`,
                      width: `${(item.width / 12) * 100}%`
                    }}
                  >
                    <span>{item.duration}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Grid coordinates indicator */}
          <div className="grid grid-cols-12 gap-1 text-[9px] font-mono text-gray-500 text-center border-t border-[#222226] pt-2">
            <span className="col-span-2 text-left">Hafta 1-2</span>
            <span className="col-span-2">Hafta 3-4</span>
            <span className="col-span-2">Hafta 5-6</span>
            <span className="col-span-2">Hafta 7-8</span>
            <span className="col-span-2">Hafta 9-10</span>
            <span className="col-span-2 text-right">Hafta 11-12</span>
          </div>
        </div>

        {/* Milestone Detail sidebar panel */}
        <div className="lg:col-span-4 bg-[#18191e] border border-[#222226] p-5 rounded-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-[#00ffa2] font-mono uppercase tracking-wider">Tanlangan Bosqich</p>
              <h4 className="text-white font-bold text-base mt-1">{activePhase.phase}</h4>
              <p className="text-xs text-gray-400 font-mono mt-0.5">Tezkor muddat: {activePhase.duration}</p>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#222226]">
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">AMALGA OSHIRILADIGAN LOYIHA TOPSHIRIQLARI:</p>
              
              <div className="space-y-2.5">
                {activePhase.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full border border-[#00c34f]/30 bg-[#00c34f]/5 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-[#00ffa2]" />
                    </div>
                    <span className="text-xs text-gray-300 leading-relaxed">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#222226]">
            <div className="bg-[#121317] border border-[#222226] p-3 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-400">FAZA SIFATI NAZORATI</p>
                <p className="text-xs text-[#00ffa2] font-semibold mt-0.5">QA Muhandislik Kafolati</p>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#00c34f]/10 text-[#00ffa2] border border-[#00c34f]/20">
                100% Sinov
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
