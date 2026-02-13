"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Banner from './components/Banner';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const features = [
    { title: "AI Exam", icon: "🔬", desc: "ตรวจวัดสายตาเชิงลึกด้วยระบบดิจิทัลแม่นยำสูง", link: "/vision-test" },
    { title: "Exquisite", icon: "🕶️", desc: "กรอบแว่นแบรนด์เนมคัดพิเศษจากทั่วโลก", link: "/frames" },
    { title: "Lenses", icon: "✨", desc: "นวัตกรรมเลนส์เปลี่ยนสีและกรองแสงระดับโลก", link: "/lenses" }, 
    { title: "Standard", icon: "🛡️", desc: "บริการหลังการขายระดับ World-class", link: "/contact" }
  ];

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      
      {/* 🧭 Header & Logo Section - ปรับปรุงใหม่ใส่โลโก้แทนตัว M */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-8 pointer-events-none">
        <Link href="/" className="pointer-events-auto inline-block">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            {/* 📸 ส่วนของโลโก้ (แทนที่ตัว M เดิม) */}
            <div className="relative w-14 h-14 flex items-center justify-center border-2 border-slate-100 rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm overflow-hidden p-1">
              <img 
                src="/logo22.png" 
                alt="Master Optic Logo" 
                className="w-full h-full object-contain"
                // ถ้าหาไฟล์ไม่เจอ จะแสดงตัว M สำรองไว้ให้ครับ
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-blue-600 font-black text-xl">M</span>';
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-black leading-none tracking-tighter text-slate-900 uppercase italic">
                Master<span className="text-blue-600">Optic</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase leading-none mt-1">
                The Visionary Studio
              </span>
            </div>
          </motion.div>
        </Link>
      </nav>

      {/* 🌌 พื้นหลัง Ambient Light */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 pt-[120px] px-6 max-w-7xl mx-auto">
        
        {/* 🚀 Banner Section */}
        <motion.section 
          style={{ scale }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] mb-28 border border-white/20"
        >
          <Banner />
        </motion.section>

        {/* 🖋️ Headline */}
        <div className="text-center mb-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter uppercase leading-[0.8] mb-8 text-slate-900">
              Master <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-indigo-800">
                Optic
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light italic">"นิยามใหม่แห่งการมองเห็นที่สมบูรณ์แบบ"</p>
          </motion.div>
        </div>

        {/* 📦 Feature Grid - 4 ช่อง */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {features.map((item, index) => (
            <Link href={item.link} key={item.title}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  rotateX: 4,
                  rotateY: -4,
                  boxShadow: "0 40px 80px -15px rgba(0,0,0,0.1)" 
                }}
                className="bg-white/70 backdrop-blur-md p-10 rounded-[3.5rem] border border-slate-100 shadow-xl cursor-pointer h-full transition-all flex flex-col items-center text-center group"
              >
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-2xl font-black mb-3 uppercase italic tracking-tighter group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="w-8 group-hover:w-full h-1 bg-blue-600 mb-6 transition-all duration-500" />
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* 🎬 Marquee Effect */}
        <div className="overflow-hidden py-20 border-y border-slate-100 mb-40">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-20"
          >
            {[1, 2, 3].map((i) => (
              <span key={i} className="text-6xl font-black text-slate-900 uppercase italic opacity-60">
                World Class Lens • Premium Frames • AI Vision Test • Expert Service •
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </main>
  );
}