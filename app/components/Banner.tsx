"use client";
import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  { id: 1, url: '/band1.jpg', title: 'Urban Lifestyle', sub: 'New Collection 2026' },
  { id: 2, url: '/band2.jpg', title: 'Exquisite Craft', sub: 'Premium Selection' },
  { id: 3, url: '/band3.jpg', title: 'Smart Vision', sub: 'AI Technology' },
  { id: 4, url: '/band4.jpg', title: 'ถูกหลักอนามัย', sub: 'ไว้ใจป๋า' }, // แก้ไข ID ไม่ให้ซ้ำกัน
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
    <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl aspect-[4/5] md:aspect-[21/9] w-full bg-slate-50 group cursor-pointer transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] lg:hover:-translate-y-2">
      
      {/* 🖼️ Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.url} className="w-full h-full object-cover transition-transform duration-[5000ms] lg:group-hover:scale-105" alt={slide.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          
          {/* 📍 Glass Card - ปรับขนาดให้เข้ากับโทรศัพท์ */}
          <div className="absolute bottom-6 left-4 right-4 md:bottom-12 md:left-12 z-20">
            <div className={`backdrop-blur-xl bg-black/30 border border-white/20 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl transition-all duration-1000 ${
              index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
                {slide.sub}
              </span>
              <h2 className="text-white text-2xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg">
                {slide.title}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* 🕹️ Navigation Arrows (ซ่อนในโทรศัพท์เพื่อให้ดูคลีน) */}
      <button 
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-40 w-14 h-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* 🔘 Dots - ปรับขนาดให้พอดีมือถือ */}
      <div className="absolute bottom-10 right-0 left-0 justify-center md:right-10 md:left-auto z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}