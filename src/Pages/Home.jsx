import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import StatsSection from '@/components/landing/StatsSection';
import AboutSection from '@/components/landing/AboutSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}