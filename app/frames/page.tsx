"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FramesPage() {
  // ข้อมูลแว่นตา (เรียกผ่านโฟลเดอร์ public/frames/)
  const frames = [
    { id: 1, name: "Premium Model 01", price: "3,500", img: "/frames/frames1.png" },
    { id: 2, name: "Vintage Series 02", price: "4,200", img: "/frames/frames2.png" },
    { id: 3, name: "Modern Craft 03", price: "3,900", img: "/frames/frames3.png" },
    { id: 4, name: "Urban Style 04", price: "5,500", img: "/frames/frames4.png" },
    { id: 5, name: "Classic Gold 05", price: "4,800", img: "/frames/frames5.png" },
    { id: 6, name: "Dark Shadow 06", price: "3,200", img: "/frames/frames6.png" },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4">
            OUR <span className="text-blue-600">FRAMES</span>
          </h1>
          <p className="text-slate-400 text-xl italic font-light tracking-wide">กรอบแว่นคุณภาพพรีเมียมที่คุณเลือกได้เอง</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {frames.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[4/3] bg-slate-50 rounded-[3rem] overflow-hidden mb-8 border border-slate-100 flex items-center justify-center p-10 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<div class="text-xs text-red-400">หาไฟล์ ${item.img} ไม่เจอ</div>`;
                  }}
                />
              </div>

              <div className="flex justify-between items-center px-4">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-1">New Arrival</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-slate-900 leading-none">฿{item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}