"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link'; // เพิ่มบรรทัดนี้เข้าไปครับป๋า!

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
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 🏔️ Hero Section สำหรับหน้าเลนส์ */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 text-xs font-black tracking-[0.4em] uppercase mb-4 block">Lens Technology</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 uppercase">
            Optical <span className="text-blue-600">Solutions</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
            เพราะ "เลนส์" คือหัวใจสำคัญของการมองเห็น เราจึงเลือกใช้เทคโนโลยีระดับโลกเพื่อถนอมสายตาคุณ
          </p>
        </div>
      </section>

      {/* 📦 Lens Types Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lensTypes.map((lens) => (
            <div 
              key={lens.id} 
              className="group p-8 md:p-12 rounded-[3rem] border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className={`w-20 h-20 shrink-0 rounded-[2rem] ${lens.color} flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500`}>
                {lens.icon}
              </div>
              <div>
                <span className={`text-[10px] font-black tracking-widest uppercase ${lens.textColor} mb-2 block`}>
                  {lens.benefit}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  {lens.name}
                </h3>
                <p className="text-slate-500 leading-relaxed font-light mb-6">
                  {lens.desc}
                </p>
                <button className="text-slate-900 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                  ปรึกษาผู้เชี่ยวชาญ <span className="text-blue-600">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 Info Banner */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                ไม่แน่ใจว่าควรใช้เลนส์แบบไหน?
              </h2>
              <p className="text-slate-400 text-lg font-light">
                เข้ามาตรวจวัดสายตาด้วยระบบ AI ฟรีที่หน้าร้าน Master Optic ทีมจักษุมาตรพร้อมให้คำแนะนำที่เหมาะกับไลฟ์สไตล์ของคุณที่สุด
              </p>
            </div>
            <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-xl shadow-blue-600/20 active:scale-95 whitespace-nowrap">
              นัดหมายตรวจวัดสายตา
            </button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>
      </section>

      <Footer />
    </main>
  );
}