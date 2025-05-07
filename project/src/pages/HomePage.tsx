import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </main>
  );
}