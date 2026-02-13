"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 📍 Header Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 text-xs font-black tracking-[0.4em] uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 uppercase">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">
            ยินดีต้อนรับสู่ Master Optic หากคุณมีข้อสงสัยเรื่องสายตา หรือต้องการนัดหมายตรวจวัดสายตา ทีมงานของเราพร้อมดูแลคุณ
          </p>
        </div>
      </section>

      {/* 📮 Contact Content */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info & Form */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-blue-600 text-[10px] uppercase tracking-widest mb-4">Location</h4>
                <p className="text-slate-900 font-bold leading-relaxed">
                  123 ถนนสุขุมวิท แขวงคลองเตย <br /> เขตวัฒนา กรุงเทพฯ 10110
                </p>
              </div>
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-blue-600 text-[10px] uppercase tracking-widest mb-4">Opening Hours</h4>
                <p className="text-slate-900 font-bold">เปิดบริการทุกวัน</p>
                <p className="text-slate-500 text-sm">10:00 น. - 20:00 น.</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6 bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">ส่งข้อความหาเรา</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="ชื่อของคุณ" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                <input type="text" placeholder="เบอร์โทรศัพท์" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
              </div>
              <textarea placeholder="ข้อความที่ต้องการสอบถาม..." rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 transition-all outline-none"></textarea>
              <button className="w-full py-5 bg-slate-950 text-white rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all shadow-lg active:scale-95">
                ส่งข้อความ
              </button>
            </form>
          </div>

          {/* Right Side: Map Display */}
          <div className="h-full min-h-[500px] w-full bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-100 sticky top-32">
             {/* 💡 ในอนาคต พี่สามารถเอา iframe จาก Google Maps มาใส่ตรงนี้ได้ครับ */}
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-10 text-center">
                <div className="text-6xl mb-6">📍</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Master Optic Store</h4>
                <p className="text-sm font-light mb-8 max-w-xs">แผนที่ Google Maps จะแสดงที่นี่ <br /> (แทนที่ด้วย Iframe ของร้านป๋าได้เลยครับ)</p>
                <div className="w-full h-64 bg-slate-200 rounded-3xl animate-pulse"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 📱 Social Links Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-12 text-slate-300">
           <a href="#" className="hover:text-blue-600 transition-colors flex flex-col items-center gap-3">
             <span className="text-3xl">📱</span>
             <span className="text-xs font-black uppercase tracking-widest">Line Official</span>
           </a>
           <a href="#" className="hover:text-blue-600 transition-colors flex flex-col items-center gap-3">
             <span className="text-3xl">🔵</span>
             <span className="text-xs font-black uppercase tracking-widest">Facebook</span>
           </a>
           <a href="#" className="hover:text-pink-500 transition-colors flex flex-col items-center gap-3">
             <span className="text-3xl">📸</span>
             <span className="text-xs font-black uppercase tracking-widest">Instagram</span>
           </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}