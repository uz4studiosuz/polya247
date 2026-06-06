/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SlideViewer from './components/SlideViewer';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { SLIDES } from './data';

export default function App() {
  // Global view style tracker: 'presentation' or 'landing'
  const [viewMode, setViewMode] = useState<'presentation' | 'landing'>('presentation');
  
  // Custom stadiums parameter synced across views
  const [stadiumCount, setStadiumCount] = useState<number>(500);

  // Keyboard navigation for presentation slides representation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'presentation') return;

      const activeElement = document.activeElement;
      // Do not override if user is typing in forms/simulators
      if (
        activeElement &&
        (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'SELECT')
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        const nextBtn = document.getElementById('slide-control-next');
        if (nextBtn) nextBtn.click();
      } else if (e.key === 'ArrowLeft') {
        const prevBtn = document.getElementById('slide-control-prev');
        if (prevBtn) prevBtn.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  return (
    <div className="min-h-screen bg-[#030303] text-gray-100 flex flex-col font-sans selection:bg-[#00c34f]/30 selection:text-[#00ffa2]">
      {/* 1. Header controls */}
      <Header 
        viewMode={viewMode} 
        setViewMode={setViewMode} 
        stadiumCount={stadiumCount} 
      />

      {/* 2. Main content container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-8">
        {viewMode === 'presentation' ? (
          <div className="animate-fade-in space-y-12">
            
            {/* Quick alert bar */}
            <div className="bg-[#121317] border border-[#222226] p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ffa2] animate-ping" />
                <span className="text-gray-300">
                  Ushbu taqdimot interaktiv modullardan iborat bo'lib, uning ichida siz moliya tahlillarini hisoblashingiz, mobil o'yin simulyatsiyasini amalga oshirishingiz mumkin.
                </span>
              </div>
              <button
                id="app-banner-scroll-btn"
                onClick={() => setViewMode('landing')}
                className="text-[#00ffa2] hover:underline font-bold shrink-0 text-left font-mono"
              >
                LANDING SAHIFA BO'LIMIGA O'TISH →
              </button>
            </div>

            {/* Slide showcase deck */}
            <SlideViewer stadiumCount={stadiumCount} />

          </div>
        ) : (
          <LandingPage 
            stadiumCount={stadiumCount} 
            setStadiumCount={setStadiumCount}
            setViewMode={setViewMode} 
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

