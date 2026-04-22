import React, { useEffect, useState } from 'react';

interface ProcessingViewProps {
  file: File;
  onComplete: () => void;
}

export function ProcessingView({ file, onComplete }: ProcessingViewProps) {
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15 * 60);

  useEffect(() => {
    // 95% target over 15 mins.
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) return 95;
        // 95% / 900 seconds = ~0.1% per second
        return prev + 0.105;
      });
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Just to prevent user closing
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 w-full">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800">{file.name}</h3>
                <p className="text-sm text-slate-400">Tamaño: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-3xl font-mono font-bold text-blue-600 tracking-tighter">{formatTime(timeRemaining)}</span>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Tiempo Estimado</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 font-semibold">
                <span className="text-slate-600">Analizando documento...</span>
                <span className="text-blue-600">{Math.floor(progress)}%</span>
              </div>
              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-1000 ease-linear"
                  style={{ width: `${progress}%` }}
                >
                   <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <div className="space-y-3">
                <div className={`flex items-center gap-3 ${progress >= 0 ? "text-slate-400" : "text-slate-200"}`}>
                  <svg className={`w-4 h-4 ${progress >= 20 ? "text-green-500" : "text-slate-300"}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-sm">Cifrando documento y enviando a servidores...</span>
                </div>
                <div className={`flex items-center gap-3 ${progress >= 20 ? "text-slate-400" : "text-slate-300"}`}>
                  <svg className={`w-4 h-4 ${progress >= 50 ? "text-green-500" : "text-slate-300"}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-sm">Cruzando datos con bases académicas globales (Turnitin)...</span>
                </div>
                <div className={`flex items-center gap-3 ${progress >= 50 ? "text-slate-800 font-medium" : "text-slate-300"}`}>
                  <div className={`w-4 h-4 border-2 rounded-full ${progress >= 50 && progress < 90 ? "border-blue-600 border-t-transparent animate-spin" : "border-slate-200"}`}></div>
                  <span className="text-sm">Aplicando modelos de detección de IA generativa...</span>
                </div>
                <div className={`flex items-center gap-3 ${progress >= 90 ? "text-slate-800 font-medium" : "text-slate-300"}`}>
                  <div className={`w-4 h-4 border-2 rounded-full ${progress >= 90 ? "border-blue-600 border-t-transparent animate-spin" : "border-slate-200"}`}></div>
                  <span className="text-sm">Generando reporte de veracidad estilística...</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-6">
            <div className="flex gap-4">
              <span>PDF Validados</span>
              <span>Seguridad AES-256</span>
            </div>
            <button className="hover:text-red-500 transition-colors font-medium">Cancelar análisis</button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3 px-6 py-3 bg-blue-50/50 border border-blue-100 rounded-full text-blue-600 text-sm font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>No cierres esta pestaña. Tus resultados se mostrarán automáticamente al finalizar el proceso.</span>
      </div>

      <button 
        onClick={() => {
            setProgress(100);
            setTimeout(onComplete, 1000);
        }}
        className="mt-8 px-4 py-2 bg-slate-200 text-slate-500 rounded text-sm hover:bg-slate-300 transition-colors"
      >
        [Dev] Simulate Complete (Fast Forward)
      </button>
    </div>
  );
}
