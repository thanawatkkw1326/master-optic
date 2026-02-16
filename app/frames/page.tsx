"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FramesPage() {
  const [filter, setFilter] = useState('ทั้งหมด');

  const categories = ['ทั้งหมด', 'รุ่นพรีเมียม', 'สไตล์วินเทจ', 'เรียบหรูมินิมอล', 'แนวสปอร์ต'];

  const frames = [
    { id: 1, name: "มาสเตอร์ โกลด์ เอลิท", price: "3,500", category: "รุ่นพรีเมียม", img: "/frames/frames1.png", tag: "รุ่นแนะนำ" },
    { id: 2, name: "วินเทจ สกอลาร์", price: "4,200", category: "สไตล์วินเทจ", img: "/frames/frames2.png", tag: "สินค้าหายาก" },
    { id: 3, name: "โมเดิร์น เคลียร์ เทค", price: "3,900", category: "เรียบหรูมินิมอล", img: "/frames/frames3.png", tag: "ขายดีที่สุด" },
    { id: 4, name: "เออร์บัน ไทเทเนียม", price: "5,500", category: "รุ่นพรีเมียม", img: "/frames/frames4.png", tag: "น้ำหนักเบา" },
    { id: 5, name: "คลาสสิก ซิลเวอร์", price: "4,800", category: "สไตล์วินเทจ", img: "/frames/frames5.png", tag: "ลดราคาพิเศษ" },
    { id: 6, name: "สปอร์ต แอคทีฟ แซด", price: "3,200", category: "แนวสปอร์ต", img: "/frames/frames6.png", tag: "มาใหม่ล่าสุด" },
  ];

  const filteredFrames = filter === 'ทั้งหมด' ? frames : frames.filter(f => f.category === filter);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 🏛️ ส่วนหัวหน้าเว็บ: ภาษาไทยตัวใหญ่ อ่านชัด */}
      <section className="pt-40 md:pt-52 pb-16 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
              คลัง <span className="text-blue-600">กรอบแว่นตา</span>
            </h1>
            <div className="h-2 w-24 bg-blue-600 mb-8 mx-auto md:mx-0"></div>
            <p className="max-w-2xl text-slate-500 text-lg md:text-2xl font-medium leading-relaxed">
              เลือกกรอบที่ใช่... ในสไตล์ที่เป็นคุณ <br />
              เราคัดสรรกรอบแว่นคุณภาพพรีเมียม เพื่อการสวมใส่ที่สบายที่สุด
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🕹️ เมนูเลือกประเภท: ปุ่มใหญ่ กดง่าย ภาษาไทยชัดเจน */}
      <nav className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="text-sm font-bold text-slate-400">
            พบสินค้าทั้งหมด {filteredFrames.length} รายการ
          </span>
        </div>
      </nav>

      {/* 📦 รายการสินค้า: เน้นความสมดุล รูปสวย กรอบเป๊ะ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredFrames.map((item) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex flex-col"
              >
                {/* กรอบใส่รูปภาพ: จัดสัดส่วนให้สมดุลกับตัวแว่น */}
                <div className="relative aspect-[4/3] bg-slate-50 rounded-[3rem] overflow-hidden mb-6 border border-slate-100 flex items-center justify-center p-12 transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-blue-100">
                  
                  {/* ป้ายกำกับเล็กๆ */}
                  {item.tag && (
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-blue-600 shadow-sm z-10 border border-blue-50">
                      {item.tag}
                    </div>
                  )}

                  <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                    <Image 
                      src={item.img} 
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* ปุ่มดูรายละเอียดเมื่อเอาเมาส์วาง */}
                  <div className="absolute inset-x-0 bottom-6 px-10 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <button className="w-full bg-slate-900 text-white py-4 rounded-2xl text-xs font-bold shadow-xl">
                      ดูรายละเอียดสินค้า
                    </button>
                  </div>
                </div>

                {/* ข้อมูลแว่น: ภาษาไทยอ่านง่าย */}
                <div className="px-4 space-y-2 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-black text-slate-900 leading-none">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-black text-blue-600 leading-none">
                      ฿{item.price}
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 💡 ส่วนท้าย: เชิญชวนลูกค้า ภาษาไทยเป็นกันเอง */}
      <section className="bg-blue-600 py-24 px-6 mx-4 rounded-[4rem] mb-20 text-white text-center shadow-2xl shadow-blue-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic">
            สนใจกรอบแว่นรุ่นไหนเป็นพิเศษ?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl font-medium mb-12">
            ทักแชทสอบถามหรือนัดเข้ามาลองสวมของจริงได้ที่ร้าน Master Optic <br /> 
            เรามีจักษุมาตรคอยให้คำแนะนำเพื่อให้คุณได้แว่นที่เข้ากับรูปหน้าที่สุด
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-sm shadow-xl hover:bg-slate-100 transition-all">
              ทักไลน์สอบถาม
            </button>
            <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-sm shadow-xl hover:bg-black transition-all">
              จองคิวตรวจสายตาฟรี
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}