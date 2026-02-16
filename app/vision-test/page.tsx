"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function VisionKnowledge() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTopic, setActiveTopic] = useState('myopia');

  const topics = {
    myopia: { 
      id: 'myopia', 
      title: 'Nearsightedness', 
      thaiTitle: 'สายตาสั้น', 
      desc: 'มองใกล้ชัด แต่มองไกลมัว เกิดจากลูกตายาวเกินไป หรือกระจกตามีความโค้งมากเกินไป ทำให้แสงตกกระทบไม่ถึงจอประสาทตา', 
      impact: 'สิ่งที่พบ: มองกระดานไม่ชัด, ขับรถลำบาก, ต้องหยีตาเวลามองไกล', 
      solution: 'แนวทางแก้ไข: ใช้เลนส์เว้า ช่วยกระจายแสงให้ไปตกกระทบบนจอประสาทตาพอดี', 
      image: 'https://images.unsplash.com/photo-1516239482977-b550ba7253f2?w=1200&q=80', 
      blur: 'blur-[6px]', 
      icon: '👓' 
    },
    astigmatism: { 
      id: 'astigmatism', 
      title: 'Astigmatism', 
      thaiTitle: 'สายตาเอียง', 
      desc: 'ภาพมีความเบลอหรือซ้อนในบางมุม เกิดจากความโค้งของกระจกตาไม่เท่ากัน ทำให้แสงโฟกัสมากกว่าหนึ่งจุด', 
      impact: 'สิ่งที่พบ: เห็นไฟฟุ้งกระจายตอนกลางคืน, ปวดหัวง่าย, อ่านตัวเลขสลับกัน', 
      solution: 'แนวทางแก้ไข: ใช้เลนส์ทรงกระบอก เพื่อรวมแสงจากทุกทิศทางให้ลงจุดเดียว', 
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&q=80', 
      blur: 'blur-[2px] opacity-80', 
      icon: '💫' 
    },
    presbyopia: { 
      id: 'presbyopia', 
      title: 'Presbyopia', 
      thaiTitle: 'สายตายาวตามวัย', 
      desc: 'ปัญหาการมองใกล้ไม่ชัดที่เริ่มพบเมื่ออายุ 40+ เกิดจากเลนส์ตาขาดความยืดหยุ่นตามธรรมชาติ', 
      impact: 'สิ่งที่พบ: ต้องยืดแขนอ่านหนังสือ, มองจอโทรศัพท์ไม่ชัด, ตาล้าเวลาอ่านหนังสือ', 
      solution: 'แนวทางแก้ไข: ใช้เลนส์โปรเกรสซีฟ มองชัดทุกระยะ ไร้รอยต่อ', 
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80', 
      blur: 'blur-[12px] saturate-[0.8]', 
      icon: '👴' 
    },
    blueLight: { 
      id: 'blueLight', 
      title: 'Blue Light Hazard', 
      thaiTitle: 'อันตรายจากแสงสีฟ้า', 
      desc: 'แสงพลังงานสูงจากหน้าจอคอมพิวเตอร์และมือถือ ที่อาจสะสมและทำลายเซลล์จอประสาทตา', 
      impact: 'สิ่งที่พบ: ตาล้าสะสม, ตาแห้ง, ปวดกระบอกตา, มีปัญหาเรื่องการนอนหลับ', 
      solution: 'แนวทางแก้ไข: ใช้เลนส์กรองแสงสีฟ้า (Blue Cut) เพื่อถนอมดวงตาจากหน้าจอ', 
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80', 
      blur: 'blur-[1px] sepia-[0.4] saturate-[1.2]', 
      icon: '📱' 
    }
  };

  const current = topics[activeTopic as keyof typeof topics];

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* --- 🏔️ ส่วนหัว (Header) --- */}
      <section className="pt-48 pb-10 md:pt-60 md:pb-16 px-4 bg-slate-950 text-white text-center">
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black italic tracking-tighter uppercase mb-2"
          >
            สาระ <span className="text-blue-500">น่ารู้</span>
          </motion.h1>
          <p className="text-slate-500 text-[10px] md:text-lg uppercase tracking-[0.3em] font-bold italic">
             เพราะการมองเห็นที่ชัดเจน คือคุณภาพชีวิตที่ดีกว่า
          </p>
        </div>
      </section>

      {/* --- 🕹️ เมนูเลือกด้านบน (Sticky Menu) --- */}
      <nav className="sticky top-[135px] z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-start md:justify-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {Object.values(topics).map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTopic(t.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 border-2 ${
                  activeTopic === t.id 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                  : 'bg-white border-slate-100 text-slate-400 hover:border-blue-200'
                }`}
              >
                <span className="text-xl md:text-2xl">{t.icon}</span>
                <span className="text-xs md:text-sm font-black uppercase italic tracking-tight">{t.thaiTitle}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- 📺 ส่วนจำลองสายตา (Simulator) --- */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-10">
          
          <div className="relative aspect-[4/5] md:aspect-video rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl bg-white border-[6px] md:border-[12px] border-white ring-1 ring-slate-100">
            <img src={current.image} className="absolute inset-0 w-full h-full object-cover" alt="ภาพชัดเจน" />
            
            <motion.div 
              className="absolute inset-0 overflow-hidden border-r-4 border-white/90 z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <img src={current.image} className={`absolute inset-0 w-full h-full object-cover max-w-none ${current.blur}`} style={{ width: '100vw' }} alt="ภาพเบลอ" />
            </motion.div>

            {/* ป้ายกำกับ */}
            <div className="absolute top-6 left-6 z-20 bg-black/70 backdrop-blur-md px-4 py-2 rounded-2xl text-[9px] font-black text-white uppercase tracking-widest border border-white/10">ก่อนแก้ไข</div>
            <div className="absolute top-6 right-6 z-20 bg-blue-600 px-4 py-2 rounded-2xl text-[9px] font-black text-white uppercase tracking-widest shadow-xl border border-blue-400">หลังแก้ไข</div>

            <input type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-pointer" />
            
            <div className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white border-[4px] border-white shadow-2xl">
                <span className="text-2xl animate-pulse">↔️</span>
              </div>
            </div>
          </div>

          {/* รายละเอียดข้อมูล */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTopic} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                <h3 className="text-3xl font-black text-blue-600 mb-4 italic uppercase">{current.thaiTitle}</h3>
                <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">{current.desc}</p>
              </div>
              
              <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">แนวทางการดูแล</p>
                  <p className="text-slate-400 mb-6 font-medium text-sm md:text-base leading-snug">{current.impact}</p>
                  <p className="text-xl md:text-2xl font-black italic text-white border-l-4 border-blue-600 pl-5">{current.solution}</p>
                </div>
                <div className="absolute -bottom-6 -right-6 text-9xl opacity-[0.05]">{current.icon}</div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* --- ส่วนท้าย (CTA) --- */}
      <section className="bg-slate-950 py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-8 leading-tight">วัดสายตาด้วยระบบ AI <br/> ที่ร้าน Master Optic</h2>
        <button className="bg-blue-600 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-[13px] shadow-2xl hover:bg-white hover:text-blue-600 transition-all">นัดเวลาตรวจสายตาฟรี</button>
      </section>
    </main>
  );
}