"use client";
import React, { useState } from 'react';
import { MessageCircle, Star, ChevronRight, ChevronLeft, PlayCircle, Play } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // We removed the 'thumb' images. We will use the video itself for the thumbnails.
  const reviews = [
    { id: 1, video: '/review-1.mp4', views: '2.3k', rating: 5 },
    { id: 2, video: '/review-2.mp4', views: '1.8k', rating: 5 },
    { id: 3, video: '/review-3.mp4', views: '3.1k', rating: 5 },
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-16 px-4 max-w-[1200px] mx-auto bg-gradient-to-b from-white to-emerald-50/30 overflow-hidden relative" dir="rtl">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col items-center text-center mb-10 animate-fade-up">
        <div className="bg-[#047857] text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-md mb-4">
          <MessageCircle size={16} /> شهادات حقيقية
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3 font-tajawal">
          ماذا يقول <span className="text-[#047857]">عملاؤنا</span>؟
        </h2>
        <p className="text-gray-500 font-bold text-lg">تجارب حقيقية مصورة</p>
      </div>

      {/* --- STATS GRID --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 animate-fade-up delay-100 max-w-2xl mx-auto">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50 text-center flex flex-col justify-center">
          <span className="text-2xl font-black text-[#047857] block mb-1">12.5k</span>
          <span className="text-gray-400 text-xs font-bold">مشاهدة</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50 text-center flex flex-col justify-center">
          <span className="text-2xl font-black text-[#047857] block mb-1">4.9/5</span>
          <span className="text-gray-400 text-xs font-bold">التقييم</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-50 text-center flex flex-col justify-center col-span-2 md:col-span-1">
          <span className="text-2xl font-black text-[#047857] block mb-1">98%</span>
          <span className="text-gray-400 text-xs font-bold">رضا</span>
        </div>
      </div>

      {/* --- MAIN VIDEO CAROUSEL --- */}
      <div className="max-w-md mx-auto animate-fade-up delay-300">
        <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl border-4 border-white mb-6 group">
          
          {/* Top Overlays */}
          <div className="absolute top-4 right-4 z-10 bg-[#047857] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
            Roujola ENERGY x2
          </div>
          <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-amber-400 text-xs font-black px-3 py-1.5 rounded-full flex items-center gap-1">
            {reviews[activeIndex].rating} <Star size={12} fill="currentColor" />
          </div>

          {/* Main Video Player (Removed poster attribute) */}
          <video 
            key={reviews[activeIndex].video} 
            controls 
            preload="metadata"
            className="w-full aspect-[4/3] object-cover"
            controlsList="nodownload"
          >
            <source src={`${reviews[activeIndex].video}#t=0.1`} type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between px-2 mb-10">
          <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#047857] hover:bg-emerald-200 transition-colors">
            <ChevronRight size={20} />
          </button>
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 font-bold text-sm" style={{ direction: 'ltr' }}>
              {activeIndex + 1} / {reviews.length}
            </span>
            <div className="flex gap-1.5">
              {reviews.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-[#047857]' : 'w-2 bg-emerald-200'}`} />
              ))}
            </div>
          </div>

          <button onClick={handleNext} className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#047857] hover:bg-emerald-200 transition-colors">
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>

      {/* --- THUMBNAILS LIST (Using Video Tags) --- */}
      <div className="max-w-md mx-auto animate-fade-up delay-500">
        <div className="flex items-center justify-end gap-2 text-[#047857] font-bold text-sm mb-4">
           المزيد من الشهادات <PlayCircle size={18} />
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {reviews.map((review, idx) => (
            <div 
              key={review.id}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-xl overflow-hidden cursor-pointer aspect-video border-2 transition-all duration-300 bg-black ${activeIndex === idx ? 'border-[#047857] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              {/* Using the video file itself to generate the thumbnail with #t=0.1 */}
              <video 
                src={`${review.video}#t=0.1`} 
                className="object-cover w-full h-full pointer-events-none" 
                muted 
                playsInline 
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Play size={20} className="text-white opacity-80" fill="currentColor" />
              </div>
              <div className="absolute bottom-1 right-2 text-white text-[10px] font-bold z-10 drop-shadow-md">
                {review.views}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
