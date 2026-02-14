"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 🏢 Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform">
                M
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                Master<span className="text-blue-600">Optic</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-xs">
              ศูนย์จักษุมาตรและแว่นตาพรีเมียมที่รวบรวมเทคโนโลยี AI ที่ล้ำสมัยที่สุด เพื่อการมองเห็นที่สมบูรณ์แบบของคุณ
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-blue-500">Navigation</h4>
            <ul className="space-y-4">
              {['Frames', 'Lenses', 'Vision Test', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-300 hover:text-white hover:pl-2 transition-all text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-blue-500">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500">📍</span>
                <span>123 สุขุมวิท, วัฒนา, กรุงเทพฯ 10110</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span>
                <a href="tel:0812345678" className="hover:text-white transition-colors">081-234-5678</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">💬</span>
                <a href="#" className="hover:text-white transition-colors">Line: @masteroptic</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <h4 className="text-sm font-bold mb-4 italic">นัดหมายตรวจวัดสายตา</h4>
            <p className="text-xs text-slate-400 mb-6 font-light">รับคำปรึกษาจากจักษุมาตรผู้เชี่ยวชาญฟรี ไม่มีค่าใช้จ่าย</p>
            <Link href="/contact" className="block w-full py-4 bg-blue-600 hover:bg-white hover:text-blue-600 text-center rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-blue-600/20">
              Book Now
            </Link>
          </div>
        </div>

        {/* 📋 Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
            © {currentYear} Master Optic Studio. All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {['FB', 'IG', 'LINE'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] font-black text-slate-500 hover:text-blue-500 transition-colors tracking-widest"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}