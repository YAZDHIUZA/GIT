"use client";
import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

const Certificate = () => {
  return (
    <section className="py-16 px-4 max-w-[1000px] mx-auto text-center" dir="rtl">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center mb-10 animate-fade-up">
        <div className="bg-[#ecfdf5] text-[#047857] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-black shadow-sm mb-4 border border-emerald-100">
          <Award size={18} /> جودة ومصداقية
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-tajawal">
          منتوج <span className="text-[#047857]">مرخص ومعتمد</span>
        </h2>
        <p className="text-gray-500 font-bold text-lg max-w-xl mx-auto leading-relaxed">
          حاصل على الترخيص الرسمي من المكتب الوطني للسلامة الصحية للمنتجات الغذائية (ONSSA)، مما يضمن لك جودة وسلامة المنتج 100%.
        </p>
      </div>

      {/* --- CERTIFICATE DISPLAY CARD --- */}
      <div className="relative p-3 md:p-6 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 animate-fade-up delay-300 group overflow-hidden max-w-3xl mx-auto cursor-default">
        
        {/* Glossy Light Sweep Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] z-20 pointer-events-none" />
        
        {/* Floating ONSSA Badge */}
        <div className="absolute top-8 left-8 z-30 bg-white/90 backdrop-blur-md text-[#047857] font-black px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-emerald-50 animate-float">
          <ShieldCheck size={24} /> معتمد 
        </div>

        {/* The Document Image */}
        <div className="relative w-full aspect-[1/1.4] sm:aspect-[4/3] rounded-3xl overflow-hidden bg-[#f8fafc] border-2 border-dashed border-gray-200">
           <Image 
             src="/onssa-certificate.jpg" 
             alt="ONSSA Certificate Cooperative Aata Attabia" 
             fill
             className="object-contain p-2" // object-contain ensures the text is never cut off
           />
        </div>
      </div>

      {/* --- TRUST POINTS --- */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-up delay-500">
        <div className="flex items-center gap-2 text-gray-700 font-bold bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-50">
          <CheckCircle className="text-[#047857]" size={20} /> خاضع للرقابة الصحية
        </div>
        <div className="flex items-center gap-2 text-gray-700 font-bold bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-50">
          <CheckCircle className="text-[#047857]" size={20} /> مكونات طبيعية آمنة
        </div>
      </div>

    </section>
  );
};

export default Certificate;