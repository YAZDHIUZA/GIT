import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Roujola ENERGY | الطاقة الطبيعية للحياة",
  description: "منتج طبيعي متميز لدعم الحيوية والصحة العامة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body 
        suppressHydrationWarning 
        className={`${tajawal.variable} font-tajawal bg-gray-50 text-gray-900 antialiased`}
      >
        {/* Global Page Entry Animation Wrapper */}
        <main className="animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out fill-mode-forwards">
          {children} 
        </main>
      </body>
    </html>
  );
}