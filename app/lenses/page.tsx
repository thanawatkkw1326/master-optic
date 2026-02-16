"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const lensCategories = [
  {
    id: 1,
    thaiName: 'เลนส์ชั้นเดียว (Single Vision)',
    subTitle: 'มาตรฐานความคมชัดระดับพรีเมียม',
    desc: 'เน้นความใสและถนอมสายตา สำหรับสายตาสั้น ยาว หรือเอียง ราคาคุ้มค่าที่สุด',
    features: ['กรองแสงสีฟ้า 100%', 'ออกแดดเปลี่ยนสีอัตโนมัติ', 'ลดแสงสะท้อนหน้าเลนส์'],
    // รูปแว่นตาเลนส์ใสชัดๆ
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800',
    icon: '✨',
    color: 'border-blue-500'
  },
  {
    id: 2,
    thaiName: 'เลนส์ย่อบาง (High Index)',
    subTitle: 'จบปัญหาแว่นหนาเป็นก้นหอย',
    desc: 'สำหรับผู้ที่ค่าสายตาสั้นเยอะ ช่วยให้เลนส์บางลงและน้ำหนักเบาขึ้นอย่างเห็นได้ชัด',
    features: ['บางลงสูงสุด 50%', 'ใส่แล้วตาไม่เล็กดูเป็นธรรมชาติ', 'น้ำหนักเบาใส่สบายทั้งวัน'],
    // รูปดีเทลความบางของเลนส์
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800',
    icon: '💎',
    color: 'border-slate-400'
  },
  {
    id: 3,
    thaiName: 'เลนส์เฉพาะทาง (Office Lens)',
    subTitle: 'เพื่อชาวออฟฟิศที่อยู่หน้าจอนานๆ',
    desc: 'ลดอาการปวดตา ปรับมุมมองระยะกลางและระยะใกล้ให้กว้างเป็นพิเศษ',
    features: ['ลดอาการตาล้า (Digital Eye Strain)', 'เห็นจอคอมชัดถนัดตา', 'ลดปัญหาปวดคอ บ่า ไหล่'],
    // รูปคนทำงานหน้าจอคอมพิวเตอร์
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
    icon: '🖥️',
    color: 'border-emerald-500'
  },
  {
    id: 4,
    thaiName: 'เลนส์โปรเกรสซีฟ (Progressive)',
    subTitle: 'ชัดทุกระยะ...ไร้รอยต่อขวางตา',
    desc: 'นวัตกรรมสำหรับวัย 40+ มองใกล้-กลาง-ไกล ได้ในแว่นเดียว ไม่ต้องถอดสลับไปมา',
    features: ['มองชัดทุกระยะอย่างไร้รอยต่อ', 'เสริมบุคลิกภาพให้ดูดีเสมอ', 'เทคโนโลยี AI ปรับแต่งเฉพาะบุคคล'],
    // รูปคนใส่แว่นดูสมาร์ท
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800',
    icon: '👑',
    color: 'border-amber-500'
  }
];

export default function LensesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* --- 🏔️ ส่วนหัว (Hero) --- */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:w-1/2">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-6">
              MASTER <br /><span className="text-blue-600 underline">LENSES</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-2xl font-medium italic border-l-4 border-blue-600 pl-6">
              "เพราะเลนส์แต่ละชนิดคือหัวใจของการมองเห็น เราจึงคัดสรรสิ่งที่ดีที่สุดเพื่อคุณ"
            </p>
          </motion.div>
          
          <div className="md:w-1/2 flex justify-end">
            <div className="w-full h-80 bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover" 
                alt="Lens Tech" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 📦 ส่วนรายการเลนส์ (Grid) --- */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-24">
          {lensCategories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
            >
              {/* ส่วนรูปภาพ */}
              <div className="w-full md:w-1/2 h-[450px] relative">
                <div className={`absolute -inset-2 bg-slate-100 rounded-[3rem] -rotate-3`}></div>
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-xl">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt={item.thaiName} />
                </div>
              </div>

              {/* ส่วนเนื้อหา */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{item.icon}</span>
                  <div className="h-[2px] w-12 bg-blue-600"></div>
                </div>
                
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic mb-2 leading-tight tracking-tighter">
                    {item.thaiName}
                  </h2>
                  <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">{item.subTitle}</p>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {item.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      <span className="text-sm font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link href="/contact">
                    <button className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                      ดูราคาและโปรโมชั่น →
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 💡 Expert Tips (โทนสว่าง อ่านง่าย) --- */}
      <section className="py-24 bg-blue-600 text-white px-6 mx-4 rounded-[4rem] mb-20 shadow-2xl shadow-blue-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-16 tracking-tighter">เคล็ดลับเลือกเลนส์</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'ปรึกษาผู้เชี่ยวชาญ', desc: 'ควรตรวจวัดด้วยระบบดิจิทัลเพื่อให้ได้ค่าที่แม่นที่สุด' },
              { title: 'ความบางคือความเบา', desc: 'หากสั้นเยอะ แนะนำให้ย่อบางเพื่อความสวยงาม' },
              { title: 'ถนอมดวงตา', desc: 'ยุคนี้เลนส์ Blue Cut สำคัญมากสำหรับคนทำงานหน้าจอ' }
            ].map((tip, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg p-10 rounded-[2.5rem] border border-white/20">
                <h4 className="text-xl font-black mb-4 italic underline decoration-blue-300 decoration-4">{tip.title}</h4>
                <p className="text-sm text-blue-50 font-medium leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}