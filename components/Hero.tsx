"use client";
import React from 'react';
import Image from 'next/image';
import { ChevronDown, Zap, Heart, ShieldCheck, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen max-h-[850px] flex flex-col items-center justify-center text-center px-4 overflow-hidden" dir="rtl">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpg" 
          alt="Background"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-emerald-950/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/40 z-10"></div>
      </div>

      {/* --- TOP HEADER BAR --- */}
      <div className="absolute top-0 w-full flex justify-between items-start p-6 md:p-10 z-30 animate-fade-up">
        <div className="flex items-center">
           {/* FORCED SIZE USING STYLE ATTRIBUTE */}
           <Image 
             src="/logo.png" 
             alt="Roujola Logo" 
             width={300} 
             height={120} 
             style={{ height: 'auto', width: 'clamp(120px, 20vw, 220px)' }}
             className="drop-shadow-2xl transition-transform hover:scale-105 duration-300" 
           />
        </div>
        
        {/* Adjusted badge to stay aligned with the now bigger logo */}
        <div className="mt-2 bg-black/50 backdrop-blur-xl border border-white/20 text-white text-[10px] md:text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
          Naturel 100% <ShieldCheck size={16} className="text-emerald-400" />
        </div>
      </div>
      
      {/* --- MAIN CONTENT --- */}
      <div className="relative z-20 flex flex-col items-center mt-20 md:mt-10">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 animate-fade-up font-tajawal leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
            القوة الجنسية ديالك
          </span>
          <br />
          <span className="drop-shadow-lg">كتبدا من هنا</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl mb-10 max-w-[280px] md:max-w-2xl font-medium animate-fade-up delay-300 font-tajawal leading-relaxed">
          خليط من الأعشاب الطبيعية المنتقاة لدعم الطاقة والحيوية الجنسية
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-white px-6 py-3 rounded-full text-sm md:text-base font-bold flex items-center gap-2 animate-zoom-in delay-500">
             <Zap size={18} className="text-amber-400" /> زيادة الطاقة
          </div>
          <div className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-white px-6 py-3 rounded-full text-sm md:text-base font-bold flex items-center gap-2 animate-zoom-in delay-500">
             <Heart size={18} className="text-rose-400" /> تحسين الأداء
          </div>
        </div>
        
        {/* BUTTON */}
        <a 
          href="#order" 
          className="group relative bg-emerald-600 text-white font-black text-xl md:text-2xl px-14 py-6 rounded-full shadow-[0_25px_60px_rgba(5,150,105,0.5)] transition-all hover:scale-110 active:scale-95 flex items-center gap-3 overflow-hidden animate-fade-up delay-500"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
          <span className="relative z-10">✨ اطلب الآن - توصيل مجاني ✨</span>
        </a>

        {/* Trust Badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-white/60 text-[12px] font-bold uppercase tracking-[0.2em] animate-fade-up delay-500">
          <div className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> منتج معتمد</div>
          <div className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> 100% طبيعي</div>
          <div className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500" /> نتائج مضمونة</div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-10 animate-bounce z-20">
        <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
          <ChevronDown size={28} className="text-emerald-500" />
        </div>
      </div>

    </section>
  );
};

export default Hero;