import { ArrowUp, Award } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1f1f23] bg-[#030303] px-4 md:px-8 py-10 mt-16 text-center sm:text-left">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#00ffa2] font-black tracking-widest text-sm">
            <Award className="w-5 h-5 text-[#00c34f]" />
            <span>POLYA 24/7 KO'RSATUCHISIi</span>
          </div>
          <p className="text-xs text-gray-400 mt-1 max-w-sm">
            O'zbekistonda futbol tahlili va sport ko'rsatkichlarini avtomatlashtirish InnoHub IT & Uz4studios media hamkorligi orqali kiber-xavfsiz darajada kafolatlanadi.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-gray-500 font-mono">
          <span>Toshkent, O'zbekiston, 2026-bugungi kun</span>
          <span>Aloqa: admin@polya247.uz</span>
          <button
            id="footer-scroll-top-btn"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-lg bg-[#121317] border border-[#222226] text-gray-300 hover:text-[#00ffa2] hover:border-[#00c34f]/30 transition-colors cursor-pointer"
            title="Sivarga qaytish"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
