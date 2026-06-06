import React, { useState } from 'react';
import { Send, CheckCircle, Terminal, HelpCircle, FileText, Star, Briefcase } from 'lucide-react';

export default function ProposalForm() {
  const [name, setName] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [budget, setBudget] = useState<string>('45500');
  const [telegramNotification, setTelegramNotification] = useState<boolean>(true);
  const [smsGateway, setSmsGateway] = useState<boolean>(true);
  const [comments, setComments] = useState<string>('');
  
  // Submit actions
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    setSubmitting(true);
    setLogs([]);

    const streamLogs = [
      "🔄 Polya 24/7 xavfsiz tizim bilan ulanmoqda...",
      "⚙️ Eskiz.uz bildirishnoma protokoli tekshirilmoqda...",
      "💰 $ " + Number(budget).toLocaleString() + " smeta bo'yicha loyiha tahlili o'tkazilmoqda...",
      "📅 12 haftalik (3 oylik) bosqichli muddatlar xaritasi rejalashtirilyapti...",
      "🔋 Click va Payme to'lov API sozlamalari bog'landi...",
      "⚡ Loyiha talabnomasi tayyorlandi! InnoHub ga uzatilmoqda..."
    ];

    // Stream logs for beautiful high fidelity visual feedback
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < streamLogs.length) {
        setLogs(prev => [...prev, streamLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setSubmitting(false);
          setSubmitted(true);
        }, 1200);
      }
    }, 450);
  };

  return (
    <div id="proposal-form-container" className="bg-[#121317] border border-[#222226] rounded-2xl p-5 md:p-8 relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#00c34f]/5 to-transparent rounded-full pointer-events-none" />

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00c34f]/10 flex items-center justify-center text-[#00ffa2] border border-[#00c34f]/20">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Hamkorlikni Boshlash</h3>
              <p className="text-xs text-gray-400">Bizga o'z talablaringizni qoldiring, biz shaxsiy TZ (Texnik Topshiriq) tayyorlaymiz</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Input Name */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 block uppercase">Ism va Familiyangiz *</label>
              <input
                id="form-name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masalan: Sardor Rahimov"
                className="w-full bg-[#18191e] border border-[#222226] focus:border-[#00c34f] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#00c34f]/30 font-sans"
              />
            </div>

            {/* Input Organization */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 block uppercase">Tashkilot yoki Stadion nomi</label>
              <input
                id="form-org-input"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Masalan: Milliy Arena egasi"
                className="w-full bg-[#18191e] border border-[#222226] focus:border-[#00c34f] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#00c34f]/30 font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Budget Tier Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 block uppercase">Kerakli Loyiha Smeta Turi</label>
              <select
                id="form-budget-select"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-[#18191e] border border-[#222226] focus:border-[#00c34f] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#00c34f]/30 font-sans"
              >
                <option value="35000">Faqat MVP (Mobil Ilovalar) - $35,000</option>
                <option value="45500">Tavsiya etilgan jami paket - $45,500</option>
                <option value="60000">Kengaytirilgan to'liq tizim (1&2-faza) - $60,000</option>
              </select>
            </div>

            {/* Custom checkboxes for integrations */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 block uppercase">Sizga kerakli qo'shimcha integratsiyalar</label>
              <div className="flex flex-wrap gap-3 pt-1">
                <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer select-none">
                  <input
                    id="chk-tg-bot"
                    type="checkbox"
                    checked={telegramNotification}
                    onChange={(e) => setTelegramNotification(e.target.checked)}
                    className="accent-[#00c34f] rounded border-gray-800"
                  />
                  <span>Telegram Bot</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer select-none">
                  <input
                    id="chk-sms-gateway"
                    type="checkbox"
                    checked={smsGateway}
                    onChange={(e) => setSmsGateway(e.target.checked)}
                    className="accent-[#00c34f] rounded border-gray-800"
                  />
                  <span>Eskiz.uz SMS</span>
                </label>
              </div>
            </div>
          </div>

          {/* Comments and details */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-400 block uppercase">Qo'shimcha istaklar (Agar bor bo'lsa)</label>
            <textarea
              id="form-comments-input"
              rows={2}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Masalan: Toshkent va Samarqand shaharlarida 100 ta maydon bepul bog'lanishi kerak..."
              className="w-full bg-[#18191e] border border-[#222226] focus:border-[#00c34f] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#00c34f]/30 font-sans"
            />
          </div>

          {/* Submit and Logs area */}
          <div className="space-y-4 pt-2">
            {!submitting ? (
              <button
                id="form-submit-btn"
                type="submit"
                className="w-full bg-[#00c34f] text-black font-extrabold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-[#00ffa2] hover:shadow-[0_0_20px_rgba(0,195,79,0.3)] duration-200"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>Loyihani Boshlash uchun Talabnoma bering</span>
              </button>
            ) : (
              <div className="bg-[#030303] border border-[#222226] p-4 rounded-xl font-mono text-[11px] text-gray-400 space-y-1.5 animate-pulse">
                <div className="flex items-center gap-2 text-[#00ffa2] mb-2 font-bold select-none">
                  <Terminal className="w-4 h-4" />
                  <span>TEXNIK PROSES CHIZILMOQDA...</span>
                </div>
                {logs.map((log, index) => (
                  <div key={index} className="animate-fade-in">{log}</div>
                ))}
              </div>
            )}
          </div>
        </form>
      ) : (
        <div className="text-center py-8 space-y-5 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-[#00c34f]/30 text-[#00ffa2] flex items-center justify-center mx-auto text-3xl">
            ✓
          </div>
          <div className="space-y-2">
            <h4 id="form-success-title" className="text-white text-xl font-bold">Talabnomangiz muvaffaqiyatli jo'natildi!</h4>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
              Hurmatli <span className="text-[#00ffa2] font-semibold">{name}</span>, siz bilan tez fursatda InnoHub sport taqdimot komissiyasi bog'lanadi hamda batafsil shartnoma blankasini yuklab olish uchun havola jo'natiladi.
            </p>
          </div>

          <div className="bg-[#18191e] border border-[#222226] p-4 rounded-xl text-left max-w-sm mx-auto space-y-2 font-mono text-xs text-gray-300">
            <div className="flex justify-between">
              <span>Talabnoma Holati:</span>
              <span className="text-[#00ffa2] font-bold">KAFOLATLANGAN</span>
            </div>
            <div className="flex justify-between">
              <span>Taqdimot Smeta:</span>
              <span className="text-white font-bold">${Number(budget).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Boshlanish kuni:</span>
              <span className="text-white">SHARTNOMA KUNI</span>
            </div>
            <div className="flex justify-between">
              <span>Muddati:</span>
              <span className="text-[#00ffa2]">3 OY (12 HAFTA)</span>
            </div>
          </div>

          <button
            id="form-reset-btn"
            onClick={() => setSubmitted(false)}
            className="text-xs text-gray-500 hover:text-white transition-colors underline"
          >
            Yangi ma'lumot jo'natish
          </button>
        </div>
      )}
    </div>
  );
}
