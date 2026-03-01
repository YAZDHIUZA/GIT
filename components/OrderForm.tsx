"use client";
import React, { useState, useEffect } from 'react';
import { CheckCircle, User, Phone, MapPin, Home, ShoppingCart, Gem, Leaf, Clock, Crown } from 'lucide-react';

const OrderForm = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [selectedProduct, setSelectedProduct] = useState({
    id: 'x2',
    name: 'Vitalis plus + x2 PROMO',
    price: '350 درهم',
    desc: 'علبتان - العرض الأكثر طلباً'
  });
  
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', address: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const products = [
    {
      id: 'x3',
      name: 'Vitalis plus + x3 PROMO GOLD👑',
      price: '500 درهم',
      oldPrice: '600 درهم',
      desc: 'ثلاث علب - وفر 100 درهم',
      icon: <Crown className="text-amber-400" size={24} />
    },
    {
      id: 'x2',
      name: 'Vitalis plus + x2 PROMO',
      price: '350 درهم',
      oldPrice: '400 درهم',
      desc: 'علبتان - العرض الأكثر طلباً',
      icon: <Gem className="text-blue-400" size={24} />
    },
    {
      id: 'x1',
      name: 'Vitalis plus +',
      price: '200 درهم',
      desc: 'علبة واحدة',
      icon: <Leaf className="text-emerald-500" size={24} />
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          address: formData.address,
          product: selectedProduct.name,
          package: selectedProduct.desc,
          total: selectedProduct.price
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("حدث خطأ في الإرسال. تأكد من تشغيل البوت والاتصال بالإنترنت.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return <div className="min-h-screen bg-gray-50" />;

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl border-[3px] border-emerald-500 shadow-2xl mx-auto max-w-lg my-10 animate-in fade-in zoom-in duration-500" dir="rtl">
        <div className="bg-emerald-100 rounded-full p-5 mb-6">
          <CheckCircle size={80} className="text-emerald-500" strokeWidth={2} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-2 text-center font-tajawal">تم استلام طلبك بنجاح!</h2>
        <p className="text-emerald-600 font-bold text-xl mb-1 text-center font-tajawal">شكراً لك {formData.name}</p>
        <p className="text-gray-500 text-sm mb-8 text-center font-tajawal">سيتم التواصل معك قريباً عبر الهاتف لتأكيد العنوان</p>
        
        <div className="w-full bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100 mb-6 text-right">
          <div className="space-y-4 text-emerald-950 font-bold text-lg font-tajawal">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">العرض:</span>
              <span className="text-gray-900">{selectedProduct.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">الكمية:</span>
              <span className="text-gray-900">{selectedProduct.desc}</span>
            </div>
            <div className="flex justify-between items-center border-t border-emerald-200 pt-4">
              <span className="text-gray-500">المبلغ الإجمالي:</span>
              <span className="text-emerald-600 text-2xl font-black">{selectedProduct.price}</span>
            </div>
            <p className="pt-2 text-emerald-700 text-center text-base">الدفع عند الاستلام + توصيل مجاني</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm font-medium font-tajawal">سيتم توصيل طلبك خلال 24-48 ساعة</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 mb-20" dir="rtl">
      <div className="text-center mb-10">
        <div className="bg-red-50 border-2 border-red-100 inline-flex items-center gap-3 px-8 py-4 rounded-3xl mb-8 shadow-sm">
          <Clock className="text-red-500 animate-pulse" size={24} />
          <p className="text-red-700 font-black text-xl tabular-nums font-tajawal">
            ينتهي العرض في: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </p>
        </div>
        
        <div className="mb-4">
          <span className="bg-emerald-700 text-white px-6 py-2 rounded-full text-base font-black inline-flex items-center gap-2 shadow-xl font-tajawal">
             التوصيل بالمجان و الدفع عند الاستلام ✨
          </span>
        </div>
        <h2 className="text-5xl font-black text-emerald-950 mb-3 font-tajawal leading-tight">إملأ الإستمارة للطلب</h2>
        <p className="text-gray-500 font-bold text-lg font-tajawal">اختر العرض المناسب واملأ بياناتك لنتواصل معك</p>
      </div>

      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-emerald-900 p-8 sm:p-12">
          <h3 className="text-white text-center font-black flex items-center justify-center gap-3 mb-10 text-2xl font-tajawal">
            اختر العرض المناسب لك <ShoppingCart size={28} />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((prod) => (
              <div 
                key={prod.id}
                onClick={() => setSelectedProduct({ id: prod.id, name: prod.name, price: prod.price, desc: prod.desc })}
                className={`relative cursor-pointer p-6 sm:p-8 rounded-3xl border-2 transition-all duration-500 flex flex-col items-center justify-center text-center ${
                  selectedProduct.id === prod.id 
                  ? 'bg-emerald-800/40 border-emerald-400 scale-105 shadow-[0_0_40px_rgba(52,211,153,0.4)] z-10' 
                  : 'bg-emerald-900/50 border-emerald-800 opacity-60 hover:opacity-100'
                }`}
              >
                {selectedProduct.id === prod.id && (
                  <div className="absolute -top-3 -left-3 bg-emerald-400 rounded-full p-2 shadow-xl border-4 border-emerald-900">
                    <CheckCircle size={24} className="text-emerald-950" strokeWidth={3} />
                  </div>
                )}
                
                {prod.id === 'x2' && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase shadow-lg font-tajawal whitespace-nowrap">
                    الأكثر طلباً 🔥
                  </div>
                )}

                <div className="mb-4 bg-white/10 p-4 rounded-2xl">{prod.icon}</div>
                <h4 className="text-white font-black text-base md:text-lg mb-1 font-tajawal">{prod.name}</h4>
                <p className="text-emerald-300 text-xs sm:text-sm font-bold mb-5 font-tajawal">{prod.desc}</p>
                <div className="flex flex-col items-center gap-1 font-tajawal mt-auto">
                  <span className="text-white text-3xl font-black">{prod.price}</span>
                  {prod.oldPrice ? (
                    <span className="text-white/30 text-sm line-through font-bold">{prod.oldPrice}</span>
                  ) : (
                    <span className="text-transparent text-sm font-bold">spacer</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-10 sm:p-14 space-y-8 bg-white max-w-2xl mx-auto">
          <div className="space-y-3">
             <label className="flex items-center gap-2 text-emerald-950 font-black text-base mb-1 justify-start font-tajawal"> <User size={20} className="text-emerald-600"/> الإسم الكامل *</label>
             <input required type="text" placeholder="مثال: محمد الفاسي" className="w-full p-6 rounded-3xl border-2 border-gray-100 bg-gray-50 text-right outline-none focus:border-emerald-500 focus:bg-white transition-all text-xl font-bold font-tajawal"
               value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>

          <div className="space-y-3">
             <label className="flex items-center gap-2 text-emerald-950 font-black text-base mb-1 justify-start font-tajawal"> <Phone size={20} className="text-emerald-600"/> رقم الهاتف *</label>
             <input required type="tel" placeholder="06XXXXXXXX" className="w-full p-6 rounded-3xl border-2 border-gray-100 bg-gray-50 text-right outline-none focus:border-emerald-500 focus:bg-white transition-all text-xl font-bold font-tajawal"
               value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>

          <div className="space-y-3">
             <label className="flex items-center gap-2 text-emerald-950 font-black text-base mb-1 justify-start font-tajawal"> <MapPin size={20} className="text-emerald-600"/> المدينة *</label>
             <input required type="text" placeholder="مثال: الدار البيضاء" className="w-full p-6 rounded-3xl border-2 border-gray-100 bg-gray-50 text-right outline-none focus:border-emerald-500 focus:bg-white transition-all text-xl font-bold font-tajawal"
               value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
          </div>

          <div className="space-y-3">
             <label className="flex items-center gap-2 text-emerald-950 font-black text-base mb-1 justify-start font-tajawal"> <Home size={20} className="text-emerald-600"/> العنوان الكامل *</label>
             <textarea required placeholder="الحي، الشارع، رقم المنزل..." className="w-full p-6 rounded-3xl border-2 border-gray-100 bg-gray-50 text-right outline-none focus:border-emerald-500 focus:bg-white transition-all min-h-36 text-xl font-bold font-tajawal"
               value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
          </div>

          <div className="bg-emerald-50/80 border-2 border-emerald-100 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-start gap-4 text-emerald-900 text-base font-black font-tajawal"><CheckCircle size={24} className="text-emerald-500"/> التوصيل بالمجان لجميع مدن المغرب</div>
            <div className="flex items-center justify-start gap-4 text-emerald-900 text-base font-black font-tajawal"><CheckCircle size={24} className="text-emerald-500"/> الدفع عند الاستلام - لا داعي للقلق</div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-3xl py-7 rounded-3xl shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-5 group font-tajawal">
            {loading ? "جاري الإرسال..." : "اطلب الآن ! Commander"} 
            <ShoppingCart size={32} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
