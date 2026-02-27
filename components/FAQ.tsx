"use client";
import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ = () => {
  // State to track which question is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const faqs = [
    {
      q: "ما هو منتج Roujola ENERGY؟",
      a: "Roujola ENERGY هو منتج طبيعي 100% يتكون من خليط مختار من الأعشاب الطبيعية والعسل، مصمم لدعم الطاقة والحيوية والصحة الجنسية للرجال والنساء."
    },
    {
      q: "كم يستغرق حتى أرى النتائج؟",
      a: "معظم العملاء يبدأون في ملاحظة تحسن في مستوى الطاقة خلال 3-7 أيام من الاستخدام المنتظم. للحصول على أفضل النتائج، ننصح بالاستخدام المستمر لمدة شهر على الأقل."
    },
    {
      q: "هل المنتج آمن؟",
      a: "نعم، المنتج آمن تماماً لأنه يتكون من مكونات طبيعية 100%. ومع ذلك، يجب تجنب الاستخدام في حالة الحمل، الرضاعة، أو وجود حساسية من أي مكون. استشر طبيبك إذا كنت تتناول أدوية أخرى."
    },
    {
      q: "كيف أستخدم Roujola ENERGY؟",
      a: "الاستخدام بسيط: تناول ملعقة صغيرة واحدة يومياً، يفضل في الصباح أو قبل النشاط. يمكن تناوله مباشرة أو مع الماء الدافئ أو الحليب."
    },
    {
      q: "هل المنتج مناسب للنساء أيضاً؟",
      a: "نعم! Roujola ENERGY مصمم ليكون فعالاً للجنسين. يدعم الطاقة والحيوية والصحة العامة والجنسية للرجال والنساء على حد سواء."
    },
    {
      q: "كم مدة الشحن؟",
      a: "التوصيل يستغرق من 2 إلى 3 أيام عمل لجميع مدن المغرب. نستخدم شركات شحن موثوقة لضمان وصول المنتج بأمان وفي الوقت المحدد."
    },
    {
      q: "هل التوصيل فعلاً مجاني؟",
      a: "نعم! التوصيل مجاني بالكامل لجميع مدن المغرب، بدون أي تكاليف إضافية. كما أن الدفع يكون عند الاستلام."
    },
    {
      q: "ماذا لو لم يعجبني المنتج؟",
      a: "نحن واثقون من جودة منتجنا، لكن إذا لم تكن راضياً، يمكنك رفض استلام المنتج عند التوصيل ولن تدفع أي شيء. رضاك هو أولويتنا."
    },
    {
      q: "هل يمكنني طلب أكثر من علبة؟",
      a: "بالتأكيد! لدينا عرض خاص لشراء علبتين بسعر 399 درهم بدلاً من 438 درهم، مما يوفر لك 39 درهم. هذا العرض مثالي لضمان استمرارية الاستخدام."
    },
    {
      q: "هل يمكنني التواصل معكم للاستفسار؟",
      a: "بالطبع! يمكنك استخدام الشات المباشر في الموقع للحصول على إجابات فورية، أو التواصل معنا عند إتمام الطلب وسيتم الرد على جميع استفساراتك."
    }
  ];

  const toggleFAQ = (index: number) => {
    // If clicking the currently open one, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto bg-white/50" dir="rtl">
      
      {/* --- HEADER (Matches Screenshot) --- */}
      <div className="flex flex-col items-center text-center mb-12 animate-fade-up">
        <div className="bg-[#e6fbf1] text-[#047857] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-black mb-6 border border-emerald-100">
          <HelpCircle size={18} /> الأسئلة الشائعة
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4 font-tajawal">
          أسئلة يطرحها العملاء
        </h2>
        <p className="text-gray-500 font-bold text-lg">
          إجابات واضحة على أكثر الأسئلة شيوعاً
        </p>
      </div>

      {/* --- ACCORDION LIST --- */}
      <div className="flex flex-col gap-4 animate-fade-up delay-300">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${
                isOpen 
                  ? 'shadow-md border-emerald-100' 
                  : 'shadow-sm border-gray-100 hover:border-amber-200 hover:bg-amber-50/30'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-right outline-none group"
              >
                <span className="font-black text-gray-800 text-lg font-tajawal pr-2">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-amber-500 transition-transform duration-500 shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                  size={24} 
                  strokeWidth={2.5}
                />
              </button>

              {/* Answer Content (Animated via max-height) */}
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-64 opacity-100 mb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-8 text-gray-500 text-[15px] font-medium leading-relaxed font-tajawal">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default FAQ;