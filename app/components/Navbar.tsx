"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'กรอบแว่นตา', href: '/frames' },
    { name: 'เลนส์', href: '/lenses' },
    { name: 'ทดสอบสายตา', href: '/vision-test' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-3 md:px-6 py-4 md:py-8">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-2xl p-2 rounded-3xl md:rounded-full border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
      >
        
        {/* 🏠 Logo Area */}
        <div className="pl-4 md:pl-6 pr-4 md:pr-8 border-r border-slate-100">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden p-1 group-hover:rotate-6 transition-transform">
               <img src="/logo22.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors uppercase italic">
              Master<span className="text-blue-600">Optic</span>
            </span>
          </Link>
        </div>

        {/* 💻 Desktop Menu */}
        <div className="hidden md:flex items-center flex-1 justify-center">
          {menuItems.map((item, index, array) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`px-8 py-3 text-[13px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-all relative group ${index !== array.length - 1 ? 'border-r border-slate-100' : ''}`}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-2 left-8 right-8 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>
        
        {/* 📞 Action & Mobile Toggle */}
        <div className="flex items-center gap-2 pr-2">
          <Link href="/contact" className="hidden sm:block bg-slate-950 text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all active:scale-95 shadow-lg">
            Book Now
          </Link>
          
          {/* Mobile Menu Button - กดได้จริงแล้ว! */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-900 active:scale-90 transition-all"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </motion.div>

      {/* 📱 Mobile Full-screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-100 shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 border-b border-slate-50 pb-4 flex justify-between items-center group"
                >
                  {item.name}
                  <span className="text-blue-600 opacity-0 group-hover:opacity-100">→</span>
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-blue-600 text-white p-6 rounded-2xl text-center font-black uppercase tracking-widest"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}