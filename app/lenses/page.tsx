"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const lensTypes = [
  {
    id: 1,
    name: 'Blue Cut Precision',
    benefit: 'กรองแสงสีฟ้าจากหน้าจอ',
    desc: 'เหมาะสำหรับผู้ที่ใช้งานคอมพิวเตอร์และมือถือเป็นเวลานาน ช่วยลดอาการล้าของดวงตา',
    icon: '💻',
    color: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    id: 2,
    name: 'Photochromic Pro',
    benefit: 'เลนส์ออกแดดเปลี่ยนสี',
    desc: 'เปลี่ยนสีเข้มขึ้นอัตโนมัติเมื่อเจอแสง UV และใสเคลียร์เมื่ออยู่ในร่ม สะดวกไม่ต้องพกแว่นกันแดด',
    icon: '☀️',
    color: 'bg-slate-100',
    textColor: 'text-slate-600'
  },
  {
    id: 3,
    name: 'Ultra Thin 1.74',
    benefit: 'เลนส์ย่อบางพิเศษ',
    desc: 'เทคโนโลยีขัดเลนส์ให้บางและเบาที่สุด เหมาะสำหรับผู้ที่มีค่าสายตาสั้นหรือยาวมากๆ',
    icon: '✨',
    color: 'bg-indigo-50',
    textColor: 'text-indigo-600'
  },
  {
    id: 4,
    name: 'Office Progressive',
    benefit: 'มองได้ทุกระยะในเลนส์เดียว',
    desc: 'ไร้รอยต่อ มองใกล้ กลาง ไกล ได้อย่างเป็นธรรมชาติ เหมาะสำหรับผู้ที่มีสายตายาวตามวัย',
    icon: '👓',
    color: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  }
];

export default function LensesPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* 🏔️ Hero Section - ปรับขนาด Text ให้เหมาะกับมือถือ */}
      <section className="pt-32 md:pt-48 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-600 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-4 block"
          >
            Lens Technology
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 uppercase"
          >
            Optical <span className="text-blue-600">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base md:text-xl font-light max-w-2xl mx-auto px-4"
          >
            เพราะ "เลนส์" คือหัวใจสำคัญของการมองเห็น เราจึงเลือกใช้เทคโนโลยีระดับโลกเพื่อถนอมสายตาคุณ
          </motion.p>
        </div>
      </section>

      {/* 📦 Lens Types Grid - ปรับ Padding และการจัดเรียงบนมือถือ */}
      <section className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {lensTypes.map((lens, index) => (
            <motion.div 
              key={lens.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 bg-white hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row gap-6 md:gap-8 items-start"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl md:rounded-[2rem] ${lens.color} flex items-center justify-center text-3xl md:text-4xl group-hover:rotate-12 transition-transform duration-500`}>
                {lens.icon}
              </div>
              
              <div className="flex-1">
                <span className={`text-[9px] md:text-[10px] font-black tracking-widest uppercase ${lens.textColor} mb-2 block`}>
                  {lens.benefit}
                </span>
                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                  {lens.name}
                </h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light mb-6">
                  {lens.desc}
                </p>
                <Link href="/contact">
                   <button className="text-slate-900 font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                    ปรึกษาผู้เชี่ยวชาญ <span className="text-blue-600">→</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💡 Info Banner - ปรับให้สวยเด่นบนมือถือ */}
      <section className="px-4 md:px-6 pb-20 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 relative overflow-hidden text-center md:text-left shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="max-w-xl">
              <h2 className="text-white text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                ไม่แน่ใจว่าควรใช้เลนส์แบบไหน?
              </h2>
              <p className="text-slate-400 text-sm md:text-lg font-light">
                เข้ามาตรวจวัดสายตาด้วยระบบ AI ฟรีที่หน้าร้าน <span className="text-blue-400">Master Optic</span> ทีมจักษุมาตรพร้อมให้คำแนะนำที่เหมาะกับคุณที่สุด
              </p>
            </div>
            <Link href="/contact" className="w-full lg:w-auto">
              <button className="w-full lg:w-auto bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all active:scale-95 shadow-xl shadow-blue-600/20">
                นัดหมายตรวจวัดสายตา
              </button>
            </Link>
          </div>
          {/* Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/30 blur-[100px]" />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}