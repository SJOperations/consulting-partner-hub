import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import MethodologySection from '@/components/MethodologySection';
import ProcessSection from '@/components/ProcessSection';
import CalloutsSection from '@/components/CalloutsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Navbar />
      <Hero />
      <TrustSection />
      <MethodologySection />
      <ProcessSection />
      <CalloutsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
