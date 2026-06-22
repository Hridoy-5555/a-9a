import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function NotFound() {
  useSEO('404 Route Interrupted', 'The system path criteria parsed does not match configuration tracking schemas.');
  const location = useLocation();

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* 404 Visual Architecture Block */}
      <div className="relative mb-6 select-none">
        <h1 className="text-9xl font-black tracking-tighter text-slate-200 dark:text-slate-800/60 font-mono">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          🚫
        </div>
      </div>

      <div className="max-w-md space-y-4">
        <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">
          Allocation Route Interrupted
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          The structural path <code className="bg-slate-100 dark:bg-slate-800 text-rose-500 px-1.5 py-0.5 rounded font-mono text-xs font-bold">{location.pathname}</code> does not match active routing keys.
        </p>

        {/* Diagnostic Metadata Container */}
        <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl p-4 border border-slate-100 dark:border-slate-800/80 text-left space-y-1.5 font-mono text-xs text-slate-400">
          <div><span className="text-slate-500 font-bold">STATUS:</span> 404 Not Found</div>
          <div><span className="text-slate-500 font-bold">MODULE:</span> DocAppoint_Client_Router</div>
          <div><span className="text-slate-500 font-bold">ACTION:</span> Navigation request terminated to prevent failure loops</div>
        </div>

        {/* Safe Recovery Options */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
          <Link 
            to="/" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all text-sm transform hover:-translate-y-0.5"
          >
            Return Home Base
          </Link>
          <Link 
            to="/appointments" 
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white font-bold px-6 py-3 rounded-xl transition-all text-sm"
          >
            Browse Active Doctors
          </Link>
        </div>
      </div>
    </div>
  );
}