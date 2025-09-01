import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import ComplianceSection from '@/components/ComplianceSection';
import IndustriesSection from '@/components/IndustriesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ClientLogosSection from '@/components/ClientLogosSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ComplianceSection />
        <IndustriesSection />
        <TestimonialSection />
        <ClientLogosSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
