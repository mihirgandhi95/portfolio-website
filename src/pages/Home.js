import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ExperiencesSection from '../components/ExperiencesSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperiencesSection />
      <ProjectsSection />
      <CertificationsSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}
