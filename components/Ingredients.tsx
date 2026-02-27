"use client";
import React, { useState, useMemo } from 'react';
import { Leaf, Droplets, Sprout, ShieldCheck, Star, ChevronRight, ChevronLeft, LayoutGrid } from 'lucide-react';

const Ingredients = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const categories = [
    { name: 'الكل', count: 20, icon: <LayoutGrid size={16} /> },
    { name: 'مشتقات العسل', count: 4, icon: <Droplets size={16} /> },
    { name: 'الأعشاب الطبيعية', count: 12, icon: <Leaf size={16} /> },
    { name: 'البذور', count: 4, icon: <Sprout size={16} /> },
  ];

  const allIngredients = [
    // --- مشتقات العسل ---
    { name: 'مشتقات العسل', sub: 'مشتقات العسل', desc: 'خليط فاخر من مشتقات العسل الطبيعي', tags: ['طاقة فورية', 'فيتامينات'], cat: 'مشتقات العسل', icon: '🍯', badge: 'عسل 🍯', badgeColor: 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]' },
    { name: 'حبوب اللقاح', sub: 'حبوب اللقاح', desc: 'غنية بالبروتينات والفيتامينات الأساسية', tags: ['بروتينات', 'طاقة'], cat: 'مشتقات العسل', icon: '🌾', badge: 'عسل 🍯', badgeColor: 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]' },
    { name: 'غذاء ملكة النحل', sub: 'غذاء ملكة النحل', desc: 'غني بالعناصر الغذائية النادرة', tags: ['قوة', 'نشاط'], cat: 'مشتقات العسل', icon: '👑', badge: 'عسل 🍯', badgeColor: 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]' },
    { name: 'العكبر', sub: 'العكبر', desc: 'مضاد حيوي طبيعي معزز للمناعة', tags: ['مضاد حيوي', 'مناعة'], cat: 'مشتقات العسل', icon: '🛡️', badge: 'عسل 🍯', badgeColor: 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]' },
    
    // --- الأعشاب الطبيعية ---
    { name: 'الجينسينغ', sub: 'الجينسينغ', desc: 'يعزز الطاقة والقدرة الجنسية ويحسن الدورة الدموية', tags: ['طاقة', 'قوة جنسية'], cat: 'الأعشاب الطبيعية', icon: '🌿', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'زعفران الحر', sub: 'زعفران الحر', desc: 'يحسن المزاج والرغبة الجنسية', tags: ['مزاج', 'رغبة'], cat: 'الأعشاب الطبيعية', icon: '✨', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'الحبة السوداء', sub: 'الحبة السوداء', desc: 'تقوي المناعة وتحسن الصحة العامة', tags: ['مناعة', 'صحة'], cat: 'الأعشاب الطبيعية', icon: '🖤', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'القرفة', sub: 'القرفة', desc: 'تدفئة طبيعية وتحسين الدورة الدموية', tags: ['دفء', 'دورة دموية'], cat: 'الأعشاب الطبيعية', icon: '🥢', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'الليمون الاسود', sub: 'الليمون الاسود', desc: 'مصدر غني بفيتامين C ومضادات الأكسدة', tags: ['فيتامين C', 'مضاد أكسدة'], cat: 'الأعشاب الطبيعية', icon: '🍋', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'العيل', sub: 'العيل', desc: 'نبات طبيعي لتعزيز الصحة العامة', tags: ['صحة عامة', 'قوة'], cat: 'الأعشاب الطبيعية', icon: '🎋', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'الزنجبيل', sub: 'الزنجبيل', desc: 'الزنجبيل الطبيعي للطاقة والدفء', tags: ['طاقة', 'هضم'], cat: 'الأعشاب الطبيعية', icon: '🥔', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'الخو دنجال', sub: 'الخو دنجال', desc: 'نبات تقليدي لتعزيز القوة', tags: ['قوة', 'تحمل'], cat: 'الأعشاب الطبيعية', icon: '🎍', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'عرق سوس', sub: 'عرق سوس', desc: 'عرق السوس الطبيعي للمعدة', tags: ['معدة', 'هضم'], cat: 'الأعشاب الطبيعية', icon: '🍭', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'نجمة الارض', sub: 'نجمة الارض', desc: 'نبات نادر لتعزيز الطاقة', tags: ['طاقة', 'نشاط'], cat: 'الأعشاب الطبيعية', icon: '⭐', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'الماكا', sub: 'الماكا', desc: 'الجذر الذهبي للطاقة والخصوبة', tags: ['خصوبة', 'طاقة'], cat: 'الأعشاب الطبيعية', icon: '🥔', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { name: 'حياة النفوس', sub: 'حياة النفوس', desc: 'مزيج سري لتعزيز الروح والجسد', tags: ['روح', 'جسد'], cat: 'الأعشاب الطبيعية', icon: '💫', badge: 'أعشاب 🌿', badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100' },

    // --- بذور ---
    { name: 'زريعة الكرافص', sub: 'زريعة الكرافص', desc: 'بذور الكرفس الغنية بالمعادن', tags: ['معادن', 'مفاصل'], cat: 'البذور', icon: '🌱', badge: 'بذور 🌱', badgeColor: 'bg-blue-50 text-blue-700 border-blue-100' },
    { name: 'زريعة القزبر', sub: 'زريعة القزبر', desc: 'بذور الكزبرة للهضم', tags: ['هضم', 'كبد'], cat: 'البذور', icon: '🍀', badge: 'بذور 🌱', badgeColor: 'bg-blue-50 text-blue-700 border-blue-100' },
    { name: 'زريعة الجزر', sub: 'زريعة الجزر', desc: 'بذور الجزر للبشرة والنظر', tags: ['نظر', 'بشرة'], cat: 'البذور', icon: '🥕', badge: 'بذور 🌱', badgeColor: 'bg-blue-50 text-blue-700 border-blue-100' },
    { name: 'زريعة اللفت', sub: 'زريعة اللفت', desc: 'بذور اللفت الغنية بالكالسيوم', tags: ['كالسيوم', 'عظام'], cat: 'البذور', icon: '🪴', badge: 'بذور 🌱', badgeColor: 'bg-blue-50 text-blue-700 border-blue-100' },
  ];

  const filteredItems = useMemo(() => {
    return activeCategory === 'الكل' 
      ? allIngredients 
      : allIngredients.filter(item => item.cat === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="py-20 px-4 max-w-[1200px] mx-auto bg-gray-50/30 overflow-hidden" dir="rtl">
      
      {/* --- CATEGORY FILTERS --- */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14 animate-fade-up">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => { setActiveCategory(cat.name); setCurrentPage(1); }}
              className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-2xl font-bold transition-all duration-300 border ${
                isActive 
                ? 'bg-[#047857] text-white border-[#047857] shadow-md hover:bg-[#065f46]' 
                : 'bg-white text-gray-600 border-emerald-200 hover:bg-emerald-50/50'
              }`}
            >
              {cat.icon}
              <span className="text-xs md:text-sm">{cat.name}</span>
              <span className={`text-[10px] md:text-[11px] px-2.5 py-0.5 rounded-full font-black ${
                isActive ? 'bg-white/20 text-white' : 'bg-emerald-100/60 text-emerald-700'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* --- INGREDIENTS CAROUSEL (MOBILE) / GRID (DESKTOP) --- */}
      {/* Key changes here:
        - flex overflow-x-auto snap-x: Creates the horizontal swipe on mobile
        - md:grid md:grid-cols-2 lg:grid-cols-4: Keeps the grid layout on larger screens
        - hide-scrollbar: Uses inline styles to remove the ugly scrollbar on mobile
      */}
      <div 
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 mb-8 min-h-[380px] scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides scrollbar on Firefox/IE
      >
        <style dangerouslySetInnerHTML={{__html: `::-webkit-scrollbar { display: none; }`}} /> {/* Hides scrollbar on Chrome/Safari */}
        
        {displayedItems.map((item, idx) => (
          <div 
            key={item.name}
            className="min-w-[85vw] sm:min-w-[300px] md:min-w-0 shrink-0 snap-center flex flex-col bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Top Right Icon with Overlapping Badge */}
            <div className="flex justify-end w-full mb-2">
              <div className="relative mt-2">
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black px-3 py-1 rounded-full whitespace-nowrap z-10 shadow-sm border ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <div className="w-14 h-14 bg-[#047857] rounded-xl flex items-center justify-center text-3xl text-white shadow-md animate-float mt-1">
                  {item.icon}
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="text-right mt-2 flex-grow">
              <h3 className="text-xl font-black text-gray-800 mb-0.5 font-tajawal">{item.name}</h3>
              <p className="text-gray-400 text-[13px] font-medium mb-3">{item.sub}</p>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 font-medium font-tajawal">
                {item.desc}
              </p>
            </div>
            
            {/* Bottom Tags */}
            <div className="flex flex-wrap justify-end gap-2 mt-auto pt-2 border-t border-gray-50">
              <span className="text-gray-400 text-[11px] font-bold px-1 py-1">+1</span>
              {item.tags.map(tag => (
                <span key={tag} className="bg-[#ecfdf5] text-[#059669] text-[11px] font-bold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* --- PAGINATION --- */}
      {totalPages > 0 && (
        <div className="flex flex-col items-center animate-fade-up">
          <div className="flex items-center gap-2 mb-6">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
              <ChevronRight size={18}/>
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-all border ${
                  i + 1 === currentPage 
                  ? 'bg-[#047857] text-white border-[#047857] shadow-md' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-emerald-300'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100 disabled:opacity-50 transition-colors"
            >
              <ChevronLeft size={18}/>
            </button>
          </div>
          
          <div className="bg-gray-50 border border-gray-100 text-gray-500 text-xs font-bold px-6 py-2.5 rounded-full mb-10">
            عرض {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredItems.length)} من {filteredItems.length} مكون
          </div>
        </div>
      )}

      {/* --- FOOTER TRUST BADGES --- */}
      <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-300">
        {[
          { icon: <ShieldCheck className="text-[#047857]" size={18} />, text: "منتوج طبيعي معتمد" },
          { icon: <Star className="text-[#047857]" size={18} />, text: "تقييم 4.9/5" },
          { icon: <Leaf className="text-[#047857]" size={18} />, text: "100% طبيعي" }
        ].map((badge, i) => (
          <div key={i} className="bg-white border border-emerald-200 px-6 py-2.5 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow cursor-default">
            {badge.icon}
            <span className="text-gray-700 font-bold text-sm">{badge.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ingredients;