import React, { useState } from 'react';
import { DollarSign, Sliders, TrendingUp, Calculator, Award, ArrowRight } from 'lucide-react';

interface FinancialCalculatorProps {
  initialStadiums?: number;
}

export default function FinancialCalculator({ initialStadiums = 500 }: FinancialCalculatorProps) {
  const [stadiums, setStadiums] = useState<number>(initialStadiums);
  const [gamesPerDay, setGamesPerDay] = useState<number>(3);
  const [commission, setCommission] = useState<number>(10000); // 10,000 UZS per game
  const [storeSpend, setStoreSpend] = useState<number>(15000); // 15,000 UZS average player spend
  const [storeMargin, setStoreMargin] = useState<number>(10); // 10% margin
  const [investmentCost, setInvestmentCost] = useState<number>(45500); // Proposed development budget $45,500

  // Standard variables
  const UZS_TO_USD = 13000; // Exchange rate indicator
  const averagePlayersPerGame = 12; // 6 vs 6 standard minimum

  // Calculations
  const dailyGames = stadiums * gamesPerDay;
  const monthlyGames = dailyGames * 30;
  
  // 1. Commission Revenue
  const dailyCommRevenue = dailyGames * commission;
  const monthlyCommRevenue = monthlyGames * commission;

  // 2. Ecommerce Store Revenue (Assuming 10% of total bookings buy something)
  const productBuyersPerMonth = (monthlyGames * averagePlayersPerGame) * 0.15; // 15% player conversion
  const monthlyStoreSales = productBuyersPerMonth * storeSpend;
  const monthlyStoreMarginRevenue = monthlyStoreSales * (storeMargin / 100);

  // 3. Ad revenue (estimated conservative amount per active stadium per month)
  const adsRevenuePerStadium = 20000; // 20,000 UZS per stadium for ad packages
  const monthlyAdsRevenue = stadiums * adsRevenuePerStadium;

  // Total monthly revenue in UZS & USD
  const totalMonthlyUZS = monthlyCommRevenue + monthlyStoreMarginRevenue + monthlyAdsRevenue;
  const totalMonthlyUSD = totalMonthlyUZS / UZS_TO_USD;

  // Recoup (ROI) in months
  const monthsToRecoup = totalMonthlyUSD > 0 ? investmentCost / totalMonthlyUSD : 99;

  return (
    <div id="financial-calculator-container" className="bg-[#121317] border border-[#222226] rounded-2xl p-5 md:p-8 relative overflow-hidden">
      {/* Decorative soccer line background effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#00c34f]/5 to-transparent rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Sliders Input Panel */}
        <div className="w-full lg:w-7/12 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00c34f]/10 flex items-center justify-center text-[#00ffa2] border border-[#00c34f]/20">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Moliya & ROI Simulyatori</h3>
              <p className="text-xs text-gray-400">Biznes model parametrlarini o'zgartirib daromadni baholang</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {/* Stadiums Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">Platformaga ulangan maydonlar:</span>
                <span className="text-[#00ffa2] font-bold">{stadiums} ta</span>
              </div>
              <input
                id="stadiums-slider"
                type="range"
                min="100"
                max="1000"
                step="25"
                value={stadiums}
                onChange={(e) => setStadiums(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1f1f23] rounded-lg appearance-none cursor-pointer accent-[#00c34f]"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>100 ta</span>
                <span>500 (MVP maqsad)</span>
                <span>1000 ta</span>
              </div>
            </div>

            {/* Daily Games Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">Kunlik o'rtacha o'yinlar (har bir polyada):</span>
                <span className="text-[#00ffa2] font-bold">{gamesPerDay} ta o'yin</span>
              </div>
              <input
                id="games-slider"
                type="range"
                min="1"
                max="8"
                step="0.5"
                value={gamesPerDay}
                onChange={(e) => setGamesPerDay(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1f1f23] rounded-lg appearance-none cursor-pointer accent-[#00c34f]"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>1 o'yin/kun</span>
                <span>4.5 o'yin (Bandlik: 50%)</span>
                <span>8 o'yin/kun</span>
              </div>
            </div>

            {/* Commission Fee Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400">Har bir o'yin bandligi uchun komissiya:</span>
                <span className="text-[#00ffa2] font-bold">{commission.toLocaleString()} so'm</span>
              </div>
              <input
                id="commission-slider"
                type="range"
                min="5000"
                max="25000"
                step="1000"
                value={commission}
                onChange={(e) => setCommission(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1f1f23] rounded-lg appearance-none cursor-pointer accent-[#00c34f]"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>5k so'm (Minimal)</span>
                <span>10k so'm (Default)</span>
                <span>25k so'm (Maksimal)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Average Store Checkout Spend */}
              <div className="bg-[#18191e] border border-[#222226] p-3.5 rounded-xl space-y-1">
                <label className="text-[11px] font-mono text-gray-400 block">Do'kondan o'rtacha xarid (bir kishi):</label>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-secondary-text font-semibold text-gray-300">Sport tovarlari</span>
                  <select
                    id="store-spend-select"
                    value={storeSpend}
                    onChange={(e) => setStoreSpend(Number(e.target.value))}
                    className="bg-[#121317] border border-[#2c2d33] py-1 px-2 text-xs rounded text-[#00ffa2] font-mono focus:outline-none"
                  >
                    <option value="5000">5,000 so'm</option>
                    <option value="15000">15,000 so'm</option>
                    <option value="30000">30,000 so'm</option>
                    <option value="50000">50,000 so'm</option>
                  </select>
                </div>
              </div>

              {/* Development Investment costs adjustment */}
              <div className="bg-[#18191e] border border-[#222226] p-3.5 rounded-xl space-y-1">
                <label className="text-[11px] font-mono text-gray-400 block">Dastlabki Loyiha Budjeti (Smeta):</label>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-300 font-semibold">Tugallangan smeta</span>
                  <select
                    id="investment-select"
                    value={investmentCost}
                    onChange={(e) => setInvestmentCost(Number(e.target.value))}
                    className="bg-[#121317] border border-[#2c2d33] py-1 px-2 text-xs rounded text-[#00ffa2] font-mono focus:outline-none"
                  >
                    <option value="35000">$35,000 (Minimal)</option>
                    <option value="45500">$45,500 (Tavsiya etilgan)</option>
                    <option value="60000">$60,000 (To'liq Faza 1&2)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Calculations Dashboard */}
        <div className="w-full lg:w-5/12 bg-[#18191e] border border-[#222226] p-5 rounded-2xl flex flex-col justify-between">
          <div className="space-y-5">
            <span className="text-[10px] font-mono border border-[#00c34f]/30 text-[#00ffa2] bg-[#00c34f]/10 rounded-full px-2.5 py-1 tracking-wider uppercase inline-block">
              Qaytim Proksisiv Baholanishi
            </span>

            {/* Main numbers container */}
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-400 font-mono">OYLIK TAXMINIY SOF DAROMAD</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h4 id="calc-monthly-uzs" className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                    {Math.round(totalMonthlyUZS).toLocaleString()}
                  </h4>
                  <span className="text-[#00ffa2] font-bold text-sm">so'm</span>
                </div>
                <p className="text-[11px] text-[#00ffa2] font-mono mt-0.5">
                  ≈ ${Math.round(totalMonthlyUSD).toLocaleString()} USD / oyiga
                </p>
              </div>

              {/* Progress bars of Revenue sources */}
              <div className="space-y-2 pt-2 border-t border-[#222226]">
                <p className="text-[10px] text-gray-400 font-mono">DAROMAD MANBALARI TAHSILOTI:</p>
                
                {/* 1. Commissions */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Komissiya haqi (100% raqamli)</span>
                    <span className="font-mono font-semibold">{(monthlyCommRevenue / totalMonthlyUZS * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#121317] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00c34f]" style={{ width: `${(monthlyCommRevenue / totalMonthlyUZS * 100)}%` }} />
                  </div>
                </div>

                {/* 2. E-shop Margin */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>E-Do'kon daromad marjasi</span>
                    <span className="font-mono font-semibold">{(monthlyStoreMarginRevenue / totalMonthlyUZS * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#121317] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00ffa2]" style={{ width: `${(monthlyStoreMarginRevenue / totalMonthlyUZS * 100)}%` }} />
                  </div>
                </div>

                {/* 3. Ads */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Native reklama tizimi</span>
                    <span className="font-mono font-semibold">{(monthlyAdsRevenue / totalMonthlyUZS * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#121317] rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${(monthlyAdsRevenue / totalMonthlyUZS * 100)}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#222226]">
            {/* ROI & Payback outcome display */}
            <div className="bg-[#121317] border border-[#222226] p-4 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-400 font-mono">INVESTITSIYA QOPLANISH DAVRI</p>
                <h5 id="calc-roi-months" className="text-[#00ffa2] text-xl font-bold font-mono mt-1">
                  {monthsToRecoup < 1 ? "1 oydan kam!" : `${monthsToRecoup.toFixed(1)} oy`}
                </h5>
                <p className="text-[10px] text-gray-500 mt-1">
                  Smeta: ${investmentCost.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#00c34f]/10 border border-[#00c34f]/30 flex items-center justify-center text-[#00ffa2]">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            <div className="text-[10px] text-gray-400 mt-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ffa2]" />
              <span>O'zbekistonda 500 ta maydonni jalb etish 1-faza uchun reallikdir.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
