"use client"; // MUST be the first line

import React from 'react';
import Hero from '../components/Hero';
import OrderForm from '../components/OrderForm';
import Benefits from '../components/Benefits';
import Ingredients from '../components/Ingredients';
import Testimonials from '../components/Testimonials';
import Certificate from '../components/Certificate';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer'; // <-- 1. Import the Footer

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* Central Content Container */}
      <div className="mx-auto w-full max-w-md md:max-w-2xl lg:max-w-5xl">
        <div id="order" className="scroll-mt-20">
          <OrderForm />
        </div>
        
        <Benefits />
        <Ingredients />
        <Testimonials />
        <Certificate />
        <FAQ />
      </div>

      {/* 2. Full-width Footer outside the central container */}
      <Footer />
      
    </main>
  );
}