import React from 'react';
import { HeartPulse, Zap, ShieldCheck, Clock, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { 
      title: "تحسين الأداء الجنسي", 
      desc: "يدعم الصحة الجنسية ويعزز القدرة والرغبة بشكل طبيعي وآمن.", 
      icon: <HeartPulse className="text-emerald-600" size={32} /> 
    },
    { 
      title: "زيادة الطاقة والنشاط", 
      desc: "يمنحك الطاقة الطبيعية التي تحتاجها لمواجهة يومك بكل حيوية ونشاط.", 
      icon: <Zap className="text-emerald-600" size={32} /> 
    },
    { 
      title: "مكونات طبيعية 100%", 
      desc: "مزيج فريد من الأعشاب والزيوت الطبيعية المختارة بعناية فائقة.", 
      icon: <ShieldCheck className="text-emerald-600" size={32} /> 
    },
    { 
      title: "نتائج سريعة ومضمونة", 
      desc: "استمتع بفرق ملموس في وقت قياسي مع ضمان الرضا الكامل.", 
      icon: <Clock className="text-emerald-600" size={32} /> 
    },
    { 
      title: "جودة معتمدة", 
      desc: "منتج خاضع لرقابة الجودة لضمان أعلى مستويات الأمان والفعالية.", 
      icon: <Award className="text-emerald-600" size={32} /> 
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">لماذا تختار Roujola ENERGY؟</h2>
          <div className="flex justify-center gap-8 md:gap-16 text-sm md:text-base font-bold text-emerald-700 mt-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black">10,000+</span>
              <span className="text-xs md:text-sm font-normal opacity-80">عميل راض</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black">98%</span>
              <span className="text-xs md:text-sm font-normal opacity-80">نتائج إيجابية</span>
            </div>
          </div>
        </div>

        {/* --- RESPONSIVE LAYOUT --- */}
        {/* Mobile: Horizontal Snap Scroll 
            Tablet/PC: Multi-column Grid 
        */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 pb-6 md:pb-0 hide-scrollbar">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[85%] md:min-w-full snap-center bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:invert-[1] group-hover:brightness-0">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-900">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;