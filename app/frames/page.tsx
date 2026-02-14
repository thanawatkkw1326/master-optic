"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // ใช้ Image ของ Next.js เพื่อความเร็ว

export default function FramesPage() {
  const frames = [
    { id: 1, name: "Premium 01", price: "3,500", img: "/frames/frames1.png" },
    { id: 2, name: "Vintage 02", price: "4,200", img: "/frames/frames2.png" },
    { id: 3, name: "Modern 03", price: "3,900", img: "/frames/frames3.png" },
    { id: 4, name: "Urban 04", price: "5,500", img: "/frames/frames4.png" },
    { id: 5, name: "Classic 05", price: "4,800", img: "/frames/frames5.png" },
    { id: 6, name: "Dark 06", price: "3,200", img: "/frames/frames6.png" },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 🏷️ Header ปรับขนาดให้พอดีมือถือ ไม่ล้นจอ */}
        <header className="mb-12 md:mb-20 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-2 md:mb-4"
          >
            OUR <span className="text-blue-600">FRAMES</span>
          </motion.h1>
          <p className="text-slate-400 text-sm md:text-xl italic font-light tracking-wide px-4 md:px-0">
            กรอบแว่นคุณภาพพรีเมียมที่คุณเลือกได้เอง
          </p>
        </header>

        {/* 📦 Grid สินค้า: มือถือโชว์ 2 คอลัมน์ (grid-cols-2) / คอมโชว์ 3 (lg:grid-cols-3) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 md:gap-x-8 md:gap-y-16">
          {frames.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Box ใส่แว่น: ปรับมน (rounded) ให้เข้ากับมือถือ */}
              <div className="aspect-[1/1] bg-slate-50 rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-4 md:mb-8 border border-slate-100 flex items-center justify-center p-4 md:p-10 relative hover:bg-white hover:shadow-2xl transition-all duration-500">
                <Image 
                  src={item.img} 
                  alt={item.name}
                  fill
                  className="object-contain p-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* ข้อมูลแว่น: ปรับขนาดตัวหนังสือให้พอดีจอเล็ก */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-2">
                <div>
                  <h3 className="text-sm md:text-2xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">New Arrival</p>
                </div>
                <div className="mt-1 md:mt-0">
                  <p className="text-sm md:text-2xl font-black text-blue-600 leading-none">฿{item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}