import type { Metadata } from "next";
import { Anuphan } from "next/font/google"; // 1. เปลี่ยนมาใช้ Anuphan
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// 2. ตั้งค่าฟอนต์
const anuphan = Anuphan({ 
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"], // เอามาครบทุกความหนา
  variable: "--font-anuphan",
});

export const metadata: Metadata = {
  title: "Master Optic | นิยามใหม่แห่งการมองเห็น",
  description: "ศูนย์รวมแว่นตาและบริการวัดสายตาอัจฉริยะ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      {/* 3. ใส่ className ของฟอนต์ที่ body */}
      <body className={`${anuphan.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}