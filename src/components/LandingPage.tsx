import React from 'react';
import { 
  ArrowRight, ShieldCheck, MapPin, Sparkles, Smartphone, 
  Database, Zap, DollarSign, Users, Award, FileText 
} from 'lucide-react';

import { BUDGET_ITEMS } from '../data';
import UserJourneySimulator from './UserJourneySimulator';
import FinancialCalculator from './FinancialCalculator';
import TechStackMap from './TechStackMap';
import TimelineViewer from './TimelineViewer';
import ProposalForm from './ProposalForm';

interface LandingPageProps {
  stadiumCount: number;
  setStadiumCount: (count: number) => void;
  setViewMode: (mode: 'presentation' | 'landing') => void;
}

export default function LandingPage({ stadiumCount, setStadiumCount, setViewMode }: LandingPageProps) {
  return (
    <div id="landing-page-container" className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-[#18191e]">
        {/* Pitch light beam decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#00c34f]/10 via-transparent to-transparent pointer-events-none blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          <div className="inline-flex items-center gap-2 bg-[#00c34f]/10 border border-[#00c34f]/20 text-[#00ffa2] px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Futbol Maydonlarini 24/7 Avtomatlashtirish Platformasi</span>
          </div>

          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase font-sans">
            Polya 24/7 — O'zbekiston <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c34f] to-[#00ffa2]">Sport Ekotizimi</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Telefon qo'ng'iroqlari va tartibsizliklarni unuting. Atrofdagi futbol maydonlarini qidirish, real-vaqtda ochiq soatlarni ko'rish va onlayn bron qilish uchun yagona aqlli yechim.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="hero-go-presentation-btn"
              onClick={() => setViewMode('presentation')}
              className="w-full sm:w-auto bg-[#00c34f] hover:bg-[#00ffa2] text-black font-extrabold text-sm px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-[0_0_20px_rgba(0,195,79,0.3)] hover:shadow-[0_0_30px_rgba(0,195,79,0.45)]"
            >
              <span>Interaktiv taqdimotni ko'rish</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#landing-proposal"
              className="w-full sm:w-auto bg-[#121317] hover:bg-[#18191e] text-gray-300 hover:text-white border border-[#222226] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all text-center block"
            >
              Hamkorlik so'rovi jo'natish
            </a>
          </div>

          {/* Quick stats banner */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto pt-10 text-center">
            <div className="bg-[#121317] border border-[#222226] p-4 rounded-xl">
              <span className="text-gray-500 font-mono text-[10px] block uppercase">Muddati</span>
              <span className="text-white font-extrabold text-sm sm:text-lg font-mono">3 OY (12 HAFTA)</span>
            </div>
            <div className="bg-[#121317] border border-[#222226] p-4 rounded-xl">
              <span className="text-gray-500 font-mono text-[10px] block uppercase">Loyiha bahosi</span>
              <span className="text-[#00ffa2] font-extrabold text-sm sm:text-lg font-mono">$45,500</span>
            </div>
            <div className="col-span-2 md:col-span-1 bg-[#121317] border border-[#222226] p-4 rounded-xl flex flex-col justify-center items-center">
              <div className="flex items-center gap-1">
                <span className="text-gray-500 font-mono text-[10px] uppercase">Maydonlar (Simulyatorda):</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <input
                  id="landing-stadium-input"
                  type="number"
                  min={10}
                  max={2000}
                  step={10}
                  value={stadiumCount}
                  onChange={(e) => setStadiumCount(Math.max(10, Number(e.target.value)))}
                  className="bg-[#18191e] border border-[#222226] py-0.5 px-2 text-xs rounded text-[#00ffa2] font-mono w-16 text-center focus:outline-none focus:border-[#00c34f]"
                />
                <span className="text-white text-xs font-semibold">ta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS & SOLUTION SECTION (Bento Grid) */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs text-[#00ffa2] font-mono uppercase tracking-widest">Nega Polya 24/7?</span>
          <h2 className="text-white text-2xl sm:text-3.5xl font-black uppercase">Kamchiliklarni Bartaraf etish Tizimi</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">Biznes egalari va havaskorlarni kamsitishlardan qutqaramiz</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Problem 1 */}
          <div className="bg-[#121317] border border-[#222226] p-5 rounded-2xl space-y-3">
            <span className="text-2xl">⏳</span>
            <h4 className="text-white font-bold text-sm sm:text-base">Qo'shaloq bronlar qiyinchiligi</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Maydon egalari vaqtli ma'lumotlarni daftarda yoki telegram xabarlarida saqlashadi. Natijada bir soatlik slotga 2 ta jamoa kelib kelishmovchilik yuzaga keladi.
            </p>
          </div>

          {/* Card 2: Problem 2 */}
          <div className="bg-[#121317] border border-[#222226] p-5 rounded-2xl space-y-3">
            <span className="text-2xl">🔍</span>
            <h4 className="text-white font-bold text-sm sm:text-base">Yaqin atrofdagi bo'sh polyani topmaslik</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              O'yinchilar qayerda bo'sh joy borligini real-vaqtda ko'ra olmaydilar. Tartibsiz stadionlarni masofa bo'yicha saralash borasida xaritadagi qidiruv yo'q.
            </p>
          </div>

          {/* Card 3: Solution */}
          <div className="bg-gradient-to-br from-[#00c34f]/10 to-[#121317] border border-[#00c34f]/30 p-5 rounded-2xl space-y-3 shadow-md">
            <div className="w-8 h-8 rounded-full bg-[#00c34f] text-black font-black flex items-center justify-center text-xs">
              ✓
            </div>
            <h4 className="text-white font-extrabold text-sm sm:text-base">Polya 24/7 — Aqlli Avtomatlashtirish</h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Barcha maydon va bronlar real-vaqt rejimida Supabase ma'lumotlar omborida saqlanadi. Mijoz tezda to'lov qilgach, tizim avtomatik kvitansiya hamda QR rasm vaucherini jo'natadi.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SIMULATOR SECTION (User Journey) */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs text-[#00ffa2] font-mono uppercase tracking-widest"> Foydalanish tajribasi</span>
          <h2 className="text-white text-2xl sm:text-3xl font-black">Mobil Ilova Ishlash Tizimi</h2>
        </div>
        <UserJourneySimulator />
      </section>

      {/* 4. BUSINESS & MONETIZATION SECTION (Financial Sandbox) */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs text-[#00ffa2] font-mono uppercase tracking-widest">Moliya va Daromad</span>
          <h2 className="text-white text-2xl sm:text-3xl font-black">Investitsiya va Daromad Baholanishi</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto">Slayderlarni o'zgartirib Polya 24/7 qanday daromad topishini sinab ko'ring</p>
        </div>
        <FinancialCalculator initialStadiums={stadiumCount} />
      </section>

      {/* 5. ROADMAP & GANTT SECTION (Linear Timeline) */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs text-[#00ffa2] font-mono uppercase tracking-widest">Marta & Muddat</span>
          <h2 className="text-white text-2xl sm:text-3xl font-black">Loyiha Rejasi va Ish Grafiklari</h2>
        </div>
        <TimelineViewer />
      </section>

      {/* 6. TECHNOLOGY STACK CIRCUIT SECTION */}
      <section className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs text-[#00ffa2] font-mono uppercase tracking-widest">Xavfsiz va Kuchli Dastur</span>
          <h2 className="text-white text-2xl sm:text-3xl font-black">Arxitektura va Texnik Integratsiyalar</h2>
        </div>
        <TechStackMap />
      </section>

      {/* 7. DETAILED SMETA BUDGET SECTION */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs text-[#00ffa2] font-mono uppercase tracking-widest">Baholash turlari</span>
          <h2 className="text-white text-2xl sm:text-3.5xl font-black">Sarf-Xarajatlar Batafsil Smetasi</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">1-Faza MVP (Tezkor va to'liq ishonchli tizim) uchun jami $45,500 byujet o'zgarishi:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUDGET_ITEMS.map((item, idx) => (
            <div key={idx} className="bg-[#121317] border border-[#222226] p-5 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] text-gray-500 font-mono font-bold block uppercase">QISMAT {idx + 1}</span>
                <h4 className="text-white font-bold text-sm sm:text-base leading-none">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed pt-1">{item.description}</p>
              </div>
              <div className="pt-3 border-t border-[#1f1f23] flex items-baseline justify-between">
                <span className="text-gray-500 text-[10px] font-mono">Baxosi:</span>
                <span className="text-[#00ffa2] font-mono font-extrabold text-base">${item.cost.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION / PROPOSAL SUBMIT FORM */}
      <section id="landing-proposal" className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs text-[#00ffa2] font-mono uppercase tracking-widest">Xamkorlikni boshlash</span>
          <h2 className="text-white text-2xl sm:text-3xl font-black uppercase">Kelajak maydonini xarid qiling</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">O'zbekistonda futbol tizimini yangi raqamli bosqichga ko'tarishga start bering</p>
        </div>
        <ProposalForm />
      </section>

    </div>
  );
}
