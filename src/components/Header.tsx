import { Sparkles, FileText, Settings, Play, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  viewMode: 'presentation' | 'landing';
  setViewMode: (mode: 'presentation' | 'landing') => void;
  stadiumCount: number;
}

export default function Header({ viewMode, setViewMode, stadiumCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#030303]/90 backdrop-blur-md border-b border-[#222226] px-4 md:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00c34f] to-[#121317] flex items-center justify-center border border-[#00c34f]/30 ring-2 ring-[#00c34f]/10 glow-btn-pulse">
          <span className="text-[#00ffa2] font-black tracking-tighter text-lg leading-none">P24</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-white font-bold tracking-tight text-base md:text-lg">Polya 24/7</h1>
            <span className="text-[10px] bg-[#00c34f]/10 text-[#00ffa2] font-mono px-1.5 py-0.5 rounded border border-[#00c34f]/20 uppercase">
              PROTOTIP
            </span>
          </div>
          <p className="text-xs text-gray-400 hidden sm:block">InnoHub & Uz4studios hamkorlik loyihasi</p>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          id="toggle-presentation-btn"
          onClick={() => setViewMode('presentation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            viewMode === 'presentation'
              ? 'bg-[#00c34f] text-black font-semibold shadow-[0_0_15px_rgba(0,195,79,0.3)]'
              : 'bg-[#121317] text-gray-300 hover:text-white border border-[#222226] hover:bg-[#1c1d22]'
          }`}
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Taqdimot Rejimi</span>
        </button>

        <button
          id="toggle-landing-btn"
          onClick={() => setViewMode('landing')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            viewMode === 'landing'
              ? 'bg-[#00c34f] text-black font-semibold shadow-[0_0_15px_rgba(0,195,79,0.3)]'
              : 'bg-[#121317] text-gray-300 hover:text-white border border-[#222226] hover:bg-[#1c1d22]'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Landing Sahifa</span>
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-4 text-xs font-mono">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#121317] border border-[#222226] text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#00ffa2] animate-ping" />
          <span>Maydonlar: {stadiumCount} ta</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <ShieldAlert className="w-4 h-4 text-amber-500" />
          <span>Kiber Xavfsiz</span>
        </div>
      </div>
    </header>
  );
}
