"use client";
import React from 'react';
import { AlertCircle, Leaf, ShieldCheck, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-300 py-16 px-4 border-t border-gray-800" dir="rtl">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- DISCLAIMER BOX --- */}
        <div className="border border-amber-500/30 bg-amber-900/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto text-center mb-16 shadow-lg">
          <div className="flex items-center justify-center gap-2 text-amber-500 font-black text-lg md:text-xl mb-4 font-tajawal">
            <AlertCircle size={24} /> إخلاء المسؤولية القانونية
          </div>
          <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-4">
            <strong className="text-gray-200">Ataa Atabi3a ENERGY</strong> هو منتج طبيعي مصمم لدعم الصحة العامة والحيوية. هذا المنتج ليس علاجاً طبياً ولا يهدف إلى تشخيص أو علاج أو الوقاية من أي مرض.
          </p>
          <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-4">
            النتائج قد تختلف من شخص لآخر حسب الحالة الصحية ونمط الحياة. ننصح دائماً باستشارة الطبيب قبل استخدام أي منتج غذائي، خاصة إذا كنت تعاني من أي حالة طبية أو تتناول أدوية.
          </p>
          <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
            هذا المنتج غير مناسب للحوامل والمرضعات والأطفال تحت 18 سنة. يجب حفظ المنتج بعيداً عن متناول الأطفال.
          </p>
        </div>

        {/* --- 3 TRUST ICONS ROW --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mb-16 text-center">
          
          {/* 100% Natural */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#10b981] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <Leaf size={28} />
            </div>
            <h4 className="text-white font-black text-lg mb-2 font-tajawal">100% طبيعي</h4>
            <p className="text-gray-500 text-sm">مكونات عشبية طبيعية بدون مواد كيميائية</p>
          </div>

          {/* Safe & Guaranteed */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#f59e0b] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-white font-black text-lg mb-2 font-tajawal">آمن ومضمون</h4>
            <p className="text-gray-500 text-sm">منتج عالي الجودة مع ضمان الرضا</p>
          </div>

          {/* Customer Satisfaction */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#f43f5e] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(244,63,94,0.4)]">
              <Heart size={28} />
            </div>
            <h4 className="text-white font-black text-lg mb-2 font-tajawal">رضا العملاء</h4>
            <p className="text-gray-500 text-sm">آلاف العملاء الراضين عن النتائج</p>
          </div>

        </div>

        <div className="w-full h-px bg-gray-800 mb-10 max-w-5xl mx-auto"></div>

        {/* --- BOTTOM BRANDING & COPYRIGHT --- */}
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Name */}
          <div className="flex items-center gap-2 text-amber-500 font-black text-2xl mb-3 font-tajawal">
            Ataa Atabi3a ENERGY <Leaf size={24} className="text-amber-500" />
          </div>
          
          {/* Tagline */}
          <p className="text-gray-400 font-medium mb-8">
            الطاقة الطبيعية للحياة - منتج طبيعي متميز لدعم الحيوية والصحة العامة
          </p>

          {/* Quick Features List */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-gray-500 text-sm font-bold mb-8">
            <span>توصيل مجاني</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>دفع عند الاستلام</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>ضمان الجودة</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>منتج طبيعي 100%</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs font-medium mb-4">
            © 2026 Ataa Atabi3a ENERGY. جميع الحقوق محفوظة.
          </p>

          {/* Final Small Medical Disclaimer */}
          <p className="text-gray-600 text-[10px] md:text-xs max-w-3xl mx-auto leading-relaxed">
            هذا الموقع مخصص للأغراض الإعلامية فقط. المعلومات المقدمة ليست بديلاً عن الاستشارة الطبية المهنية. يُرجى استشارة طبيبك قبل استخدام أي منتج غذائي أو صحي.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
