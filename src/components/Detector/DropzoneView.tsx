import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneViewProps {
  onFileAccepted: (file: File) => void;
}

export function DropzoneView({ onFileAccepted }: DropzoneViewProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    setError(null);
    if (fileRejections.length > 0) {
      setError('Formato no válido o archivo demasiado grande. Sube PDF o Word hasta 50MB.');
      return;
    }
    if (acceptedFiles.length > 0) {
      onFileAccepted(acceptedFiles[0]);
    }
  }, [onFileAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc']
    },
    maxSize: 50 * 1024 * 1024, // 50MB
    maxFiles: 1
  });

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 w-full">
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Análisis en tiempo real</h1>
        <p className="text-slate-500 font-medium">Sube tu documento para detectar IA con precisión.</p>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-10 relative overflow-hidden transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        
        <div 
          {...getRootProps()} 
          className={`relative z-10 group border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors duration-300 ${
            isDragActive ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:border-blue-400 hover:bg-slate-50'
          }`}
        >
          <input {...getInputProps()} />
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-800">Arrastra aquí tu documento</h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto text-center">
             o haz clic para explorar en tus archivos
          </p>
          <button className="mt-4 bg-blue-600 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md hover:bg-blue-700 transition-colors pointer-events-none">
            Seleccionar Archivo
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-4 font-bold text-center">{error}</p>
        )}
      </div>

      <div className="mt-8 flex gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
        <span>PDF/DOCX Validados</span>
        <span>•</span>
        <span>Seguridad AES-256</span>
      </div>
    </div>
  );
}
