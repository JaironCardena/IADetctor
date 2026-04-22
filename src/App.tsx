import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DetectorLayout } from './components/Detector/DetectorLayout';
import { HumanizerLayout } from './components/Humanizer/HumanizerLayout';

export default function App() {
  const [activeTab, setActiveTab] = useState<'detector' | 'humanizer'>('detector');

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'detector' ? <DetectorLayout /> : <HumanizerLayout />}
      <Footer />
    </div>
  );
}
