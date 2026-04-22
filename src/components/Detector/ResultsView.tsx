import React from 'react';

export function ResultsView() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 w-full">
      <div className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">¡Análisis completado! Aquí tienes tus resultados</h1>
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-2">
          <div className="bg-green-500 h-full rounded-full transition-all duration-500 w-full"></div>
        </div>
        <p className="text-sm text-green-600 font-semibold text-right">100% Finalizado</p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
          <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Reporte de Similitud (Turnitin)</h2>
          <p className="text-sm text-slate-500 mb-8 flex-grow">Análisis exhaustivo contra bases de datos académicas e internet.</p>
          <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Descargar PDF
          </button>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 group">
          <div className="h-16 w-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Reporte de IA Generativa</h2>
          <p className="text-sm text-slate-500 mb-8 flex-grow">Evaluación detallada de probabilidad de texto generado por modelos de lenguaje.</p>
          <button className="w-full bg-white border-2 border-slate-200 text-slate-600 font-semibold py-3 px-6 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Descargar PDF
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl flex flex-wrap justify-center gap-8 pt-8 border-t border-slate-200">
        <div className="flex items-center gap-2 text-slate-500">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.355r2.263-1.41a11.959 11.959 0 01-4.526 0L12 21.355z"></path></svg>
          <span className="text-sm font-medium">Privacidad Institucional</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          <span className="text-sm font-medium">Cifrado de Extremo a Extremo</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          <span className="text-sm font-medium">Documentos no almacenados</span>
        </div>
      </div>
      
      <button 
        onClick={() => window.location.reload()}
        className="mt-12 px-6 py-2 bg-transparent text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-colors"
      >
        Analizar otro documento
      </button>
    </div>
  );
}
