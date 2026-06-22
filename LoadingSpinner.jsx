import React from 'react';

export default function LoadingSpinner({ message = "Synchronizing secure session registers..." }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] w-full p-8 text-center animate-in fade-in duration-300">
      <div className="relative flex items-center justify-center">
        {/* Outer pulse ring */}
        <div className="absolute animate-ping h-16 w-16 rounded-full bg-teal-400 opacity-20"></div>
        {/* Middle spinning segment */}
        <div className="animate-spin rounded-full h-14 w-14 border-4 border-slate-100 border-t-teal-600 border-b-teal-600"></div>
        {/* Inner static branding dot */}
        <div className="absolute text-xl select-none">🩺</div>
      </div>
      <p className="mt-6 text-sm font-bold tracking-wide text-teal-600 dark:text-teal-400 uppercase animate-pulse">
        {message}
      </p>
    </div>
  );
}