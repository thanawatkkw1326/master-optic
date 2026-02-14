"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image'; // นำเข้า Image Component ของ Next.js

const slides = [
  { id: 1, url: '/band1.jpg', title: 'Urban Lifestyle', sub: 'New Collection 2026' },
  { id: 2, url: '/band2.jpg', title: 'Exquisite Craft', sub: 'Premium Selection' },
  { id: 3, url: '/band3.jpg', title: 'Smart Vision', sub: 'AI Technology' },
  { id: 4, url: '/band4.jpg', title: 'ถูกหลักอนามัย', sub: 'ไว้ใจป๋า' },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    // ปรับ aspect ratio ให้เหมาะกับมือถือมากขึ้น (aspect-[4/5] บนมือถือจะสูงสวยพอดีจอ)
    <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl aspect-[4/5] md:aspect-[21/9] w-full bg-slate-200 group cursor-pointer transition-all duration-500">
      
      {/* 🖼️ Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* เปลี่ยนจาก <img> เป็น <Image /> */}
          <Image 
            src={slide.url} 
            alt={slide.title}
            fill // ให้รูปเต็มพื้นที่
            priority={index === 0} // ให้รูปแรกโหลดก่อนทันที (แก้ปัญหาจอดำ)
            className="object-cover transition-transform duration-[5000ms] lg:group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 1200px" // บอกขนาดให้ Next.js ย่อรูปให้ถูก
          />
          
          {/* ปรับ Gradient ให้เข้มขึ้นนิดหน่อยเพื่อให้ตัวหนังสืออ่านง่ายบนมือถือ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* 📍 Glass Card - ปรับขนาดและ Padding ให้เหมาะกับนิ้วมือ */}
          <div className="absolute bottom-10 left-4 right-4 md:bottom-12 md:left-12 z-20">
            <div className={`backdrop-blur-md bg-black/20 border border-white/20 p-6 md:p-12 rounded-[2rem] shadow-2xl transition-all duration-1000 ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
                {slide.sub}
              </span>
              <h2 className="text-white text-3xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
                {slide.title}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* 🕹️ Navigation Arrows (ปุ่มลูกศรซ่อนบนมือถือเพื่อให้ดูคลีน) */}
      <div className="hidden lg:block">
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
      </div>

      {/* 🔘 Dots - ปรับตำแหน่งให้กึ่งกลางบนมือถือ */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center md:justify-end md:right-12 z-30 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === current ? 'w-8 bg-white' : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}