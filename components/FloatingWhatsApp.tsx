"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, AlertTriangle, Info, Leaf } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<{type: 'bot' | 'user', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleQuickReply = (text: string) => {
    addUserMessage(text);
    generateBotResponse(text);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    addUserMessage(inputText);
    generateBotResponse(inputText);
    setInputText('');
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { type: 'user', text }]);
  };

  const generateBotResponse = (userText: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      let botReply = "شكراً لتواصلك معنا! سيتم الرد عليك قريباً. للطلب السريع يرجى ملء الاستمارة في الصفحة.";
      
      // قائمة بكل المكونات للتعرف عليها عند الضغط
      const ingredients = [
        'العسل', 'حبوب اللقاح', 'غذاء ملكة النحل', 'العكبر', 
        'الجينسينغ', 'الزعفران', 'الحبة السوداء', 'القرفة', 
        'الليمون الاسود', 'العيل', 'الزنجبيل', 'الخو دنجال', 
        'عرق سوس', 'نجمة الارض', 'زريعة الكرافص', 'زريعة القزبر', 
        'زريعة الجزر', 'زريعة اللفت', 'الماكا', 'حياة النفوس'
      ];

      // الردود المبرمجة
      if (userText.includes('الفوائد')) {
        botReply = "Ataa Atabi3a مصمم لدعم الطاقة والحيوية والصحة العامة والجنسية للرجال والنساء، وهو مكون من أعشاب طبيعية 100%.";
      } else if (userText.includes('الاستخدام')) {
        botReply = "الاستخدام بسيط جداً: تناول ملعقة صغيرة واحدة يومياً، يفضل في الصباح أو قبل النشاط. يمكن تناوله مباشرة أو مع الماء الدافئ أو الحليب.";
      } else if (userText.includes('السعر')) {
        botReply = "لدينا 3 عروض رائعة:\n1. علبة واحدة بـ 200 درهم\n2. عرض التوفير (علبتين) بـ 350 درهم 🔥\n3. الكورس الذهبي (3 علب) بـ 500 درهم 👑\nالتوصيل مجاني لجميع مدن المغرب!";
      } else if (userText.includes('تحذيرات')) {
        botReply = "المنتج آمن تماماً، ولكن يجب تجنب الاستخدام في حالة الحمل أو الرضاعة. وإذا كنت تعاني من الضغط أو السكري يرجى الاكتفاء بملعقة صغيرة واستشارة طبيبك.";
      } else if (ingredients.some(ing => userText.includes(ing))) {
        // الرد المخصص عند الضغط على أي مكون
        botReply = "⚠️ تنبيه مهم\nهاد الخليط قوي بزاف ❗ معلقة صغيرة فالنهار كافية للي عندهم ضغط أو سكري → استشر طبيبك";
      }

      setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button - مثبت في اليسار دائماً */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 w-16 h-16 bg-[#047857] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(4,120,87,0.4)] z-50 hover:scale-110 hover:bg-[#065f46] transition-all duration-300 animate-bounce"
        >
          <MessageSquare size={30} />
        </button>
      )}

      {/* Chat Window - تفتح في اليسار دائماً */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 w-full h-[85vh] md:h-auto md:max-h-162.5 md:w-100 md:bottom-24 md:left-6 bg-white md:rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200 animate-in slide-in-from-bottom-10 fade-in duration-300" dir="rtl">
          
          {/* Header */}
          <div className="bg-[#047857] p-4 flex justify-between items-center text-white shadow-md relative z-10">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-black text-lg font-tajawal">مساعد Ataa Atabi3a</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-emerald-100 text-xs font-bold">متصل الآن</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
            
            {/* Initial Bot Welcome Message */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#047857] shrink-0 flex items-center justify-center text-white mt-1">
                <Bot size={16} />
              </div>
              <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-2xl rounded-tr-none text-gray-800 text-sm font-medium font-tajawal max-w-[85%] leading-relaxed">
                مرحباً بك في <strong className="text-[#047857]">Ataa Atabi3a!</strong> 🌟
                <br/><br/>
                أنا هنا لمساعدتك. يمكنك سؤالي عن:
                <ul className="list-disc pr-5 mt-2 space-y-1 text-gray-600 font-bold">
                  <li>المكونات والفوائد</li>
                  <li>طريقة الاستخدام والجرعة</li>
                  <li>السعر والتوصيل</li>
                  <li>التحذيرات والموانع</li>
                </ul>
              </div>
            </div>

            {/* Instruction Text */}
            <div className="text-center text-gray-500 text-xs font-bold font-tajawal my-4">
              اختر سؤالاً أو اكتب اسم أي مكون لتعرف فوائده!
            </div>

            {/* Main Action Pills */}
            <div className="flex flex-wrap gap-2 justify-center pb-2">
              {['ما هي الفوائد؟', 'كيفية الاستخدام؟', 'كم السعر؟'].map((text, i) => (
                <button key={i} onClick={() => handleQuickReply(text)} className="bg-white border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-emerald-50 transition-colors font-tajawal">
                  {text}
                </button>
              ))}
              <button onClick={() => handleQuickReply('⚠️ تحذيرات مهمة')} className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-red-100 transition-colors font-tajawal flex items-center gap-1">
                <AlertTriangle size={14} /> تحذيرات مهمة
              </button>
            </div>

            {/* Ingredients Section */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 font-tajawal">
              <div className="flex items-center gap-2 text-[#047857] font-bold text-sm mb-4">
                <Info size={16} /> اضغط على أي مكون لتعرف فوائده:
              </div>
              
              {/* Category 1 */}
              <div className="mb-3">
                <span className="text-xs text-gray-400 font-bold mb-2 block">🐝 مشتقات العسل</span>
                <div className="flex flex-wrap gap-1.5">
                  {['العسل', 'حبوب اللقاح', 'غذاء ملكة النحل', 'العكبر'].map((ing, i) => (
                    <button key={i} onClick={() => handleQuickReply(ing)} className="border border-gray-200 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold hover:border-emerald-400 hover:text-emerald-700 transition-colors">{ing}</button>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="mb-3">
                <span className="text-xs text-gray-400 font-bold mb-2 block">🌿 الأعشاب</span>
                <div className="flex flex-wrap gap-1.5">
                  {['الجينسينغ', 'الزعفران', 'الحبة السوداء', 'القرفة', 'الليمون الاسود', 'العيل', 'الزنجبيل', 'الخو دنجال', 'عرق سوس', 'نجمة الارض'].map((ing, i) => (
                    <button key={i} onClick={() => handleQuickReply(ing)} className="border border-gray-200 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold hover:border-emerald-400 hover:text-emerald-700 transition-colors">{ing}</button>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="mb-3">
                <span className="text-xs text-gray-400 font-bold mb-2 block">🌱 البذور</span>
                <div className="flex flex-wrap gap-1.5">
                  {['زريعة الكرافص', 'زريعة القزبر', 'زريعة الجزر', 'زريعة اللفت'].map((ing, i) => (
                    <button key={i} onClick={() => handleQuickReply(ing)} className="border border-gray-200 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold hover:border-emerald-400 hover:text-emerald-700 transition-colors">{ing}</button>
                  ))}
                </div>
              </div>

              {/* Category 4 */}
              <div>
                <span className="text-xs text-gray-400 font-bold mb-2 block">💪 مكونات خاصة</span>
                <div className="flex flex-wrap gap-1.5">
                  {['الماكا', 'حياة النفوس'].map((ing, i) => (
                    <button key={i} onClick={() => handleQuickReply(ing)} className="border border-gray-200 text-gray-600 px-3 py-1 rounded-lg text-xs font-bold hover:border-emerald-400 hover:text-emerald-700 transition-colors">{ing}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Messages Loop */}
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-2 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.type === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-[#047857] shrink-0 flex items-center justify-center text-white mt-1">
                    <Bot size={16} />
                  </div>
                )}
                <div className={`p-3.5 rounded-2xl text-sm font-medium font-tajawal max-w-[85%] leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-[#047857] text-white rounded-tl-none' 
                    : 'bg-white border border-gray-100 shadow-sm text-gray-800 rounded-tr-none whitespace-pre-line'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
               <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-full bg-[#047857] shrink-0 flex items-center justify-center text-white mt-1">
                    <Bot size={16} />
                  </div>
                 <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-2xl rounded-tr-none flex gap-1 items-center">
                   <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                   <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                 </div>
               </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Warning Banner */}
          <div className="bg-red-50 border-t border-b border-red-100 p-3 flex gap-3 items-start">
            <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
            <div className="font-tajawal">
              <strong className="text-red-700 text-sm block mb-0.5">تنبيه مهم</strong>
              <p className="text-red-600 text-xs leading-relaxed font-bold">هاد الخليط قوي بزاف ❗ معلقة صغيرة فالنهار كافية للي عندهم ضغط أو سكري → استشر طبيبك</p>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-white p-4 border-t border-gray-100">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="اكتب سؤالك هنا..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-3 text-sm outline-none focus:border-[#047857] focus:bg-white transition-all text-right font-tajawal"
              />
              <button 
                type="submit" 
                disabled={!inputText.trim() || isTyping}
                className="w-11 h-11 bg-[#047857] rounded-full flex items-center justify-center text-white shrink-0 hover:bg-[#065f46] transition-colors disabled:opacity-50"
              >
                <Send size={18} className="mr-1" />
              </button>
            </form>
            <div className="text-center mt-3">
              <span className="text-[10px] text-gray-400 font-medium font-tajawal flex items-center justify-center gap-1">
                <Leaf size={10} className="text-[#047857]" /> Ataa Atabi3a - مساعد ذكي
              </span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
