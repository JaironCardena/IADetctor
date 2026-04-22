import React, { useState } from 'react';
import { DropzoneView } from './DropzoneView';
import { ProcessingView } from './ProcessingView';
import { ResultsView } from './ResultsView';

export function DetectorLayout() {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [file, setFile] = useState<File | null>(null);

  const handleFileAccepted = (acceptedFile: File) => {
    setFile(acceptedFile);
    setStep(1);
  };

  const handleProcessingComplete = () => {
    setStep(2);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto p-4 md:p-8">
      {step === 0 && <DropzoneView onFileAccepted={handleFileAccepted} />}
      {step === 1 && file && <ProcessingView file={file} onComplete={handleProcessingComplete} />}
      {step === 2 && <ResultsView />}
    </div>
  );
}
