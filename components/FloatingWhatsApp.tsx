"use client";

import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import OrderForm from '../components/OrderForm';
import Benefits from '../components/Benefits';
import Ingredients from '../components/Ingredients';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen pb-20 selection:bg-emerald-100 selection:text-emerald-900 bg-gray-50">
      <Hero />
      
      {/* RESPONSIVE CONTAINER CHANGES:
          - Mobile: Full width (max-w-md)
          - Tablet: max-w-2xl
          - PC: max-w-4xl or 5xl for a professional "Sales Page" look
      */}
      <div className="mx-auto bg-white shadow-xl transition-all duration-500 w-full max-w-md md:max-w-2xl lg:max-w-5xl overflow-hidden">
        
        {/* Grid layout for Tablet/PC to put form and benefits side-by-side if desired */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <section className="reveal lg:col-span-7 border-b lg:border-b-0 lg:border-l border-gray-100">
            <OrderForm />
          </section>
          
          <section className="reveal lg:col-span-5 bg-gray-50/50">
            <Benefits />
          </section>
        </div>

        <section className="reveal border-t border-gray-100">
          <Ingredients />
        </section>

        <section className="reveal border-t border-gray-100">
          <Testimonials />
        </section>

        <section className="reveal border-t border-gray-100">
          <FAQ />
        </section>

        <Footer />
      </div>

      <FloatingWhatsApp />
    </main>
  );
}