"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 🏢 ส่วนเนื้อหาหลักของ Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* คอลัมน์ที่ 1: แบรนด์และสโลแกน */}
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
              ศูนย์จักษุมาตรและแว่นตาพรีเมียม มหาวิทยาลัยขอนแก่น 
              ยกระดับการมองเห็นด้วยเทคโนโลยี AI ที่แม่นยำที่สุด
            </p>
          </div>

          {/* คอลัมน์ที่ 2: เมนูหลัก */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-blue-500">เมนูแนะนำ</h4>
            <ul className="space-y-4">
              {[
                { name: 'กรอบแว่นตา', href: '/frames' },
                { name: 'เลนส์คุณภาพสูง', href: '/lenses' },
                { name: 'สาระน่ารู้เรื่องสายตา', href: '/vision-knowledge' },
                { name: 'ติดต่อเรา', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-white hover:pl-2 transition-all text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* คอลัมน์ที่ 3: ข้อมูลติดต่อ */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-blue-500">ติดต่อเรา</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-500">📍</span>
                <span>โครงการยูเซ็นเตอร์ มข. (อคม.5) จ.ขอนแก่น 40002</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">📞</span>
                <a href="tel:0945299469" className="hover:text-white transition-colors">094-529-9469</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">💬</span>
                <a href="https://line.me/ti/p/@masteroptic" className="hover:text-white transition-colors">Line: @masteroptic</a>
              </li>
            </ul>
          </div>

          {/* คอลัมน์ที่ 4: กล่องนัดหมาย (CTA) */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <h4 className="text-sm font-bold mb-4 italic text-blue-400">จองคิวตรวจสายตา</h4>
            <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed">
              นัดหมายตรวจวัดสายตาด้วยระบบดิจิทัลกับผู้เชี่ยวชาญ ฟรี!
            </p>
            <Link href="/contact" className="block w-full py-4 bg-blue-600 hover:bg-white hover:text-blue-600 text-center rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-blue-600/20">
              นัดหมายตอนนี้
            </Link>
          </div>
        </div>

        {/* 📋 แถบด้านล่างสุด */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
            © {currentYear} Master Optic Studio. สงวนลิขสิทธิ์ตามกฎหมาย
          </p>
          
          {/* โซเชียลมีเดีย */}
          <div className="flex items-center gap-6">
            {[
              { name: 'เฟซบุ๊ก', href: 'https://www.facebook.com/kkuoptic' },
              { name: 'ไลน์', href: 'https://line.me/ti/p/@masteroptic' },
              { name: 'อินสตาแกรม', href: '#' }
            ].map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                className="text-[10px] font-black text-slate-500 hover:text-blue-500 transition-colors tracking-widest"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}