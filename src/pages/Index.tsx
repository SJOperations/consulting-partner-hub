import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import TrustSection from '@/components/TrustSection';
import MethodologyProcessSection from '@/components/MethodologyProcessSection';
import CalloutsSection from '@/components/CalloutsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <SEO />
      <Navbar />
      <Hero />
      <StatsSection />
      <TrustSection />
      <MethodologyProcessSection />
      <CalloutsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
