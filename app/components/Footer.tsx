export default function Footer() {
  return (
    <footer className="bg-white py-16 md:py-24 border-t border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        {/* Main Grid: ในมือถือจะเป็น 1 คอลัมน์, iPad เป็น 2, คอมเป็น 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-black text-2xl mb-4 tracking-tighter uppercase text-slate-900">
              Master Optic
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
              ผู้นำด้านการดูแลสายตาและแฟชั่นแว่นตาพรีเมียม <br className="hidden md:block" /> 
              ยกระดับการมองเห็นให้เป็นเรื่องของสไตล์
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-bold text-[10px] tracking-[0.3em] text-blue-600 uppercase mb-6">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a href="mailto:info@masteroptic.com" className="block text-slate-600 text-lg font-medium hover:text-blue-600 transition-colors">
                info@masteroptic.com
              </a>
              <a href="tel:+6621234567" className="block text-slate-600 text-lg font-medium hover:text-blue-600 transition-colors">
                +66 2 123 4567
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-[10px] tracking-[0.3em] text-blue-600 uppercase mb-6">
              Follow Our Story
            </h4>
            <div className="flex gap-8">
              {['Facebook', 'Instagram', 'Line'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-slate-400 text-sm font-bold uppercase tracking-widest hover:text-slate-900 transition-all hover:-translate-y-1 block"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom Line */}
        <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-300 tracking-[0.4em] uppercase text-center md:text-left">
            © 2026 Master Optic. All Rights Reserved.
          </p>
          <div className="flex gap-6">
             <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">TH</div>
             <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">EN</div>
          </div>
        </div>
      </div>
    </footer>
  );
}