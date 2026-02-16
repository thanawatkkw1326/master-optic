"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const menuItems = [
    { name: 'หน้าแรก', href: '/', icon: '🏠' },
    { name: 'กรอบแว่น', href: '/frames', icon: '👓' },
    { name: 'เลนส์', href: '/lenses', icon: '💎' },
    { name: 'เช็กสายตา', href: '/vision-test', icon: '👁️' },
    { name: 'ติดต่อเรา', href: '/contact', icon: '📍' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-3 py-4 md:py-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        
        {/* --- แถบบน: Logo & Book Now --- */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center bg-white/90 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-white shadow-lg"
        >
          <div className="pl-4 pr-6 border-r border-slate-100">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100 overflow-hidden p-1 shadow-sm">
                 <img src="/logo22.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-base md:text-xl font-black tracking-tighter text-slate-900 uppercase italic">
                Master<span className="text-blue-600">Optic</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 pr-1">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-widest shadow-md active:scale-95 transition-all">
              Book Now
            </Link>
          </div>
        </motion.div>

        {/* --- แถบล่าง: เมนูกางโชว์ 5 ปุ่ม (Grid 5 ช่อง) --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-5 gap-1.5 md:flex md:items-center md:justify-center md:bg-white/80 md:backdrop-blur-lg md:p-1 md:rounded-full md:w-max md:mx-auto md:border md:border-white/40 md:shadow-xl"
        >
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 bg-white/90 backdrop-blur-md md:bg-transparent p-2 md:px-6 md:py-3 rounded-2xl md:rounded-full border border-white md:border-none shadow-sm md:shadow-none group transition-all active:scale-90"
            >
              <span className="text-base md:text-sm group-hover:scale-120 transition-transform">{item.icon}</span>
              <span className="text-[8.5px] md:text-[12px] font-black uppercase tracking-tighter md:tracking-widest text-slate-600 group-hover:text-blue-600 transition-colors text-center leading-tight">
                {item.name}
              </span>
            </Link>
          ))}
        </motion.div>

      </div>
    </nav>
  );
}