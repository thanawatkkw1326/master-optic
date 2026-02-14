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
      desc: 'เกิดจากลูกตายาวเกินไป แสงตกกระทบ "ก่อน" ถึงจอประสาทตา ทำให้มองไกลมัว',
      impact: 'กระทบ: ขับรถ, มองกระดาน, ดูหนัง',
      solution: 'การแก้ไข: ใช้เลนส์เว้า เพื่อกระจายแสงให้ลงจุดพอดี',
      image: 'https://images.unsplash.com/photo-1516239482977-b550ba7253f2?w=1200&q=80',
      blur: 'blur-[6px]',
      icon: '👓'
    },
    astigmatism: {
      id: 'astigmatism',
      title: 'Astigmatism',
      thaiTitle: 'สายตาเอียง',
      desc: 'กระจกตามีความโค้งไม่เท่ากัน แสงโฟกัสหลายจุด ทำให้ภาพซ้อนหรือบิดเบี้ยว',
      impact: 'กระทบ: ไฟฟุ้งตอนกลางคืน, ปวดหัว, ตัวเลขซ้อน',
      solution: 'การแก้ไข: ใช้เลนส์ทรงกระบอกปรับโฟกัสแต่ละแกน',
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&q=80',
      blur: 'blur-[2px] opacity-80 shadow-[8px_8px_15px_rgba(255,255,255,0.3)]',
      icon: '💫'
    },
    presbyopia: {
      id: 'presbyopia',
      title: 'Presbyopia',
      thaiTitle: 'สายตายาวตามวัย',
      desc: 'ความเสื่อมตามธรรมชาติของกล้ามเนื้อตา (40+) ทำให้โฟกัสระยะใกล้ไม่ได้',
      impact: 'กระทบ: อ่านไลน์, อ่านฉลาก, ต้องยืดแขนอ่าน',
      solution: 'การแก้ไข: เลนส์โปรเกรสซีฟ มองชัดทุกระยะไร้รอยต่อ',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80',
      blur: 'blur-[12px] saturate-[0.8]',
      icon: '👴'
    },
    blueLight: {
      id: 'blueLight',
      title: 'Blue Light Hazard',
      thaiTitle: 'อันตรายจากแสงสีฟ้า',
      desc: 'แสงจากจอทำลายเซลล์จอประสาทตาหากรับสะสมนานเกินไป',
      impact: 'กระทบ: ตาล้า, ตาแห้ง, นอนไม่หลับ',
      solution: 'การแก้ไข: เลนส์ Blue Block กรองแสงอันตรายออก',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80',
      blur: 'blur-[1px] sepia-[0.4] saturate-[1.2]',
      icon: '📱'
    }
  };

  const current = topics[activeTopic as keyof typeof topics];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* --- Header: ปรับตัวหนังสือให้เล็กลงในมือถือ ไม่ให้ล้น --- */}
      <section className="pt-24 md:pt-32 pb-10 md:pb-16 px-4 bg-slate-900 text-white text-center">
        <motion.h1 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase mb-4"
        >
          Vision <span className="text-blue-400">Knowledge</span>
        </motion.h1>
        <p className="text-slate-400 text-xs md:text-base max-w-2xl mx-auto italic px-4">
          "เพราะความเข้าใจ คือก้าวแรกของการถนอมสายตาอย่างถูกวิธี"
        </p>
      </section>

      {/* --- Main Content --- */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          
          {/* Navigation Menu: ในมือถือจะเป็นแถวนอนสไลด์ได้ (เหมือน Instagram Story) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="hidden lg:block text-[11px] font-black uppercase tracking-widest text-blue-600 mb-6 border-l-4 border-blue-600 pl-4">เลือกหัวข้อการเรียนรู้</p>
            
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 px-1 no-scrollbar">
              {Object.values(topics).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTopic(t.id)}
                  className={`flex-shrink-0 w-[200px] lg:w-full p-4 md:p-6 rounded-2xl md:rounded-3xl text-left transition-all flex items-center gap-4 border ${activeTopic === t.id ? 'bg-white border-blue-600 shadow-xl ring-2 ring-blue-500/20' : 'bg-white/50 border-slate-100 opacity-80'}`}
                >
                  <span className="text-2xl md:text-3xl">{t.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-slate-800 leading-none">{t.thaiTitle}</h4>
                    <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase mt-1">{t.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Display Area: แก้ไขสัดส่วนรูปที่นี่ */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Simulator: มือถือเป็นจัตุรัส (square) คอมเป็นแนวนอน (video) */}
            <div className="relative aspect-square md:aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-white border-4 md:border-8 border-white group">
              <img src={current.image} className="absolute inset-0 w-full h-full object-cover" alt="Clear" />
              
              <motion.div 
                className="absolute inset-0 overflow-hidden border-r-2 border-white/50 z-10"
                style={{ width: `${sliderPos}%` }}
              >
                <img src={current.image} className={`absolute inset-0 w-full h-full object-cover max-w-none ${current.blur}`} style={{ width: '1000px' }} alt="Blur" />
              </motion.div>

              {/* Labels: ปรับขนาดตัวหนังสือในมือถือให้จิ๋วแต่แจ๋ว */}
              <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[8px] md:text-[10px] font-bold text-white uppercase tracking-widest">จำลองอาการ</div>
              <div className="absolute top-4 right-4 z-20 bg-blue-600 px-3 py-1 rounded-lg text-[8px] md:text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">หลังแก้ไข</div>

              {/* Slider Input: เต็มพื้นที่รูปเพื่อให้กดง่าย */}
              <input type="range" min="0" max="100" value={sliderPos} onChange={(e) => setSliderPos(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-pointer" />
              
              <div className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white border-2 md:border-4 border-white shadow-2xl">↔️</div>
              </div>
            </div>

            {/* Info Cards: ในมือถือจะเรียงต่อกันเป็นแนวตั้ง */}
            <AnimatePresence mode="wait">
              <motion.div key={activeTopic} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 md:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
                  <h3 className="text-lg md:text-xl font-black italic text-blue-600 mb-3 uppercase">{current.thaiTitle} คืออะไร?</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{current.desc}</p>
                </div>
                <div className="p-6 md:p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col justify-center">
                  <p className="text-blue-400 font-bold text-[9px] uppercase mb-2">Expert Advice</p>
                  <p className="text-xs md:text-sm text-slate-300 mb-3">{current.impact}</p>
                  <div className="h-[1px] bg-slate-800 w-full mb-3" />
                  <p className="text-sm md:text-base font-bold italic">{current.solution}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- Footer CTA --- */}
      <section className="bg-slate-100 py-12 md:py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-black italic uppercase mb-4 text-slate-800 leading-tight">ไม่มั่นใจว่าตัวเองมีปัญหาสายตาแบบไหน?</h2>
          <button className="w-full md:w-auto bg-blue-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] md:text-[11px] shadow-xl active:scale-95 transition-all">นัดเวลาตรวจสายตาฟรี</button>
        </div>
      </section>
    </main>
  );
}