import React from 'react';

interface HeaderProps {
  activeTab: 'detector' | 'humanizer';
  setActiveTab: (tab: 'detector' | 'humanizer') => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-8 h-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.355r2.263-1.41a11.959 11.959 0 01-4.526 0L12 21.355z"></path>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">AcademiX<span className="text-blue-600">AI</span></span>
        </div>
        <nav className="hidden md:flex gap-6 h-full items-center">
          <button
            onClick={() => setActiveTab('detector')}
            className={`font-semibold h-full flex items-center transition-all ${
              activeTab === 'detector'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-slate-500 hover:text-slate-900 border-b-2 border-transparent'
            }`}
          >
            Detector de IA
          </button>
          <button
            onClick={() => setActiveTab('humanizer')}
            className={`font-semibold h-full flex items-center gap-2 transition-all ${
              activeTab === 'humanizer'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-slate-500 hover:text-slate-900 border-b-2 border-transparent'
            }`}
          >
            Humanizador <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full uppercase">BETA</span>
          </button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs font-semibold text-slate-500 uppercase hidden sm:inline">Servidor Activo</span>
        </div>
        <div className="h-8 w-8 rounded-full bg-slate-200"></div>
      </div>
    </header>
  );
}
