"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 py-8">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-7xl mx-auto flex justify-between items-center bg-white/90 backdrop-blur-2xl p-2 rounded-full border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
      >
        
        {/* 🏠 Logo Area */}
        <div className="pl-6 pr-8 border-r border-slate-100">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200">
              M
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
              Master Optic
            </span>
          </Link>
        </div>

        {/* 📱 Desktop Menu - แบ่งเป็นช่องๆ ด้วย border-r */}
        <div className="hidden md:flex items-center flex-1 justify-center">
          {[
            { name: 'กรอบแว่นตา', href: '/frames' },
            { name: 'เลนส์', href: '/lenses' },
            { name: 'ทดสอบสายตา', href: '/vision-test' },
            { name: 'ติดต่อเรา', href: '/contact' },
          ].map((item, index, array) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`
                px-8 py-3 text-[13px] font-black uppercase tracking-widest text-slate-500 
                hover:text-blue-600 hover:bg-slate-50/50 transition-all relative group
                ${index !== array.length - 1 ? 'border-r border-slate-100' : ''}
              `}
            >
              <span className="relative z-10">{item.name}</span>
              {/* เส้นใต้เวลา Hover */}
              <span className="absolute bottom-2 left-8 right-8 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>
        
        {/* 📞 Action Button Area */}
        <div className="pl-8 pr-2 flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block bg-slate-950 text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-200">
            Book Now
          </Link>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden pr-4 text-slate-900">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
          </div>
        </div>

      </motion.div>
    </nav>
  );
}