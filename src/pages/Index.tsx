import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import ProgramsSection from '@/components/ProgramsSection';
import StatsMarquee from '@/components/StatsMarquee';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <WhySection />
      <ProgramsSection />
      <StatsMarquee />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
