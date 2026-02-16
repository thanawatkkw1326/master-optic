"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);

  // เช็คสถานะร้านเปิด-ปิด (จ-ศ ถึง 19:00, ส-อา ถึง 17:00)
  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();
    
    const isWeekend = (day === 0 || day === 6);
    const closeHour = isWeekend ? 17 : 19;

    if (hour >= 10 && hour < closeHour) {
      setIsOpen(true);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* --- 🏔️ ส่วนหัวหน้าเว็บ (Header) --- */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-[12px] font-bold tracking-widest mb-8"
          >
            <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-400 shadow-[0_0_12px_#4ade80]' : 'bg-red-500'}`}></span>
            {isOpen ? 'ขณะนี้ร้านเปิดให้บริการ' : 'ขณะนี้ร้านปิดให้บริการ'}
          </motion.div>
          
          <h1 className="text-5xl md:text-9xl font-black italic tracking-tighter uppercase mb-6 leading-none">
            ติดต่อ <span className="text-blue-500 text-outline">เรา</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl font-light max-w-2xl mx-auto italic">
            "ดูแลสายตาโดยผู้เชี่ยวชาญ พร้อมเครื่องมือที่ทันสมัยที่สุดในขอนแก่น"
          </p>
        </div>
      </section>

      {/* --- 📦 ข้อมูลติดต่อหลัก --- */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 md:-mt-24 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* ฝั่งซ้าย: ที่อยู่และเวลาเปิดทำการ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl border border-slate-100"
          >
            <div className="space-y-10">
              <div>
                <h2 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-6">ที่ตั้งร้าน</h2>
                <div className="flex gap-6">
                  <div className="text-4xl">📍</div>
                  <div>
                    <p className="text-xl md:text-3xl font-black text-slate-900 mb-2 italic">Master Optic (สาขา มข.)</p>
                    <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium">
                      123/118 โครงการยูเซ็นเตอร์ มข. (อคม.5) ต.ในเมือง อ.เมือง จ.ขอนแก่น
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full" />

              <div>
                <h2 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-6">เวลาเปิดให้บริการ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                     <p className="text-xs font-black text-slate-400 mb-2">วันจันทร์ - วันศุกร์</p>
                     <p className="text-2xl font-black text-slate-900 italic">10:00 - 19:00 น.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-[2rem] border-2 border-blue-100">
                     <p className="text-xs font-black text-blue-500 mb-2">วันเสาร์ - วันอาทิตย์</p>
                     <p className="text-2xl font-black text-blue-600 italic">10:00 - 17:00 น.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://maps.app.goo.gl/ChIJYTlorpqKIjER-biw-C-dO6I', '_blank')}
                className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4"
              >
                นำทางด้วย Google Maps <span className="text-xl">↗️</span>
              </button>
            </div>
          </motion.div>

          {/* ฝั่งขวา: ปุ่มติดต่อด่วน */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* เบอร์โทรศัพท์ใหม่ */}
            <motion.a 
              href="tel:0945299469"
              className="block group p-10 rounded-[3rem] bg-blue-600 text-white shadow-2xl hover:bg-slate-900 transition-all duration-500 relative overflow-hidden text-center"
            >
              <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-4 opacity-70 italic">Hotline</p>
                <h3 className="text-4xl font-black italic mb-2">โทรปรึกษาด่วน</h3>
                <p className="text-3xl md:text-4xl font-black tracking-tight text-white">094-529-9469</p>
              </div>
              <div className="mt-6 inline-flex w-14 h-14 bg-white/10 rounded-full items-center justify-center text-2xl group-hover:rotate-12 transition-transform">📞</div>
            </motion.a>

            {/* Social Media */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://line.me/ti/p/@masteroptic" target="_blank" className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-[#06C755] text-white shadow-lg active:scale-95 transition-all">
                <span className="text-4xl mb-3">💬</span>
                <p className="text-[10px] font-black uppercase mb-1">LINE ID</p>
                <p className="font-black italic text-lg">@masteroptic</p>
              </a>
              <a href="https://www.facebook.com/kkuoptic" target="_blank" className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-[#1877F2] text-white shadow-lg active:scale-95 transition-all">
                <span className="text-4xl mb-3">🔵</span>
                <p className="text-[10px] font-black uppercase mb-1">FACEBOOK</p>
                <p className="font-black italic text-lg">เพจร้าน</p>
              </a>
            </div>

            {/* นัดหมายล่วงหน้า */}
            <div className="p-8 rounded-[3rem] bg-white border-2 border-slate-100 text-center shadow-sm">
               <h4 className="text-xl font-black text-slate-900 mb-2 italic">นัดคิวตรวจวัดสายตา</h4>
               <p className="text-slate-400 text-sm mb-6 font-medium italic">"จองล่วงหน้า ไม่ต้องรอนาน"</p>
               <button className="w-full py-4 bg-slate-50 border border-slate-200 rounded-xl font-black text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                 กดเพื่อจองคิวฟรี
               </button>
            </div>

          </div>
        </div>
      </section>

      {/* ปุ่มลอยมือถือ (Floating) */}
      <div className="fixed bottom-8 right-6 z-[99] flex flex-col gap-4 md:hidden">
        <a href="tel:0945299469" className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-3xl flex items-center justify-center text-3xl animate-bounce">📞</a>
        <a href="https://line.me/ti/p/@masteroptic" className="w-16 h-16 bg-[#06C755] text-white rounded-full shadow-3xl flex items-center justify-center text-3xl">💬</a>
      </div>
    </main>
  );
}