"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function ContactSuccess() {
  const [isOpen, setIsOpen] = useState(false);

  // เช็คสถานะร้านเปิด-ปิด (10:00 - 20:00)
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 10 && hour < 20) {
      setIsOpen(true);
    }
  }, []);

  const shopInfo = {
    name: "แว่นตามาสเตอร์ (Master Optic)",
    address: "123/1189 โครงการยูเซ็นเตอร์ มข. อคม.5 หมู่ 16 ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002",
    phone: "080-400-0803", // เบอร์ร้านป๋า
    line: "@masteroptic",   // LINE ร้าน
    facebook: "Master Optic KKU",
    googleMapsPlaceId: "ChIJYTlorpqKIjER-biw-C-dO6I" // Place ID ร้านป๋าตรงเป๊ะ
  };

  const handleOpenMap = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=Master+Optic+Khon+Kaen&query_place_id=${shopInfo.googleMapsPlaceId}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* --- Header Section --- */}
      <section className="pt-28 pb-16 px-4 bg-slate-900 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
        >
          <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
          {isOpen ? 'ขณะนี้ร้านเปิดให้บริการ' : 'ขณะนี้ร้านปิดให้บริการ'}
        </motion.div>
        
        <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">
          Contact <span className="text-blue-400">Master Optic</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto px-4 leading-relaxed">
          ศูนย์แว่นตาและเลนส์คุณภาพสูง ย่านกังสดาล มหาวิทยาลัยขอนแก่น <br className="hidden md:block"/> พร้อมดูแลสายตาคุณด้วยเครื่องมือที่ทันสมัยที่สุด
        </p>
      </section>

      {/* --- Main Contact Card --- */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* ข้อมูลที่อยู่ (ซ้าย) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100"
          >
            <h2 className="text-2xl font-black italic text-slate-900 mb-8 uppercase border-l-4 border-blue-600 pl-4">ข้อมูลร้านค้า</h2>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">ที่ตั้งร้าน</p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-relaxed">{shopInfo.address}</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-3xl">⏰</div>
                <div>
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">เวลาเปิด-ปิด</p>
                  <p className="text-sm md:text-base font-bold text-slate-700 underline decoration-blue-200 underline-offset-4">เปิดทุกวัน: 10:00 น. - 20:00 น.</p>
                </div>
              </div>

              {/* ปุ่มเปิด Maps ภาษาไทย */}
              <button 
                onClick={handleOpenMap}
                className="group w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[13px] shadow-xl hover:bg-blue-600 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <span>กดดูแผนที่และนำทางผ่าน Google Maps</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">↗️</span>
              </button>
            </div>
          </motion.div>

          {/* ช่องทางการติดต่อด่วน (ขวา) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* ปุ่มโทรด่วน */}
            <a href={`tel:${shopInfo.phone.replace(/-/g, '')}`} className="block group p-8 rounded-[2.5rem] bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">Call Now</p>
                  <h3 className="text-3xl font-black italic mb-1">โทรสายด่วน</h3>
                  <p className="text-xl font-bold font-mono">{shopInfo.phone}</p>
                </div>
                <div className="text-5xl group-hover:rotate-12 transition-transform">📞</div>
              </div>
            </a>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4 text-white">
              <a href="https://line.me/ti/p/@masteroptic" target="_blank" className="flex flex-col items-center justify-center p-6 rounded-[2rem] bg-[#06C755] shadow-lg shadow-green-500/20 active:scale-95 transition-all">
                <div className="text-3xl mb-2">💬</div>
                <p className="text-[10px] font-black uppercase">LINE ID</p>
                <p className="font-black italic">ทักไลน์</p>
              </a>
              <a href="https://www.facebook.com/kkuoptic" target="_blank" className="flex flex-col items-center justify-center p-6 rounded-[2rem] bg-[#1877F2] shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                <div className="text-3xl mb-2">🔵</div>
                <p className="text-[10px] font-black uppercase">FACEBOOK</p>
                <p className="font-black italic">เพจร้าน</p>
              </a>
            </div>

            {/* นัดหมายล่วงหน้า */}
            <div className="p-6 rounded-[2rem] bg-white border border-slate-100 text-center">
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">ต้องการความสะดวก?</p>
               <button className="w-full py-4 border-2 border-slate-900 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-slate-900 hover:text-white transition-all">จองคิวตรวจวัดสายตา</button>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Buttons สำหรับมือถือ */}
      <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-3 md:hidden">
        <a href={`tel:${shopInfo.phone.replace(/-/g, '')}`} className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl animate-bounce">📞</a>
        <a href="https://line.me/ti/p/@masteroptic" className="w-14 h-14 bg-[#06C755] text-white rounded-full shadow-2xl flex items-center justify-center text-2xl">💬</a>
      </div>
    </main>
  );
}