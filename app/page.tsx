"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Banner from './components/Banner';
import Navbar from './components/Navbar'; // ดึง Navbar 5 ปุ่มมาใช้แทนของเก่า

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const features = [
    { title: "AI Exam", icon: "🔬", desc: "ตรวจวัดสายตาเชิงลึกด้วยระบบดิจิทัล", link: "/vision-test" },
    { title: "Frames", icon: "🕶️", desc: "กรอบแบรนด์เนมคัดพิเศษจากทั่วโลก", link: "/frames" },
    { title: "Lenses", icon: "✨", desc: "นวัตกรรมเลนส์เปลี่ยนสีระดับโลก", link: "/lenses" }, 
    { title: "Contact", icon: "📍", desc: "ดูแลระดับ World-class ยูเซ็นเตอร์ มข.", link: "/contact" }
  ];

  return (
    <main className="relative min-h-screen bg-[#fcfcfc] overflow-x-hidden">
      {/* 🧭 ใช้ Navbar ตัวใหม่ที่กางโชว์ 5 ปุ่ม */}
      <Navbar />

      {/* 🌌 Ambient Background - ทำให้ดูมีมิติ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[80%] h-[40%] bg-blue-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 left-0 w-[60%] h-[40%] bg-indigo-50/50 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 pt-40 md:pt-56 px-4 md:px-6 max-w-7xl mx-auto">
        
        {/* 🚀 Banner Section */}
        <motion.section 
          style={{ scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl mb-12 md:mb-28 border border-white"
        >
          <Banner />
        </motion.section>

        {/* 🖋️ Headline - ปรับให้ Compact ขึ้นในมือถือ */}
        <div className="text-center mb-16 md:mb-32">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h1 className="text-6xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.85] mb-6 text-slate-900">
              Master <br /> 
              <span className="text-blue-600">Optic</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-blue-600"></div>
              <p className="text-[10px] md:text-xl text-blue-600 font-black uppercase tracking-[0.3em]">The Visionary Studio</p>
              <div className="h-[1px] w-8 bg-blue-600"></div>
            </div>
            <p className="text-sm md:text-2xl text-slate-400 font-light italic">"นิยามใหม่แห่งการมองเห็นที่สมบูรณ์แบบ"</p>
          </motion.div>
        </div>

        {/* 📦 Feature Grid - ปรับเป็นแนวตั้งพรีเมียมในมือถือ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-40">
          {features.map((item, index) => (
            <Link href={item.link} key={item.title}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileTap={{ scale: 0.97 }}
                className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm flex items-center md:flex-col md:text-center gap-5 group"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl md:text-5xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-black uppercase italic tracking-tighter text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] md:text-sm mt-1 font-medium leading-tight">
                    {item.desc}
                  </p>
                </div>
                <div className="md:hidden text-slate-300">→</div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* 🎬 Marquee Effect */}
        <div className="overflow-hidden py-8 border-y border-slate-100 mb-20">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10"
          >
            {[1, 2, 3].map((i) => (
              <span key={i} className="text-2xl md:text-5xl font-black text-slate-900/10 uppercase italic">
                World Class Lens • Premium Frames • AI Vision Test • Expert Service •
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </main>
  );
}