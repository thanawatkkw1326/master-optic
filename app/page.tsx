"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Banner from './components/Banner';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]); // ปรับ scale ให้ลดลงนิดเดียวพอครับ

  const features = [
    { title: "AI Exam", icon: "🔬", desc: "ตรวจวัดสายตาเชิงลึกด้วยระบบดิจิทัลแม่นยำสูง", link: "/vision-test" },
    { title: "Exquisite", icon: "🕶️", desc: "กรอบแว่นแบรนด์เนมคัดพิเศษจากทั่วโลก", link: "/frames" },
    { title: "Lenses", icon: "✨", desc: "นวัตกรรมเลนส์เปลี่ยนสีและกรองแสงระดับโลก", link: "/lenses" }, 
    { title: "Standard", icon: "🛡️", desc: "บริการหลังการขายระดับ World-class", link: "/contact" }
  ];

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden"> {/* ป้องกันจอเลื่อนซ้ายขวา */}
      
      {/* 🧭 Header & Logo Section - ปรับให้เล็กลงบนมือถือ */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 md:py-8 pointer-events-none">
        <Link href="/" className="pointer-events-auto inline-block">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 md:gap-4 bg-white/40 backdrop-blur-md p-2 rounded-2xl border border-white/50 shadow-sm"
          >
            <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border-2 border-slate-100 rounded-xl md:rounded-2xl bg-white shadow-sm overflow-hidden p-1">
              <img 
                src="/logo22.png" 
                alt="Master Optic Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-blue-600 font-black text-lg">M</span>';
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-black leading-none tracking-tighter text-slate-900 uppercase italic">
                Master<span className="text-blue-600">Optic</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase leading-none mt-1">
                The Visionary Studio
              </span>
            </div>
          </motion.div>
        </Link>
      </nav>

      {/* 🌌 พื้นหลัง Ambient Light */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[40%] bg-blue-100/40 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[50%] bg-indigo-100/30 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 pt-[100px] md:pt-[150px] px-4 md:px-6 max-w-7xl mx-auto">
        
        {/* 🚀 Banner Section - ปรับโค้งให้มนน้อยลงนิดนึงบนมือถือเพื่อพื้นที่ */}
        <motion.section 
          style={{ scale }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl mb-16 md:mb-28 border border-white/20"
        >
          <Banner />
        </motion.section>

        {/* 🖋️ Headline - แก้ไขจุดนี้ให้ตัวอักษรไม่ล้นจอ */}
        <div className="text-center mb-24 md:mb-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h1 className="text-5xl md:text-[11rem] font-black tracking-tighter uppercase leading-[0.9] mb-6 text-slate-900">
              Master <br className="hidden md:block" /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-indigo-800">
                Optic
              </span>
            </h1>
            <p className="text-base md:text-2xl text-slate-400 font-light italic px-4">"นิยามใหม่แห่งการมองเห็นที่สมบูรณ์แบบ"</p>
          </motion.div>
        </div>

        {/* 📦 Feature Grid - ปรับเป็น 2 คอลัมน์บนมือถือให้ดูสวยและกดง่าย */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-24 md:mb-40">
          {features.map((item, index) => (
            <Link href={item.link} key={item.title}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 shadow-lg cursor-pointer h-full transition-all flex flex-col items-center text-center group"
              >
                <div className="text-4xl md:text-6xl mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-lg md:text-2xl font-black mb-2 uppercase italic tracking-tighter group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="w-6 md:w-8 group-hover:w-full h-1 bg-blue-600 mb-4 md:mb-6 transition-all duration-500" />
                <p className="text-slate-500 text-[10px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                  {item.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* 🎬 Marquee Effect - ปรับขนาดข้อความวิ่งให้พอดีมือถือ */}
        <div className="overflow-hidden py-10 md:py-20 border-y border-slate-100 mb-20 md:mb-40">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10 md:gap-20"
          >
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-3xl md:text-6xl font-black text-slate-900 uppercase italic opacity-40">
                World Class Lens • Premium Frames • AI Vision Test • Expert Service •
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </main>
  );
}