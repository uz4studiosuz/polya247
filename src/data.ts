import { Slide, BudgetCost, TimelineMilestone, TechItem } from './types';

export const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Polya 24/7",
    subtitle: "Ilovasining Yakuniy Loyiha Taqdimoti",
    description: "Sport majmualari va futbol maydonlarini band qilish, boshqarish va havaskor ligalarni raqamlashtirish bo'yicha O'zbekistondagi yagona to'liq ekotizim.",
    category: "general",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn5qZAn7b6dSS_WyaY1ITb0_1QnTOmWonpfCnvXG6KvCHTWWIQKKVwpEfJieRP626SWRH2pV-Goj4y1pdnNq_2WKk2AJD8FjAbGxD9tCXLj9yin6qL41g8SAyXneAZsd7_yejXYseDL3K5m-sD6jJUHFgYvQBISEHfcytroJcRt9iEnoYYjdY1FXZ-TR6x0fMn51g-VyJwOJBzZPrC2ZXh4-UNBKATHMLyTanH1hq9ffcrCJSOxv_dB-hD-6P6ee2nW5T4tWK2E_7b",
    imageAlt: "Polya 24/7 App Screenshots Overview Showing Modern Smooth Dark Interfaces on Simulated Phone Screens",
    bulletPoints: [
      "InnoHub IT Community hamkorligida ishlab chiqilgan",
      "Uz4studios media hamkori bilan strategik qo'llab-quvvatlash",
      "Premium 'Tungi Maydon' visual dizayn yo'nalishi"
    ]
  },
  {
    id: 2,
    title: "Muammo va Yechim",
    subtitle: "Bozordagi Haqiqiy Tizimli Muammolar",
    description: "Futbol havaskorlari va maydon egalari o'rtasidagi kelishuvlar hamon telefon qo'ng'iroqlari va tartibsiz yozishmalar orqali hal qilinmoqda.",
    category: "business",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_5QbdYuRIiticzwBk61igpHDVxBq9LS0l3fo0AI8LXaw4Kjzw02taksejNcBr8OG30ZDrYRi9SDTL61n0fPi2aNFkI4smzWbM5vbkk3F6HrQXfZhhBpzhNksaACnAlU9minnhWvAn5Z80ghL-oyM5BcbHHDfbVBbfHrIMC73uVQHyqRcAbMeGUFwzSBRQBfuK8Ku-ccN0IzkTvy8ePOFfet1pY_z9yM8T_bwH8ip-m70oXz3QMbsNNsqMN3LYvV_jR7kCUMQkE1Qy",
    imageAlt: "A cinematic low-angle shot of a pristine football pitch under stadium floodlights at night, symbolizing professional environment for elite sports tech.",
    bulletPoints: [
      "Qo'ng'iroqlardagi tartibsizliklar (bir vaqtga ikki kishi kelib qolishi)",
      "Maydonlarning bo'sh vaqtlarini real-vaqtda ko'rish imkoni yo'qligi",
      "Futbol o'ynash istagida bo'lgan jamoalarda odam yetishmasligi",
      "Yechim: Polya 24/7 — jarayonlarni avtomatlashtiruvchi 24/7 ishlochi ekotizim"
    ]
  },
  {
    id: 3,
    title: "Ilovaning Ishlash Tizimi",
    subtitle: "Mijozning Oddiy Sayohati (User Flow)",
    description: "Sport maydonini qidirishdan o'yinni boshlashgacha bo'lgan to'liq avtomatik 4 ta qadam.",
    category: "process",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn5qZAn7b6dSS_WyaY1ITb0_1QnTOmWonpfCnvXG6KvCHTWWIQKKVwpEfJieRP626SWRH2pV-Goj4y1pdnNq_2WKk2AJD8FjAbGxD9tCXLj9yin6qL41g8SAyXneAZsd7_yejXYseDL3K5m-sD6jJUHFgYvQBISEHfcytroJcRt9iEnoYYjdY1FXZ-TR6x0fMn51g-VyJwOJBzZPrC2ZXh4-UNBKATHMLyTanH1hq9ffcrCJSOxv_dB-hD-6P6ee2nW5T4tWK2E_7b",
    imageAlt: "User interactive journey mockups of booking calendar and slot selections in the mobile screen dashboard",
    bulletPoints: [
      "1. Ro'yxatdan o'tish (Telefon raqam va SMS tasdiqlash)",
      "2. Xaritadan joy tanlash (Google Maps integratsiyasi orqali eng yaqin polya)",
      "3. Vaqtni belgilash (Ochiq vaqt slotlaridan bir marta bosish bilan tanlash)",
      "4. To'lov va Tasdiq (Click, Payme integratsiyasi orqali tezkor to'lov)"
    ]
  },
  {
    id: 4,
    title: "Biznes va Daromad Modeli",
    subtitle: "Monetizatsiya Strategiyasi va Prognoz",
    description: "Polya 24/7 barqaror moliyaviy o'sish va 3 xil parallel daromad oqimlariga ega:",
    category: "finance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANWMewq8iykr_S2WfKoAhhZq182Vx3cbR0NvNa8BPR5KjmQksT-yxWM4BsYIlZ3vW0W08x8TSOzU0oIWJpPwM5fQAj2Cf8xvh8EblIc9J1qzYmJvS2dOi7zdhdul5t-Vo_rPklNqJZxIZ6E9YQ0bkhnqlVAAImZLPAnA9Sqfbvve5d8J6Ha2NqccsUN4PKpl8W0LmtnYmGtC94sS5Uz7FlEii0w2PSK8Eu8SwBJPSqNdkdPz_UNM_H7qGeWONdqNylg5smtNprpmc2",
    imageAlt: "High-contrast dynamic neon lights of the football stadium reflecting elite sports branding",
    bulletPoints: [
      "Tranzaksion Komissiya: Har bir muvaffaqiyatli brondan 10,000 so'm xizmat haqi",
      "E-Do'kon: Sport inventarlari, to'plari va jamoa formalarini sotishdan 5-15% marja",
      "Native Reklama: Sport jihozlari ishlab chiqaruvchilarning ilova ichidagi bannerlari",
      "Oylik Prognoz: 5000 ta brondan oyiga o'rtacha 50,000,000 so'm sof komissiya"
    ]
  },
  {
    id: 5,
    title: "MVP va Kengayish Rejasi",
    subtitle: "Strategik Yo'l Xaritasi (Roadmap)",
    description: "Raqobatbardosh ustunlikni tezroq egallash uchun loyiha ikki bosqichga rejalashtirilgan.",
    category: "process",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi11HeAG6bMj9sPUi1Cm6YGkZ5aUZZyT6jZ5Ja_fYw9yW3TYuTyiOiXiU3yTXYQK7c6sOLarhltBCPFCm8Cp1-CqSMfzRziOkOiiFoSuD1gxKFXXX6h7bRgy4l0w4-QQKjLFU-PRKdF5MlFIgx5YnlhW86Sz5agdEXnH0l-z1HMdjQfgGljhiOKz_uhPjRw7Kl5NEGwTe2BT3g6NObo7Dw4kuePkXA2pA2h2oVhEJvXaBKiIE7wLOphW8lT8tm3EbWknnoOP4TWnUb",
    imageAlt: "A futuristic stadium digital grid map representing interactive network system of data layers",
    bulletPoints: [
      "1-Faza (MVP): Xarita, Bron tizimi, Maydon egalari paneli, Telegram Bot integratsiyasi",
      "2-Faza (Scale): Guruh/Jamoalarga odam topish, Turnir tizimi tashkil etilishi, Sport do'koni",
      "Asosiy Maqsad: O'zbekiston havaskor futbolini yagona aqlli platformaga birlashtirish"
    ]
  },
  {
    id: 6,
    title: "Texnik Arxitektura (Tech Stack)",
    subtitle: "Zamonaviy va Ishonchli Texnologiyalar",
    description: "Sinxron yuklamalar va yuqori tezlikka bardosh beradigan professional arxitektura.",
    category: "tech",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6FLalsUqZLMD_5QiALQicoEJ1slLwj6ZMlr-itLUlE6oql98MKw8aRoQphCm2DrC3ZAnH56hPP8TCxUUcFKh8fVUq3wpe_FGPAUwkBqMduHGPPbuTu6IAPlzxPrvVdeQ_m9NnMGGDvx-heR7_8nwls0iuScFhd_OdWoVvjcKxifJZ0Vn3ltjDtUrWuSeKqVA8fwRyOuy2PvWIqyKIGQLPlX05_2DNEb6uIAO5Xu86NxNiTEdzGxYp4G4tUchJ4uxGXeOzBc68h6ky",
    imageAlt: "Green glowing lines of high-tech printed circuit board motherboard representing advanced software core logic",
    bulletPoints: [
      "Mobil Ilova: Flutter — Android va iOS uchun bitta premium o'ta ravon kod asosi",
      "Backend & DB: Supabase (PostgreSQL) — Real-vaqtda bron va vaqt sinxronizatsiyasi",
      "Xaritalar: Google Maps SDK — Atrofdagi maydonlarni tezkor vizualizatisiya qilish",
      "SMS Gateway: Eskiz SMS — Avtomatik tizimli bildirishnomalar va OTP",
      "To'lov shlyuzlari: Click & Payme to'g'ridan-to'g'ri API to'lovlarlari"
    ]
  },
  {
    id: 7,
    title: "Sarf-xarajatlar va Budjet",
    subtitle: "Loyihani Moliyalashtirish Smeta Prognozi",
    description: "Professional darajada bozordagi raqobat va kelajakdagi o'zgarishlar zaxirasini hisobga olgan investitsion baholash.",
    category: "finance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9HAB5ANEi8uf_CK2wjFddBfNO5P6z4soLCkHN_HtHy7s1R3Fd94iVNXxuqIBmxz8_7TcSpTldn13lvi5xEiJDVumQRu0Yboi5KiSUn21JI6R5gdNEBwJPgUCWpfdlNHHY5Zb7A8u3xzQNbTgMM8lQdClgYnetWUiF_xw8qEFjGPS0y9na3bl3sYEez3QdmwMrwCtyw7kk8TC9M3sn39gwpia9WXSUdeMf0UaxZS6aZ6oRZx7H5r2o81JdiIl2UkMoGfGS8vUU-yvn",
    imageAlt: "A sleek workspace setup with an analyst analyzing investment statistics and tech projections on a glowing screen",
    bulletPoints: [
      "UI/UX Dizayn va Prototip: $8,500 (brending, interfeys maketlar, foydalanuvchi sinovlari)",
      "Mobil ilova & Backend development: $22,000 (asosiy funksionallik, admin paneli)",
      "Server va SMS Gateway tizimi: $5,000 (bulutli serverlar va Eskiz.uz obunalari)",
      "Integratsiyalar & API sozlamalar: $10,000 (to'lov tizimlari, xaritalar, Telegram botlar)",
      "ROI (Investitsiya qaytimi): 1-yil yakunidayoq o'zini to'liq qoplab $120k/yil sof foyda keltirish darajasi"
    ]
  },
  {
    id: 8,
    title: "Loyiha Muddatlari",
    subtitle: "Batafsil Rejaga Asoslangan Vaqt Jadvali",
    description: "Agile (Scrum) metodologiyasi orqali loyihani tezkor ishlab chiqish va bozorga chiqarish trayektoriyasi.",
    category: "tech",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi11HeAG6bMj9sPUi1Cm6YGkZ5aUZZyT6jZ5Ja_fYw9yW3TYuTyiOiXiU3yTXYQK7c6sOLarhltBCPFCm8Cp1-CqSMfzRziOkOiiFoSuD1gxKFXXX6h7bRgy4l0w4-QQKjLFU-PRKdF5MlFIgx5YnlhW86Sz5agdEXnH0l-z1HMdjQfgGljhiOKz_uhPjRw7Kl5NEGwTe2BT3g6NObo7Dw4kuePkXA2pA2h2oVhEJvXaBKiIE7wLOphW8lT8tm3EbWknnoOP4TWnUb",
    imageAlt: "A digital dynamic scheduling map illustrating linear progress milestones of visual software development and testing",
    bulletPoints: [
      "1-Oy: UI/UX dizayn (2 hafta) — barcha sahifalar va interfeyslarning interaktiv prototipi",
      "1-2 Oy: Asosiy dasturlash (8 hafta) — parallel frontend va backend development",
      "3-Oy: Sinov va ishga tushirish (2 hafta) — to'liq alpha/beta test va do'konlarga yuklash",
      "Hammasi bo'lib: 3 OY (tezkor va eng xavfsiz MVP ishga tushirilishi)"
    ]
  },
  {
    id: 9,
    title: "Keyingi Qadamlar",
    subtitle: "G'alaba sari birgalikda sakrash",
    description: "Hamkorligimiz to'liq ishonch va shaffoflikka asoslangan. Safarni boshlash uchun 3 qadam:",
    category: "general",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_5QbdYuRIiticzwBk61igpHDVxBq9LS0l3fo0AI8LXaw4Kjzw02taksejNcBr8OG30ZDrYRi9SDTL61n0fPi2aNFkI4smzWbM5vbkk3F6HrQXfZhhBpzhNksaACnAlU9minnhWvAn5Z80ghL-oyM5BcbHHDfbVBbfHrIMC73uVQHyqRcAbMeGUFwzSBRQBfuK8Ku-ccN0IzkTvy8ePOFfet1pY_z9yM8T_bwH8ip-m70oXz3QMbsNNsqMN3LYvV_jR7kCUMQkE1Qy",
    imageAlt: "Cinematic stadium scene reinforcing mutual commitment and 'Match Day' launch attitude",
    bulletPoints: [
      "1. Texnik Topshiriqni (ТЗ) kelishish va uni yakuniy tasdiqlash",
      "2. Shartnoma imzolash, huquqiy va moliyaviy kafolatlarni mustahkamlash",
      "3. Ishni boshlash! Jamoamizni safarbar qilib futbol inqilobiga start berish",
      "InnoHub va Uz4studios bilan hamkorlikda muvaffaqiyat kafolatlanadi"
    ]
  }
];

export const BUDGET_ITEMS: BudgetCost[] = [
  {
    title: "UI/UX Dizayn & Prototip",
    description: "Egasining va mijozning foydalanuvchi interfeyslari, brending, prototiplash va mobil adaptivlik sinovlari.",
    cost: 8500,
    icon: "palette"
  },
  {
    title: "Mobil ilova & Backend",
    description: "Flutter yordamida o'ta ravon cross-platform (iOS & Android) ilova hamda Supabase barqaror va xavfsiz server asosi.",
    cost: 22000,
    icon: "smartphone"
  },
  {
    title: "Server & SMS Gateway",
    description: "AWS cloud, SSL xavfsizlik sertifikatlari va avtomatik bildirishnomalar uchun Eskiz.uz SMS to'plamlari integratsiyasi.",
    cost: 5000,
    icon: "server"
  },
  {
    title: "Integratsiyalar & Telegram bot",
    description: "Click, Payme onlayn to'lov shlyuzlari, Google Maps SDK va maydon egalari uchun maxsus boshqaruv Telegram boti.",
    cost: 10000,
    icon: "cpu"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    phase: "UI/UX Dizayn bosqichi",
    duration: "2 HAFTA",
    progress: 100,
    startOffset: 0,
    width: 2,
    color: "bg-brand-green",
    milestones: [
      "Bozor va foydalanuvchi talablarini o'rganish",
      "Sariq rangli dastlabki maketlar va Wireframe",
      "Ranglar va sport brend-buki tasdiqlanishi",
      "Interaktiv Figma prototipini foydalanuvchi sinovidan o'tkazish"
    ]
  },
  {
    phase: "Mobil ilova & Backend development",
    duration: "8 HAFTA",
    progress: 75,
    startOffset: 2,
    width: 8,
    color: "bg-brand-neon",
    milestones: [
      "Sifatli ma'lumotlar bazasi (PostgreSQL schema) sozlanishi",
      "Flutter ilova strukturasini yaratish va kodlash",
      "Asosiy API va real-vaqtda sinxronizatsiya mexanizmlari",
      "Eshittirish (push), Eskiz SMS va to'lov xizmatlarini ulash"
    ]
  },
  {
    phase: "Beta Testing, Launch & App Store",
    duration: "2 HAFTA",
    progress: 25,
    startOffset: 10,
    width: 2,
    color: "bg-[#00ffa2]",
    milestones: [
      "Alpha test — ichki dasturchilar sinovi",
      "Beta test — hududiy maydon egalari bilan sinov",
      "Xatoliklarni bartaraf etish va tezlikni optimallashtirish",
      "Google Play va App Storega yuklash va tasdiqdan o'tkazish"
    ]
  }
];

export const TECH_STACK: TechItem[] = [
  {
    id: "flutter",
    name: "Flutter & Dart",
    category: "mobile",
    role: "Mobil Ilova yadrosi",
    description: "iOS va Android platformalari uchun yagona mukammal kod bazasi. 60 FPS o'ta silliq animatsiyalar bilan premium ishlash tejamkorligi.",
    icon: "smartphone",
    benefits: [
      "Ishlab chiqish tezligi 2 barobar tezroq",
      "Material 3 zamonaviy dizayn elementlari",
      "Oson qo'shimcha modullar ulash"
    ]
  },
  {
    id: "supabase",
    name: "Supabase & Postgres",
    category: "backend",
    role: "Markaziy Server & DB",
    description: "SQL-ga asoslangan ishonchli va yuqori tezlikdagi ma'lumotlar ombori. Real-vaqtli o'zgarishlar (Realtime Client) imkoniyati.",
    icon: "database",
    benefits: [
      "Ikki marta bron qilish (Double booking) oldini olish mantiqi",
      "Xavfsiz foydalanuvchi autentifikatsiyasi",
      "Eng tezkor Edge server xizmatlari"
    ]
  },
  {
    id: "gmaps",
    name: "Google Maps Platform",
    category: "api",
    role: "Geolokatsiya & Navigatsiya",
    description: "Atrofdagi futbol maydonlarini masofa va joylashuv bo'yicha interaktiv filtrlar orqali xaritada ko'rsatish.",
    icon: "map-pin",
    benefits: [
      "Maydonlarga ketadigan vaqtni hisoblash",
      "Hududiy qidiruv tizimi",
      "Yo'nalish xaritasi"
    ]
  },
  {
    id: "payments",
    name: "Click & Payme integratsiyasi",
    category: "api",
    role: "Milliy To'lov Shlyuzi",
    description: "O'zbekistondagi eng ommabop Click va Payme to'lov tizimlarining rasmiy SDK hujjati asosida integratsiya qilinishi.",
    icon: "credit-card",
    benefits: [
      "Foydalanuvchilarga qulay 1 marta bosish bilan to'lov",
      "Xavfsiz va shifrlangan tranzaksiyalar",
      "Elektron cheklar va hisob-fakturalar"
    ]
  },
  {
    id: "sms",
    name: "Eskiz.uz SMS Gateway",
    category: "api",
    role: "Tezkor Bildirishnomalar",
    description: "Telefon raqamini tasdiqlash uchun OTP kodlar yuborish va har bir bron muvaffaqiyatli o'tganda tezkor kvitansiya SMSlarini jo'natish.",
    icon: "message-square",
    benefits: [
      "O'zbekiston bo'ylab 99.9% yetkazib berish ishonchliligi",
      "O'ta past xarajatli SMS tariflari",
      "Xavfsizlikni 2FA darajasida ushlab turish"
    ]
  }
];
