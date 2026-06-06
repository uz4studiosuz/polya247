import React, { useState } from 'react';
import { Smartphone, Database, MapPin, CreditCard, MessageSquare, Terminal, ShieldAlert, Check } from 'lucide-react';
import { TECH_STACK } from '../data';

export default function TechStackMap() {
  const [selectedTechId, setSelectedTechId] = useState<string>('flutter');
  const selectedTech = TECH_STACK.find(t => t.id === selectedTechId) || TECH_STACK[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone': return <Smartphone className="w-5 h-5 text-[#00ffa2]" />;
      case 'database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'map-pin': return <MapPin className="w-5 h-5 text-rose-500" />;
      case 'credit-card': return <CreditCard className="w-5 h-5 text-sky-400" />;
      case 'message-square': return <MessageSquare className="w-5 h-5 text-amber-500" />;
      default: return <Smartphone className="w-5 h-5 text-[#00ffa2]" />;
    }
  };

  // Provide a real technical code sample or query pattern associated with each technology to build genuine trust
  const getSimulatedCode = (id: string) => {
    switch (id) {
      case 'supabase': return `-- Double Booking (Bir xil vaqtni ikki marta band qilish) oldini olish
ALTER TABLE bookings ADD CONSTRAINT unique_stadium_slot 
EXCLUDE USING gist (
  stadium_id WITH =,
  booking_range WITH &&
);`;
      case 'flutter': return `// State boshqaruvi va o'yin slotini tanlash funksiyasi
void selectTimeSlot(String slotId) {
  setState(() {
    selectedSlot = slotId;
    isBookingAllowed = true;
  });
}`;
      case 'gmaps': return `// Yaqin atrofdagi futbol maydonlarini qidirish URL so'rovi
final String placesUrl = 
  'https://places.googleapis.com/v1/places:searchNearby';`;
      case 'payments': return `// Click onlayn kvitansiya yaratish tranzaksiyasi
const clickRequest = {
  service_id: 12450,
  merchant_trans_num: "booking_9420",
  amount: 12000000
};`;
      case 'sms': return `// Eskiz.uz orqali OTP autentifikatsiyasini jo'natish so'rovi
const payload = {
  mobile_phone: "998901234567",
  message: "Polya 24/7. Tasdiqlash kodi: 5849",
  from: "Polya247"
};`;
      default: return ``;
    }
  };

  return (
    <div id="tech-stack-container" className="bg-[#121317] border border-[#222226] rounded-2xl p-5 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg bg-[#00c34f]/10 flex items-center justify-center text-[#00ffa2] border border-[#00c34f]/20">
          <Terminal className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">Texnologiyalar & Arxitektura</h3>
          <p className="text-xs text-gray-400">Ishonchli xizmat ko'rsatish va ochiq integratsiya asosi</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Selection items list */}
        <div className="space-y-3.5">
          {TECH_STACK.map((tech) => (
            <button
              key={tech.id}
              id={`tech-select-btn-${tech.id}`}
              onClick={() => setSelectedTechId(tech.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                selectedTechId === tech.id
                  ? 'bg-[#18191e] border-[#00c34f] ring-1 ring-[#00c34f]/20'
                  : 'bg-[#121317]/50 border-[#222226] hover:bg-[#18191e]/50'
              }`}
            >
              <div className="p-2 bg-[#121317]/80 rounded-lg border border-[#222226] shrink-0">
                {getIcon(tech.icon)}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-500 uppercase font-mono font-bold tracking-wider">{tech.role}</span>
                <h4 className="text-white font-bold text-sm sm:text-base leading-none">{tech.name}</h4>
                <p className="text-xs text-gray-400 line-clamp-1">{tech.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed tech preview & architectural proof */}
        <div className="bg-[#18191e] border border-[#222226] p-5 rounded-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#00ffa2] font-mono border border-[#00c34f]/20 bg-[#00c34f]/10 px-2 py-0.5 rounded uppercase">
                  {selectedTech.category} Bosqichi
                </span>
                <h4 id="tech-detail-name" className="text-white font-extrabold text-lg mt-1">{selectedTech.name}</h4>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#121317] border border-[#222226] flex items-center justify-center">
                {getIcon(selectedTech.icon)}
              </div>
            </div>

            <p id="tech-detail-desc" className="text-xs text-gray-300 leading-relaxed pt-2">
              {selectedTech.description}
            </p>

            {/* List of custom benefits */}
            <div className="space-y-2 pt-2">
              <p className="text-[10px] font-mono text-gray-400 font-bold tracking-wider uppercase">AFZALLIKLARI:</p>
              {selectedTech.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#00c34f]/10 flex items-center justify-center text-[#00ffa2] shrink-0 border border-[#00c34f]/20">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Genuine API / DB constraints simulation screen */}
          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span>INTEGRATSIYA KOD METODI:</span>
              <span className="text-amber-500">Faol API</span>
            </div>
            <div className="bg-[#030303] border border-[#222226] p-3 rounded-lg overflow-x-auto">
              <pre id="tech-detail-code" className="text-[10px] sm:text-xs text-gray-400 font-mono leading-relaxed whitespace-pre font-medium">
                {getSimulatedCode(selectedTech.id)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
