"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VisionTestPage() {
  const [testState, setTestState] = useState<'intro' | 'testing' | 'result'>('intro');
  const [step, setStep] = useState(0);
  
  const levels = [
    { text: "E", size: "120px", score: "20/200" },
    { text: "F P", size: "80px", score: "20/100" },
    { text: "T O Z", size: "50px", score: "20/70" },
    { text: "L P E D", size: "30px", score: "20/40" },
    { text: "P E C F D", size: "15px", score: "20/20" }
  ];

  // ฟังก์ชันเริ่มตรวจ
  const startTest = () => setTestState('testing');

  // ฟังก์ชันตรวจเสร็จ
  const finishTest = () => setTestState('result');

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        
        <AnimatePresence mode="wait">
          
          {/* 1. หน้าข้อปฏิบัติ (Intro) */}
          {testState === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl text-center border border-slate-100"
            >
              <div className="text-6xl mb-8">📖</div>
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">ข้อปฏิบัติในการตรวจ</h2>
              <div className="text-left space-y-4 text-slate-600 mb-10">
                <p className="flex gap-3"><span>1.</span> ถือโทรศัพท์หรือนั่งห่างจากจอประมาณ 1 ช่วงแขน</p>
                <p className="flex gap-3"><span>2.</span> ใช้มือปิดตาซ้าย (ห้ามหลับตาข้างที่ปิด) แล้วตรวจตาขวา</p>
                <p className="flex gap-3"><span>3.</span> อ่านตัวอักษรที่ปรากฏตรงหน้าให้ชัดเจน</p>
                <p className="flex gap-3"><span>4.</span> หากเริ่มมองไม่ชัด ให้กดปุ่ม "เริ่มเบลอ"</p>
              </div>
              <button 
                onClick={startTest}
                className="w-full bg-blue-600 text-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                เริ่มทำการตรวจ
              </button>
            </motion.div>
          )}

          {/* 2. หน้าทดสอบ (Testing) */}
          {testState === 'testing' && (
            <motion.div 
              key="testing"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl text-center border border-slate-100"
            >
              <div className="mb-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                Step {step + 1} of {levels.length}
              </div>
              
              <div className="bg-slate-50 h-[300px] rounded-[2rem] flex items-center justify-center mb-10 overflow-hidden border border-slate-100">
                <motion.span 
                  key={step}
                  initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="font-serif font-black text-slate-900 select-none"
                  style={{ fontSize: levels[step].size }}
                >
                  {levels[step].text}
                </motion.span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => step < levels.length - 1 ? setStep(step + 1) : finishTest()}
                  className="bg-blue-600 text-white py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all"
                >
                  มองเห็นชัด
                </button>
                <button 
                  onClick={finishTest}
                  className="bg-slate-100 text-slate-600 py-5 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                >
                  เริ่มเบลอ
                </button>
              </div>
            </motion.div>
          )}

          {/* 3. หน้าสรุปผล (Result) */}
          {testState === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl text-center border border-blue-100"
            >
              <div className="text-6xl mb-8">🎯</div>
              <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter text-blue-600">สรุปผลการตรวจ</h2>
              <p className="text-slate-500 mb-8 italic">ระดับการมองเห็นของคุณคือ</p>
              
              <div className="text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                {levels[step].score}
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl text-left mb-10 border border-blue-100">
                <p className="text-blue-900 text-sm leading-relaxed">
                  {step > 3 
                    ? "ยินดีด้วย! การมองเห็นของคุณอยู่ในเกณฑ์ดีเยี่ยม" 
                    : "สายตาของคุณอาจมีความผิดปกติ แนะนำให้เข้ามาตรวจเช็กอย่างละเอียดด้วยเครื่องมือที่ทันสมัยที่หน้าร้านครับ"}
                </p>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => window.location.href='/contact'}
                  className="w-full bg-slate-950 text-white py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
                >
                  นัดตรวจสายตาฟรีที่ร้าน
                </button>
                <button 
                  onClick={() => {setStep(0); setTestState('intro');}}
                  className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-slate-900 transition-colors"
                >
                  ทำแบบทดสอบอีกครั้ง
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}