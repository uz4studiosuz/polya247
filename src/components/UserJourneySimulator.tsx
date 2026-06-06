import React, { useState } from 'react';
import { Smartphone, CheckCircle, MapPin, Calendar, Clock, CreditCard, Send, RefreshCw, Star } from 'lucide-react';

interface MockStadium {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

const MOCK_STADIUMS: MockStadium[] = [
  { id: 'std1', name: "Bunyodkor Premium Arena", location: "Targoviy, Chilonzor 6-daha", price: 150000, rating: 4.9, image: "⚽" },
  { id: 'std2', name: "Paxtakor Mini-Arena", location: "Shevchenko ko'chasi 15", price: 130000, rating: 4.7, image: "🏟️" },
  { id: 'std3', name: "Chilonzor Sport Kompleksi", location: "Lutfiy ko'chasi", price: 120000, rating: 4.6, image: "🥅" },
  { id: 'std4', name: "Yunusobod Bunyodkor Polya", location: "Yunusobod 4-mavze", price: 110000, rating: 4.5, image: "🟢" }
];

const MOCK_SLOTS = [
  { id: 's1', time: "18:00 - 19:00", available: true },
  { id: 's2', time: "19:00 - 20:00", available: false },
  { id: 's3', time: "20:00 - 21:00", available: true },
  { id: 's4', time: "21:00 - 22:00", available: true },
  { id: 's5', time: "22:00 - 23:00", available: false },
  { id: 's6', time: "23:00 - 00:00", available: true }
];

export default function UserJourneySimulator() {
  const [step, setStep] = useState<number>(1); // Current active step: 1, 2, 3, 4, 5 (Complete)
  
  // State elements
  const [phoneNumber, setPhoneNumber] = useState<string>('901234567');
  const [otpCode, setOtpCode] = useState<string>('');
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otpVerified, setOtpVerified] = useState<boolean>(false);
  
  const [selectedStadium, setSelectedStadium] = useState<MockStadium>(MOCK_STADIUMS[0]);
  const [selectedSlot, setSelectedSlot] = useState<string>('s3');
  const [paymentMethod, setPaymentMethod] = useState<'click' | 'payme'>('click');

  // handlers
  const handleSendOtp = () => {
    if (!phoneNumber) return;
    setOtpSent(true);
    // Auto populate code for easy simulation
    setTimeout(() => {
      setOtpCode('5849');
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (otpCode === '5849') {
      setOtpVerified(true);
      setTimeout(() => {
        setStep(2);
      }, 1200);
    }
  };

  const activeTimeSlotDetail = MOCK_SLOTS.find(s => s.id === selectedSlot)?.time || "20:00 - 21:00";

  const handleReset = () => {
    setStep(1);
    setOtpSent(false);
    setOtpVerified(false);
    setOtpCode('');
  };

  return (
    <div id="user-journey-simulator-container" className="bg-[#121317] border border-[#222226] rounded-2xl p-5 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-[10px] text-[#00ffa2] font-mono border border-[#00c34f]/30 bg-[#00c34f]/10 rounded-full px-2.5 py-1 tracking-wider uppercase">
            Interaktiv Foydalanuvchi Flow Simulyatori
          </span>
          <h3 className="text-white font-bold text-xl mt-2 tracking-tight">Mijoz O'yin Joyini Qanday Bron Qiladi?</h3>
          <p className="text-xs text-gray-400">4 ta oddiy qadamli mobil arxitektura vizualizatsiyasi</p>
        </div>
        <button
          id="simulator-reset-btn"
          onClick={handleReset}
          className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#00ffa2] transition-colors border border-[#222226] hover:border-[#00c34f]/30 px-3 py-1.5 rounded-lg bg-[#18191e]"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Qayta boshlash</span>
        </button>
      </div>

      {/* Progress sequence status indicator bar */}
      <div className="grid grid-cols-4 gap-2 mb-8 text-center text-[10px] sm:text-xs font-mono">
        {[
          { label: "1. Autentifikatsiya", stepNo: 1 },
          { label: "2. Maydon tanlash", stepNo: 2 },
          { label: "3. Slot & Vaqt", stepNo: 3 },
          { label: "4. Kvitansiya & QR", stepNo: 4 }
        ].map((item, idx) => (
          <div
            key={idx}
            className={`pb-2.5 border-b-2 transition-colors ${
              step >= item.stepNo ? 'border-[#00c34f] text-[#00ffa2] font-semibold' : 'border-[#222226] text-gray-400'
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* simulated iPhone Screen container */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-[290px] aspect-[9/18.5] bg-[#030303] border-[6px] border-[#222226] rounded-[36px] overflow-hidden flex flex-col justify-between shadow-2xl relative">
            
            {/* Phone speaker notch */}
            <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-20">
              <div className="w-20 h-3 bg-[#222226] rounded-b-xl flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#030303] mr-2" />
                <span className="w-6 h-0.5 bg-gray-600 rounded-full" />
              </div>
            </div>

            {/* Simulated Phone Content area */}
            <div className="pt-7 px-4 pb-4 flex-1 flex flex-col justify-between overflow-y-auto">
              
              {/* Simulated Status Bar info */}
              <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 mb-4 px-1">
                <span>09:41</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="w-3.5 h-2 border border-gray-500 rounded-sm p-px flex items-center">
                    <div className="h-full w-2 bg-[#00ffa2] rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Step 1 Content: Login screen */}
              {step === 1 && (
                <div className="flex-1 flex flex-col justify-center space-y-4">
                  <div className="text-center space-y-1">
                    <span className="text-2xl">📱</span>
                    <h5 className="text-white font-bold text-sm tracking-tight">Tizimga Kirish</h5>
                    <p className="text-[10px] text-gray-400">Raqamni tasdiqlash (Eskiz.uz API)</p>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-[#121317] border border-[#222226] rounded-xl p-2 flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-400 shrink-0">+998</span>
                      <input
                        id="sim-phone-input"
                        type="tel"
                        maxLength={9}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        className="bg-transparent text-xs text-white focus:outline-none w-full font-mono"
                        placeholder="Raqamingiz"
                      />
                    </div>

                    {!otpSent ? (
                      <button
                        id="sim-send-otp-btn"
                        onClick={handleSendOtp}
                        className="w-full bg-[#00c34f] text-black font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors hover:bg-[#00ffa2]"
                      >
                        <Send className="w-3 h-3" />
                        <span>Kodni Olish</span>
                      </button>
                    ) : (
                      <div className="space-y-2 pt-2 animate-fade-in">
                        <div className="bg-[#121317] border border-[#222226] rounded-xl p-2.5 flex items-center justify-between">
                          <input
                            id="sim-otp-input"
                            type="text"
                            maxLength={4}
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                            className="bg-transparent text-xs text-white text-center focus:outline-none w-full tracking-widest font-mono font-bold"
                            placeholder="Sms Code"
                          />
                        </div>
                        <button
                          id="sim-verify-otp-btn"
                          onClick={handleVerifyOtp}
                          className="w-full bg-emerald-400 hover:bg-[#00ffa2] text-black font-bold text-xs py-2 rounded-xl transition-all"
                        >
                          {otpVerified ? "Tasdiqlandi! ✓" : "Kirishni Tasdiqlash"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 Content: Stadium choosing */}
              {step === 2 && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="text-white text-xs font-bold font-mono">1. Maydon tanlang:</h5>
                      <span className="text-[9px] text-[#00ffa2] font-mono">Toshkent</span>
                    </div>

                    <div className="space-y-2 overflow-y-auto max-h-[160px] pr-0.5">
                      {MOCK_STADIUMS.map((stadium) => (
                        <button
                          key={stadium.id}
                          id={`sim-stadium-card-${stadium.id}`}
                          onClick={() => setSelectedStadium(stadium)}
                          className={`w-full text-left p-2 rounded-xl transition-all border flex items-center gap-2.5 ${
                            selectedStadium.id === stadium.id
                              ? 'bg-[#121317] border-[#00c34f]'
                              : 'bg-transparent border-[#1f1f23] hover:border-gray-700'
                          }`}
                        >
                          <span className="text-lg bg-[#1a1b20] w-7 h-7 rounded-lg flex items-center justify-center border border-[#2c2d33]">{stadium.image}</span>
                          <div className="flex-1 min-w-0">
                            <h6 className="text-[11px] text-white font-bold leading-tight truncate">{stadium.name}</h6>
                            <div className="flex items-center justify-between mt-0.5">
                              <span className="text-[9px] text-[#00ffa2] font-mono leading-none">{stadium.price.toLocaleString()} so'm/soat</span>
                              <div className="flex items-center text-[9px] text-amber-400 font-mono">
                                <Star className="w-2.5 h-2.5 fill-current" />
                                <span className="leading-none pt-0.5">{stadium.rating}</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    id="sim-stadium-next-btn"
                    onClick={() => setStep(3)}
                    className="w-full bg-[#00c34f] text-black font-bold text-xs py-2 rounded-xl mt-3 flex items-center justify-center gap-1 hover:bg-[#00ffa2]"
                  >
                    <span>Vaqt tanlashga o'tish</span>
                    <span>→</span>
                  </button>
                </div>
              )}

              {/* Step 3 Content: Select free time slot */}
              {step === 3 && (
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h5 className="text-white text-xs font-bold font-mono mb-1">2. O'yin vaqtini belgilang:</h5>
                    <p className="text-[9px] text-gray-500 font-mono mb-2">{selectedStadium.name}</p>

                    <div className="grid grid-cols-2 gap-2 max-h-[140px] overflow-y-auto pr-0.5">
                      {MOCK_SLOTS.map((slot) => (
                        <button
                          key={slot.id}
                          id={`sim-slot-btn-${slot.id}`}
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot.id)}
                          className={`p-2 rounded-lg border text-center font-mono text-[10px] transition-all flex flex-col items-center justify-center ${
                            !slot.available
                              ? 'bg-transparent border-[#1f1f23] text-gray-600 line-through cursor-not-allowed'
                              : selectedSlot === slot.id
                              ? 'bg-[#00c34f]/20 border-[#00c34f] text-[#00ffa2] font-bold shadow-sm'
                              : 'bg-transparent border-[#222226] text-gray-300 hover:border-gray-700'
                          }`}
                        >
                          <span>{slot.time}</span>
                          <span className="text-[8px] opacity-75 mt-0.5">{slot.available ? "Ochiq ✓" : "Band ✗"}</span>
                        </button>
                      ))}
                    </div>

                    {/* Integrated Choose Payment Gateway */}
                    <div className="mt-3.5 pt-3 border-t border-[#1f1f23] space-y-1.5 text-left">
                      <p className="text-[10px] font-mono text-gray-400">To'lov usuli:</p>
                      <div className="flex gap-2">
                        <button
                          id="sim-payment-click"
                          onClick={() => setPaymentMethod('click')}
                          className={`flex-1 text-center py-1.5 rounded text-[10px] font-mono font-bold transition-all border ${
                            paymentMethod === 'click'
                              ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                              : 'bg-[#121317] border-gray-800 text-gray-500'
                          }`}
                        >
                          CLICK
                        </button>
                        <button
                          id="sim-payment-payme"
                          onClick={() => setPaymentMethod('payme')}
                          className={`flex-1 text-center py-1.5 rounded text-[10px] font-mono font-bold transition-all border ${
                            paymentMethod === 'payme'
                              ? 'bg-[#00c34f]/20 border-[#00c34f] text-[#00ffa2]'
                              : 'bg-[#121317] border-gray-800 text-gray-500'
                          }`}
                        >
                          PAYME
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    id="sim-payment-execute-btn"
                    onClick={() => setStep(4)}
                    className="w-full bg-[#00c34f] text-black font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1 mt-3 hover:bg-[#00ffa2]"
                  >
                    <span>To'lov qilish: {selectedStadium.price.toLocaleString()} s</span>
                  </button>
                </div>
              )}

              {/* Step 4 Content: Booking Voucher and QR */}
              {step === 4 && (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-col items-center text-center space-y-1">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-[#00ffa2] border border-[#00c34f]/30 flex items-center justify-center">
                        ✓
                      </div>
                      <h6 className="text-white text-xs font-bold font-mono">Muvaffaqiyatli Bron qilindi!</h6>
                      <p className="text-[8px] text-gray-400 font-mono">SMS kvitansiya telefoningizga jo'natildi</p>
                    </div>

                    {/* Sports coupon design */}
                    <div className="bg-[#121317] border border-[#222226] rounded-xl p-3 space-y-2 text-[10px] font-mono relative">
                      {/* Side dots cutouts representing tickets */}
                      <div className="absolute top-1/2 -left-2 w-3.5 h-3.5 bg-[#030303] rounded-full border border-r-[#222226]" />
                      <div className="absolute top-1/2 -right-2 w-3.5 h-3.5 bg-[#030303] rounded-full border border-l-[#222226]" />

                      <div>
                        <p className="text-gray-500 text-[8px] uppercase">MAYDON NOMİ</p>
                        <p className="text-white font-bold leading-tight">{selectedStadium.name}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-[#1f1f23]">
                        <div>
                          <p className="text-gray-500 text-[8px]">VAQT VA SOAT</p>
                          <p className="text-gray-300 font-bold text-[9px] truncate">{activeTimeSlotDetail}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-[8px]">AMALIYOT SUMMASI</p>
                          <p className="text-[#00ffa2] font-bold text-[9px]">{selectedStadium.price.toLocaleString()} UZS</p>
                        </div>
                      </div>

                      {/* Mock QR barcode container */}
                      <div className="pt-2 border-t border-[#1f1f23]/60 flex flex-col items-center">
                        <div className="bg-white p-1 rounded">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                            alt="Mock booking voucher QR details"
                            className="w-14 h-14"
                          />
                        </div>
                        <span className="text-[7px] text-gray-500 mt-1 uppercase">KOD: P247-B94-T10</span>
                      </div>
                    </div>
                  </div>

                  <button
                    id="sim-new-booking-btn"
                    onClick={handleReset}
                    className="w-full bg-[#18191e] hover:bg-[#2c2d33] border border-[#222226] text-white text-[11px] py-1.5 rounded-lg font-mono"
                  >
                    Yangi o'yin bron qilish
                  </button>
                </div>
              )}

            </div>

            {/* Simulated iPhone home screen bottom line indicator */}
            <div className="h-4 pb-2.5 flex justify-center z-20">
              <div className="w-24 h-1 bg-gray-500 rounded-full" />
            </div>

          </div>
        </div>

        {/* Step-by-step description with Interactive click overrides */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Tafsilotlar & Mobil interaktiv sinov paneli</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Biznesingizning asosiy qiymati shundaki, mijoz 1 daqiqadan kam vaqt ichida o'ziga yaqin stadionni tanlab onlayn to'laydi. Maydon egasi esa telefon qo'ng'irog'isiz, real-vaqtda boshqaruv darchasida yoki Telegram botida band bo'lgan slotni tasdiqlanganini ko'radi.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { stepNo: 1, name: "Tezkor Kirish & OTP (SMS Gateway)", desc: "Xurmatli mijozlar telefon raqamlari orqali ishonchli kirishadi. SMS generator kodlarni real-vaqtda boshqaradi. Eskiz API bilan bog'langan." },
                { stepNo: 2, name: "Aqlli Maydonlar Filtr Tizimi", desc: "Joylashuv (GPS), tuman va narxlari bo'yicha saralash bor. Istalgan stadionni xaritada darhol ko'rishadi." },
                { stepNo: 3, name: "Band bo'lmagan real-vaqt slotlari xronologiyasi", desc: "Maydon egalari panelining DB ma'lumotlariga bog'langan. Haqiqiy vaqt slotlari orqali qo'shaloq bron va kelishmovchilik butunlay yo'q qilinadi." },
                { stepNo: 4, name: "Kvitansiya va Autentik QR vaucher", desc: "Darhol shifr etilgan qisqa kvitansiyali QR kod hosil qilinadi. Boshlovchilar buni o'yindan oldin stadion ma'muriga ko'rsatishadi." }
              ].map((item, index) => (
                <button
                  key={index}
                  id={`simulator-step-trigger-${item.stepNo}`}
                  onClick={() => setStep(item.stepNo)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex gap-3.5 ${
                    step === item.stepNo
                      ? 'bg-[#00c34f]/5 border-[#00c34f]/40 ring-1 ring-[#00c34f]/10'
                      : 'bg-[#18191e] border-[#222226] hover:bg-[#121317]'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-black text-xs shrink-0 ${
                    step === item.stepNo ? 'bg-[#00c34f] text-black' : 'bg-[#121317] text-gray-400 border border-[#222226]'
                  }`}>
                    {item.stepNo}
                  </span>
                  <div>
                    <h5 className="text-white font-bold text-xs sm:text-sm">{item.name}</h5>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#18191e] border border-[#222226] p-4 rounded-xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#00c34f]/10 border border-[#00c34f]/20 flex items-center justify-center text-[#00ffa2] shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <p className="text-xs text-white font-semibold">Ushbu dastur uchun maxsus Telegram bot integratsiya qilinadi</p>
              <p className="text-[10px] text-gray-400">Futbol maydoni ma'murlari har bir muvaffaqiyatli bandlik haqida Telegramda lahzali bildirishnomalar olishadi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
