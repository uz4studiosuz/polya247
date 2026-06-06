import React, { useState } from 'react';
import { SLIDES } from '../data';
import { 
  ChevronLeft, ChevronRight, Play, Maximize2, 
  Layers, Info, Award, Calendar, DollarSign, Terminal, 
  MapPin, Clock, ArrowRight, UserCheck, ShieldAlert 
} from 'lucide-react';

// Custom sub-components
import UserJourneySimulator from './UserJourneySimulator';
import FinancialCalculator from './FinancialCalculator';
import TechStackMap from './TechStackMap';
import TimelineViewer from './TimelineViewer';
import ProposalForm from './ProposalForm';

interface SlideViewerProps {
  stadiumCount: number;
}

export default function SlideViewer({ stadiumCount }: SlideViewerProps) {
  const [activeSlideId, setActiveSlideId] = useState<number>(1);
  const activeSlide = SLIDES.find(s => s.id === activeSlideId) || SLIDES[0];

  const handleNext = () => {
    setActiveSlideId(prev => (prev < SLIDES.length ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setActiveSlideId(prev => (prev > 1 ? prev - 1 : SLIDES.length));
  };

  // Map category to a styled tag
  const getCategoryTag = (category: string) => {
    switch (category) {
      case 'business':
        return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase">Biznes</span>;
      case 'tech':
        return <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase">Texnik</span>;
      case 'process':
        return <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase">Bosqichlar</span>;
      case 'finance':
        return <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase">Moliya & ROI</span>;
      default:
        return <span className="bg-[#00c34f]/10 text-[#00ffa2] border border-[#00c34f]/20 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase">Umumiy</span>;
    }
  };

  return (
    <div id="slide-viewer-main" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Slide Navigation Index Column */}
      <div className="lg:col-span-3 space-y-2 order-2 lg:order-1">
        <div className="p-3 bg-[#121317] border border-[#222226] rounded-xl flex items-center justify-between">
          <span className="text-xs font-mono text-gray-400 font-bold">TAQDIMOT SAHIFALARI ({SLIDES.length})</span>
          <span className="text-[10px] font-mono text-[#00ffa2] bg-[#00c34f]/10 px-1.5 py-0.5 rounded">
            Faza 1 Tasdiq
          </span>
        </div>

        <div className="space-y-1.5 max-h-[380px] lg:max-h-[640px] overflow-y-auto pr-1">
          {SLIDES.map((slide) => {
            const isSelected = slide.id === activeSlideId;
            return (
              <button
                key={slide.id}
                id={`slide-nav-index-${slide.id}`}
                onClick={() => setActiveSlideId(slide.id)}
                className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#18191e] border-[#00c34f] text-white shadow-sm ring-1 ring-[#00c34f]/20'
                    : 'bg-[#121317]/60 border-[#1f1f23] text-gray-400 hover:text-gray-200 hover:bg-[#18191e]/40'
                }`}
              >
                <span className={`w-6 h-6 rounded-lg font-mono font-black text-xs flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-[#00c34f] text-black shadow-sm' : 'bg-[#18191e] border border-[#222226] text-gray-400'
                }`}>
                  {slide.id}
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className={`text-xs font-bold leading-tight truncate ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {slide.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 truncate leading-none mt-0.5">{slide.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Presentation Viewport Canvas */}
      <div className="lg:col-span-9 space-y-6 order-1 lg:order-2">
        <div className="bg-[#121317] border border-[#222226] rounded-2xl p-5 md:p-8 relative min-h-[460px] flex flex-col justify-between overflow-hidden shadow-2xl">
          
          {/* Dynamic Background visual styling for aesthetic sports branding */}
          <div className="absolute inset-0 bg-radial from-[#00c34f]/5 via-transparent to-transparent pointer-events-none opacity-60" />

          {/* Slide Header area */}
          <div className="flex justify-between items-start gap-4 border-b border-[#222226] pb-4 z-10">
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono font-bold text-gray-500">SAYT SAHIFASI {activeSlide.id}/{SLIDES.length}</span>
                {getCategoryTag(activeSlide.category)}
              </div>
              <h2 id="slide-main-title" className="text-white font-extrabold text-2xl sm:text-3xl mt-1.5 tracking-tight font-sans">
                {activeSlide.title}
              </h2>
              <p id="slide-main-subtitle" className="text-sm text-gray-400 font-medium font-sans mt-0.5">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* InnoHub watermark branding */}
            <div className="hidden sm:block text-right">
              <span className="text-[10px] font-mono text-gray-400 leading-tight block uppercase">InnoHub IT</span>
              <span className="text-[11px] font-mono text-[#00ffa2] font-black tracking-widest leading-none">POLYA 24/7</span>
            </div>
          </div>

          {/* Slide Body / Dynamic Content Area */}
          <div className="py-6 flex-1 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Written bullets columns */}
              <div className="space-y-5">
                <p id="slide-main-desc" className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                  {activeSlide.description}
                </p>

                {activeSlide.bulletPoints && (
                  <ul className="space-y-3 pt-2">
                    {activeSlide.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#00c34f]/10 border border-[#00c34f]/30 flex items-center justify-center text-[#00ffa2] shrink-0 mt-0.5 font-bold">
                          ✓
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Visual hotlinked image with referrerPolicy mapping to pass image generation guide details */}
              <div className="flex justify-center">
                {activeSlide.image ? (
                  <div className="relative group border border-[#222226] rounded-xl overflow-hidden aspect-video bg-[#030303] flex items-center justify-center shadow-lg w-full max-w-[420px]">
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.imageAlt || activeSlide.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/70 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-2 text-[8px] font-mono text-gray-400 uppercase tracking-wider bg-[#121317]/90 px-1.5 py-0.5 rounded border border-[#222226]">
                      Loyiha vizuallashuvi
                    </span>
                  </div>
                ) : (
                  <div className="w-full max-w-[420px] aspect-video rounded-xl bg-gradient-to-br from-[#121317] to-[#18191e] border border-[#222226] flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-mono uppercase">Vizual tasvir</span>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Slide Footer Control Panels */}
          <div className="flex items-center justify-between border-t border-[#222226] pt-4 z-10 flex-col sm:flex-row gap-4">
            <div className="text-[11px] text-gray-500 font-mono">
              Keyboard ◄ / ► or click button tags to flip pages
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                id="slide-control-prev"
                onClick={handlePrev}
                className="p-2 rounded-xl bg-[#18191e] hover:bg-[#202127] text-white transition-colors border border-[#222226]"
                title="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono text-gray-300 bg-[#18191e] border border-[#222226] px-3 py-1.5 rounded-lg">
                Sahifa <strong className="text-[#00ffa2]">{activeSlide.id}</strong> / {SLIDES.length}
              </span>

              <button
                id="slide-control-next"
                onClick={handleNext}
                className="p-2 rounded-xl bg-[#18191e] hover:bg-[#202127] text-white transition-colors border border-[#222226] flex items-center gap-1.5"
                title="Next Slide"
              >
                <span className="text-xs font-bold pl-1 hidden sm:inline">KIRIYOTGAN</span>
                <ChevronRight className="w-5 h-5 text-[#00ffa2]" />
              </button>
            </div>
          </div>

        </div>

        {/* Immersive Sub-Modules Embed Panels based on Slide sequence */}
        <div className="animate-fade-in space-y-4">
          
          {/* Embedding user flow simulator inside Step Journey slide (Slide 3) */}
          {activeSlideId === 3 && (
            <div className="space-y-2">
              <div className="border border-amber-500/30 bg-amber-500/5 p-3 rounded-xl text-xs text-gray-300">
                ⚡ <strong>Interaktiv qism:</strong> Tepadagi mockuplar isboti sifatida, ushbu mobil simulyator orqali mijoz qadamlarini o'zingiz bosib ko'ring!
              </div>
              <UserJourneySimulator />
            </div>
          )}

          {/* Embedding Financial Calculator inside Business Slide (Slide 4) or Financial Specs Slide (Slide 7) */}
          {(activeSlideId === 4 || activeSlideId === 7) && (
            <div className="space-y-2">
              <div className="border border-emerald-500/30 bg-emerald-500/5 p-3 rounded-xl text-xs text-gray-300">
                💵 <strong>Interaktiv qism:</strong> Loyihani ROI (Investitsion qaytimi) va oylik daromadini ushbu simulyatorda maydonlarni ko'paytirib hisoblang!
              </div>
              <FinancialCalculator initialStadiums={stadiumCount} />
            </div>
          )}

          {/* Embedding Tech stack circuit details inside Slide 6 */}
          {activeSlideId === 6 && (
            <div className="space-y-2">
              <div className="border border-blue-500/30 bg-blue-500/5 p-3 rounded-xl text-xs text-gray-300">
                🛠️ <strong>Interaktiv qism:</strong> Quyidagi tugmalar orqali xavfsizlik va ma'lumotlar ombori uchun haqiqiy kodlarni o'rganing!
              </div>
              <TechStackMap />
            </div>
          )}

          {/* Embedding Gantt visual roadmap timelines inside schedule Slide (Slide 8) */}
          {activeSlideId === 8 && (
            <div className="space-y-2">
              <div className="border border-[#00ffa2]/30 bg-[#00ffa2]/5 p-3 rounded-xl text-xs text-gray-300">
                📅 <strong>Interaktiv qism:</strong> Haftalik muddatlar grafik bloklariga bosib batafsil vazifalar ro'yxatini yuklang!
              </div>
              <TimelineViewer />
            </div>
          )}

          {/* Embedding final onboarding partnership form inside slide 9 */}
          {activeSlideId === 9 && (
            <div className="space-y-2">
              <div className="border border-emerald-500/35 bg-emerald-500/5 p-3 rounded-xl text-xs text-gray-300">
                🤝 <strong>Hamkorlikni boshlaymiz!</strong> Ushbu formani ismingiz bilan to'ldirish orqali yakuniy TZ tasdiqlash jarayonini safarbar eting!
              </div>
              <ProposalForm />
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
