// AURA Food Intelligence - Dashboard Core Component
import React from 'react';
import { motion } from 'framer-motion';

const AuraDashboard = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full" />

      {/* Main Content */}
      <nav className="p-6 flex justify-between items-center backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          <h1 className="text-xl font-bold tracking-tight">AURA</h1>
        </div>
        <div className="bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium">
          2.4kg CO₂ saved
        </div>
      </nav>

      <main className="p-6 space-y-8 pb-24">
        {/* Analytics Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="relative z-10">
            <p className="text-white/50 text-sm">Spesa stimata mese</p>
            <h2 className="text-4xl font-bold mt-1">€412,00</h2>
          </div>
          {/* Glare effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* Scan Action Circle */}
        <div className="flex flex-col items-center justify-center py-10">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative w-48 h-48 rounded-full flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-0 bg-white/5 border border-white/20 rounded-full backdrop-blur-3xl flex items-center justify-center overflow-hidden">
               {/* Inner Glare */}
               <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.1),transparent)] animate-spin-slow" />
               <span className="text-5xl">📷</span>
            </div>
            <p className="absolute -bottom-8 font-medium text-white/70">Tocca per scansionare</p>
          </motion.button>
        </div>
      </main>

      {/* Glass Bottom Navigation */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl flex justify-around items-center px-4 z-50">
        <div className="text-2xl opacity-100">🏠</div>
        <div className="text-2xl opacity-40">📦</div>
        <div className="text-2xl opacity-40">🥗</div>
        <div className="text-2xl opacity-40">📊</div>
      </footer>
    </div>
  );
};

export default AuraDashboard;
